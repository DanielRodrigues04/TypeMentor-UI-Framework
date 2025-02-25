import React, { useState } from "react";
import { Menu, X } from "lucide-react";
import { cn } from "../../lib/utils";

interface NavbarProps extends React.HTMLAttributes<HTMLElement> {
  logo?: React.ReactNode;
  children?: React.ReactNode;
}

interface NavbarItemProps extends React.HTMLAttributes<HTMLLIElement> {
  href?: string;
  active?: boolean;
}

const Navbar = React.forwardRef<HTMLElement, NavbarProps>(
  ({ className, logo, children, ...props }, ref) => {
    const [isOpen, setIsOpen] = useState(false);

    return (
      <nav
        ref={ref}
        className={cn(
          "bg-white border-b px-4 py-2 flex flex-wrap justify-between items-center",
          className
        )}
        {...props}
      >
        <div className="flex items-center">
          {logo}
        </div>

        <button
          className="lg:hidden p-2"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>

        <div
          className={cn(
            "w-full lg:flex lg:items-center lg:w-auto",
            isOpen ? "block" : "hidden"
          )}
        >
          <ul className="lg:flex lg:space-x-4 pt-4 lg:pt-0">
            {children}
          </ul>
        </div>
      </nav>
    );
  }
);
Navbar.displayName = "Navbar";

const NavbarItem = React.forwardRef<HTMLLIElement, NavbarItemProps>(
  ({ className, href, active, children, ...props }, ref) => {
    return (
      <li
        ref={ref}
        className={cn(
          "block py-2 lg:py-0",
          className
        )}
        {...props}
      >
        {href ? (
          <a
            href={href}
            className={cn(
              "px-4 py-2 block lg:inline-block rounded-md",
              active ? "bg-primary/10 text-primary" : "hover:bg-gray-100"
            )}
          >
            {children}
          </a>
        ) : (
          children
        )}
      </li>
    );
  }
);
NavbarItem.displayName = "NavbarItem";

export { Navbar, NavbarItem };