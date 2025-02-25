import React, { useState } from 'react';
import { 
  Button, 
  Card, 
  CardHeader, 
  CardTitle, 
  CardDescription, 
  CardContent, 
  CardFooter,
  Input,
  Navbar,
  NavbarItem,
  Grid,
  GridItem,
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
  Badge,
  Avatar,
  Tabs,
  TabsList,
  TabsTrigger,
  TabsContent,
  Tooltip,
  Select,
  Checkbox,
  Spinner,
  Alert,
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter
} from './components/ui';
import { BookOpen, Code, Package, Settings, Users, Copy, Check, Eye, EyeOff, ChevronRight } from 'lucide-react';
import ComponentShowcase from './pages/ComponentShowcase';
import { Router, Routes, Route, Link } from './components/ui/router';

function App() {
  const [darkMode, setDarkMode] = useState(false);
  
  React.useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [darkMode]);

  return (
    <Router>
      <div className={`min-h-screen bg-background ${darkMode ? 'dark' : ''}`}>
        <Navbar 
          logo={
            <Link to="/" className="flex items-center space-x-2">
              <Package className="h-6 w-6 text-primary" />
              <span className="text-xl font-bold">TypeMentor</span>
            </Link>
          }
          className="sticky top-0 z-50 shadow-sm"
        >
          <NavbarItem>
            <Link to="/" className="px-4 py-2 block lg:inline-block rounded-md hover:bg-gray-100">Home</Link>
          </NavbarItem>
          <NavbarItem>
            <Link to="/components" className="px-4 py-2 block lg:inline-block rounded-md hover:bg-gray-100">Components</Link>
          </NavbarItem>
          <NavbarItem>
            <Link to="/documentation" className="px-4 py-2 block lg:inline-block rounded-md hover:bg-gray-100">Documentation</Link>
          </NavbarItem>
          <NavbarItem>
            <button 
              onClick={() => setDarkMode(!darkMode)}
              className="px-4 py-2 block lg:inline-block rounded-md hover:bg-gray-100"
            >
              {darkMode ? 'Light Mode' : 'Dark Mode'}
            </button>
          </NavbarItem>
        </Navbar>

        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/components" element={<ComponentShowcase />} />
          <Route path="/documentation" element={<DocumentationPage />} />
          <Route path="/components/:componentId" element={<ComponentDetailPage />} />
        </Routes>
        
        <footer className="bg-muted py-8">
          <div className="container mx-auto px-4 text-center">
            <p className="text-muted-foreground">
              TypeMentor UI Framework © 2025. All rights reserved.
            </p>
          </div>
        </footer>
      </div>
    </Router>
  );
}

