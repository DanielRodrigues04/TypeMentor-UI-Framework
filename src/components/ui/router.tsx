import React, { createContext, useContext, useState, useEffect } from 'react';

// Types
interface RouterContextType {
  currentPath: string;
  navigate: (to: string) => void;
}

interface RouterProps {
  children: React.ReactNode;
}

interface RouteProps {
  path: string;
  element: React.ReactNode;
}

interface LinkProps extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
  to: string;
  children: React.ReactNode;
}

// Create context
const RouterContext = createContext<RouterContextType>({
  currentPath: '/',
  navigate: () => {},
});

// Router component
export const Router: React.FC<RouterProps> = ({ children }) => {
  const [currentPath, setCurrentPath] = useState(window.location.hash.slice(1) || '/');

  useEffect(() => {
    const handleHashChange = () => {
      setCurrentPath(window.location.hash.slice(1) || '/');
    };

    window.addEventListener('hashchange', handleHashChange);
    
    // Set initial hash if not present
    if (!window.location.hash) {
      window.location.hash = '#/';
    }

    return () => {
      window.removeEventListener('hashchange', handleHashChange);
    };
  }, []);

  const navigate = (to: string) => {
    window.location.hash = `#${to}`;
  };

  return (
    <RouterContext.Provider value={{ currentPath, navigate }}>
      {children}
    </RouterContext.Provider>
  );
};

// Routes component
export const Routes: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const { currentPath } = useContext(RouterContext);
  
  // Find the matching route
  const matchingElement = React.Children.toArray(children).find((child) => {
    if (React.isValidElement(child) && child.props.path) {
      // Exact match
      if (child.props.path === currentPath) {
        return true;
      }
      
      // Match route with params (e.g., /components/:id)
      const routeParts = child.props.path.split('/');
      const pathParts = currentPath.split('/');
      
      if (routeParts.length !== pathParts.length) {
        return false;
      }
      
      return routeParts.every((part, i) => {
        return part.startsWith(':') || part === pathParts[i];
      });
    }
    return false;
  });

  return <>{matchingElement || <div>Page not found</div>}</>;
};

// Route component
export const Route: React.FC<RouteProps> = ({ path, element }) => {
  return <>{element}</>;
};

// Link component
export const Link: React.FC<LinkProps> = ({ to, children, ...props }) => {
  const { navigate } = useContext(RouterContext);
  
  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    navigate(to);
  };
  
  return (
    <a href={`#${to}`} onClick={handleClick} {...props}>
      {children}
    </a>
  );
};

// Hook to get route params
export const useParams = () => {
  const { currentPath } = useContext(RouterContext);
  const params: Record<string, string> = {};
  
  // Extract route params from URL
  // This is a simplified version that works for basic cases
  const pathParts = currentPath.split('/');
  
  // Find the matching route to extract param names
  const routes = document.querySelectorAll('[data-route-path]');
  
  routes.forEach((route) => {
    const routePath = route.getAttribute('data-route-path') || '';
    const routeParts = routePath.split('/');
    
    if (routeParts.length === pathParts.length) {
      let isMatch = true;
      
      routeParts.forEach((part, i) => {
        if (part.startsWith(':')) {
          const paramName = part.slice(1);
          params[paramName] = pathParts[i];
        } else if (part !== pathParts[i]) {
          isMatch = false;
        }
      });
      
      if (!isMatch) {
        Object.keys(params).forEach((key) => delete params[key]);
      }
    }
  });
  
  return params;
};