function HomePage() {
  return (
    <main className="container mx-auto px-4 py-8">
      <div className="mb-8 text-center">
        <h1 className="text-4xl font-bold mb-4">TypeMentor UI</h1>
        <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
          A library of responsive and generic UI components for TypeScript projects
        </p>
      </div>

      <Tabs defaultValue="overview" className="mb-8">
        <TabsList className="mb-4">
          <TabsTrigger value="overview">Overview</TabsTrigger>
          <TabsTrigger value="components">Components</TabsTrigger>
          <TabsTrigger value="installation">Installation</TabsTrigger>
        </TabsList>
        
        <TabsContent value="overview">
          <Card>
            <CardHeader>
              <CardTitle>TypeMentor UI Framework</CardTitle>
              <CardDescription>
                A comprehensive UI component library for TypeScript projects
              </CardDescription>
            </CardHeader>
            <CardContent>
              <p className="mb-4">
                TypeMentor is an interactive library designed to facilitate the creation of user interfaces in web applications. 
                With a focus on generic and responsive components, it offers a wide variety of ready-to-use components for your front-end projects.
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                <Badge variant="default">TypeScript</Badge>
                <Badge variant="secondary">React</Badge>
                <Badge variant="outline">Responsive</Badge>
                <Badge variant="success">Accessible</Badge>
                <Badge variant="info">Customizable</Badge>
              </div>
              <Alert variant="info" className="mt-4">
                <p>TypeMentor is fully compatible with React and TypeScript projects.</p>
              </Alert>
            </CardContent>
            <CardFooter>
              <Link to="/components">
                <Button>Explore Components</Button>
              </Link>
            </CardFooter>
          </Card>
        </TabsContent>
        
        <TabsContent value="components">
          <Grid cols={1} colsMd={2} colsLg={3} gap={6}>
            <ComponentCard 
              title="Buttons" 
              description="Interactive buttons with various styles and states"
              to="/components/button"
            />
            <ComponentCard 
              title="Cards" 
              description="Containers for organizing related content and actions"
              to="/components/card"
            />
            <ComponentCard 
              title="Inputs" 
              description="Form controls for user input with validation"
              to="/components/input"
            />
            <ComponentCard 
              title="Modals" 
              description="Dialog windows for focused interactions"
              to="/components/modal"
            />
            <ComponentCard 
              title="Navigation" 
              description="Components for site navigation and structure"
              to="/components/navigation"
            />
            <ComponentCard 
              title="Layout" 
              description="Grid and layout components for page structure"
              to="/components/layout"
            />
            <ComponentCard 
              title="Data Display" 
              description="Components for displaying various types of data"
              to="/components/data-display"
            />
            <ComponentCard 
              title="Feedback" 
              description="Components for user feedback and notifications"
              to="/components/feedback"
            />
            <ComponentCard 
              title="Overlays" 
              description="Components that appear over other content"
              to="/components/overlays"
            />
          </Grid>
        </TabsContent>
        
        <TabsContent value="installation">
          <Card>
            <CardHeader>
              <CardTitle>Installation</CardTitle>
              <CardDescription>
                How to install and use TypeMentor in your project
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div>
                  <h3 className="text-lg font-medium mb-2">1. Install the package</h3>
                  <CodeBlock code="npm install typementor" />
                </div>
                
                <div>
                  <h3 className="text-lg font-medium mb-2">2. Import styles</h3>
                  <CodeBlock code="import 'typementor/dist/styles.css';" />
                </div>
                
                <div>
                  <h3 className="text-lg font-medium mb-2">3. Import and use components</h3>
                  <CodeBlock code={`import React from 'react';
import { Button, Card, Input } from 'typementor';

function App() {
  return (
    <Card>
      <h2>Hello TypeMentor</h2>
      <Input placeholder="Enter your name" />
      <Button>Submit</Button>
    </Card>
  );
}`} />
                </div>
              </div>
            </CardContent>
            <CardFooter>
              <Link to="/documentation">
                <Button>View Documentation</Button>
              </Link>
            </CardFooter>
          </Card>
        </TabsContent>
      </Tabs>
      
      <div className="mt-12 text-center">
        <h2 className="text-2xl font-bold mb-4">Key Features</h2>
        <Grid cols={1} colsMd={2} colsLg={4} gap={6} className="mb-8">
          <Card>
            <CardContent className="pt-6 text-center">
              <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-full bg-primary/10">
                <BookOpen className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-lg font-medium mb-2">Comprehensive</h3>
              <p className="text-muted-foreground">
                A wide range of UI components for all your needs
              </p>
            </CardContent>
          </Card>
          
          <Card>
            <CardContent className="pt-6 text-center">
              <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-full bg-primary/10">
                <Code className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-lg font-medium mb-2">TypeScript</h3>
              <p className="text-muted-foreground">
                Fully typed components for better developer experience
              </p>
            </CardContent>
          </Card>
          
          <Card>
            <CardContent className="pt-6 text-center">
              <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-full bg-primary/10">
                <Settings className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-lg font-medium mb-2">Customizable</h3>
              <p className="text-muted-foreground">
                Easily customize components to match your design system
              </p>
            </CardContent>
          </Card>
          
          <Card>
            <CardContent className="pt-6 text-center">
              <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-full bg-primary/10">
                <Users className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-lg font-medium mb-2">Accessible</h3>
              <p className="text-muted-foreground">
                Built with accessibility in mind for all users
              </p>
            </CardContent>
          </Card>
        </Grid>
      </div>
    </main>
  );
}

function ComponentCard({ title, description, to }) {
  return (
    <Card className="hover:shadow-md transition-shadow">
      <CardContent className="pt-6">
        <h3 className="text-lg font-medium mb-2">{title}</h3>
        <p className="text-muted-foreground mb-4">{description}</p>
        <Link to={to}>
          <Button variant="outline" className="w-full">
            View <ChevronRight className="ml-2 h-4 w-4" />
          </Button>
        </Link>
      </CardContent>
    </Card>
  );
}

function CodeBlock({ code }) {
  const [copied, setCopied] = useState(false);
  
  const copyToClipboard = () => {
    navigator.clipboard.writeText(code);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };
  
  return (
    <div className="relative">
      <pre className="bg-muted p-4 rounded-md overflow-x-auto">
        <code>{code}</code>
      </pre>
      <button 
        onClick={copyToClipboard}
        className="absolute top-2 right-2 p-2 rounded-md bg-background/80 hover:bg-background"
      >
        {copied ? <Check className="h-4 w-4" /> : <Copy className="h-4 w-4" />}
      </button>
    </div>
  );
}

function DocumentationPage() {
  return (
    <main className="container mx-auto px-4 py-8">
      <div className="mb-8">
        <h1 className="text-3xl font-bold mb-4">Documentation</h1>
        <p className="text-muted-foreground">
          Comprehensive documentation for TypeMentor UI components
        </p>
      </div>
      
      <Grid cols={1} gap={6}>
        <Card>
          <CardHeader>
            <CardTitle>Getting Started</CardTitle>
          </CardHeader>
          <CardContent>
            <Accordion type="single" collapsible>
              <AccordionItem value="installation">
                <AccordionTrigger id="installation">Installation</AccordionTrigger>
                <AccordionContent data-value="installation">
                  <p className="mb-2">Install TypeMentor using npm:</p>
                  <CodeBlock code="npm install typementor" />
                </AccordionContent>
              </AccordionItem>
              
              <AccordionItem value="usage">
                <AccordionTrigger id="usage">Basic Usage</AccordionTrigger>
                <AccordionContent data-value="usage">
                  <p className="mb-2">Import and use components in your React application:</p>
                  <CodeBlock code={`import React from 'react';
import { Button, Card } from 'typementor';

function App() {
  return (
    <Card>
      <h2>Hello TypeMentor</h2>
      <Button>Click me</Button>
    </Card>
  );
}`} />
                </AccordionContent>
              </AccordionItem>
              
              <AccordionItem value="theming">
                <AccordionTrigger id="theming">Theming</AccordionTrigger>
                <AccordionContent data-value="theming">
                  <p className="mb-2">TypeMentor uses CSS variables for theming. You can customize the theme by overriding these variables:</p>
                  <CodeBlock code={`:root {
  --primary: 221.2 83.2% 53.3%;
  --primary-foreground: 210 40% 98%;
  
  /* Override other variables as needed */
}`} />
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </CardContent>
        </Card>
        
        <Card>
          <CardHeader>
            <CardTitle>Component API Reference</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="mb-4">
              Select a component to view its detailed API documentation:
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2">
              {[
                "Button", "Card", "Input", "Modal", "Navbar", "Grid", 
                "Accordion", "Badge", "Avatar", "Tabs", "Tooltip", 
                "Select", "Checkbox", "Spinner", "Alert"
              ].map((component) => (
                <Link 
                  key={component} 
                  to={`/components/${component.toLowerCase()}`}
                  className="p-2 border rounded-md hover:bg-accent flex items-center"
                >
                  <span>{component}</span>
                  <ChevronRight className="ml-auto h-4 w-4" />
                </Link>
              ))}
            </div>
          </CardContent>
        </Card>
      </Grid>
    </main>
  );
}

function ComponentDetailPage() {
  // In a real implementation, this would use the route params to determine which component to show
  return (
    <main className="container mx-auto px-4 py-8">
      <div className="mb-8">
        <h1 className="text-3xl font-bold mb-4">Component Detail</h1>
        <p className="text-muted-foreground">
          This page would show detailed documentation for a specific component
        </p>
      </div>
      
      <Card>
        <CardHeader>
          <CardTitle>Button Component</CardTitle>
          <CardDescription>
            Interactive button component with various styles and states
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-6">
            <div>
              <h3 className="text-lg font-medium mb-2">Examples</h3>
              <div className="flex flex-wrap gap-2 p-4 border rounded-md">
                <Button>Default</Button>
                <Button variant="secondary">Secondary</Button>
                <Button variant="outline">Outline</Button>
                <Button variant="ghost">Ghost</Button>
                <Button variant="link">Link</Button>
                <Button variant="destructive">Destructive</Button>
              </div>
            </div>
            
            <div>
              <h3 className="text-lg font-medium mb-2">Usage</h3>
              <CodeBlock code={`import { Button } from 'typementor';

function Example() {
  return (
    <Button variant="primary" size="md" onClick={() => console.log('Clicked!')}>
      Click me
    </Button>
  );
}`} />
            </div>
            
            <div>
              <h3 className="text-lg font-medium mb-2">Props</h3>
              <table className="w-full border-collapse">
                <thead>
                  <tr className="border-b">
                    <th className="text-left py-2">Prop</th>
                    <th className="text-left py-2">Type</th>
                    <th className="text-left py-2">Default</th>
                    <th className="text-left py-2">Description</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b">
                    <td className="py-2">variant</td>
                    <td className="py-2 text-sm">
                      <code>default | secondary | outline | ghost | link | destructive</code>
                    </td>
                    <td className="py-2"><code>default</code></td>
                    <td className="py-2">The visual style of the button</td>
                  </tr>
                  <tr className="border-b">
                    <td className="py-2">size</td>
                    <td className="py-2 text-sm">
                      <code>sm | md | lg | icon</code>
                    </td>
                    <td className="py-2"><code>md</code></td>
                    <td className="py-2">The size of the button</td>
                  </tr>
                  <tr className="border-b">
                    <td className="py-2">disabled</td>
                    <td className="py-2 text-sm">
                      <code>boolean</code>
                    </td>
                    <td className="py-2"><code>false</code></td>
                    <td className="py-2">Whether the button is disabled</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </CardContent>
      </Card>
    </main>
  );
}

export default App;