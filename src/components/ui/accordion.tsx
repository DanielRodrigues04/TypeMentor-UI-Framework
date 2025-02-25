import React, { useState } from "react";
import { ChevronDown } from "lucide-react";
import { cn } from "../../lib/utils";

interface AccordionProps extends React.HTMLAttributes<HTMLDivElement> {
  type?: "single" | "multiple";
  defaultValue?: string | string[];
  collapsible?: boolean;
}

interface AccordionItemProps extends React.HTMLAttributes<HTMLDivElement> {
  value: string;
}

interface AccordionTriggerProps extends React.HTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
}

interface AccordionContentProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
}

const AccordionContext = React.createContext<{
  value: string | string[];
  onValueChange: (value: string) => void;
  collapsible?: boolean;
  type?: "single" | "multiple";
}>({
  value: "",
  onValueChange: () => {},
});

const Accordion = React.forwardRef<HTMLDivElement, AccordionProps>(
  ({ className, type = "single", defaultValue = "", collapsible = false, ...props }, ref) => {
    const [value, setValue] = useState<string | string[]>(defaultValue);

    const onValueChange = (itemValue: string) => {
      if (type === "single") {
        setValue(value === itemValue && collapsible ? "" : itemValue);
      } else {
        setValue((prev) => {
          if (Array.isArray(prev)) {
            return prev.includes(itemValue)
              ? prev.filter((v) => v !== itemValue)
              : [...prev, itemValue];
          }
          return [itemValue];
        });
      }
    };

    return (
      <AccordionContext.Provider value={{ value, onValueChange, collapsible, type }}>
        <div ref={ref} className={cn("space-y-1", className)} {...props} />
      </AccordionContext.Provider>
    );
  }
);
Accordion.displayName = "Accordion";

const AccordionItem = React.forwardRef<HTMLDivElement, AccordionItemProps>(
  ({ className, value, ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={cn("border rounded-md overflow-hidden", className)}
        data-value={value}
        {...props}
      />
    );
  }
);
AccordionItem.displayName = "AccordionItem";

const AccordionTrigger = React.forwardRef<HTMLButtonElement, AccordionTriggerProps>(
  ({ className, children, ...props }, ref) => {
    const { value, onValueChange, type } = React.useContext(AccordionContext);
    const itemValue = (props.id || "").toString();
    
    const isExpanded = type === "multiple"
      ? Array.isArray(value) && value.includes(itemValue)
      : value === itemValue;

    return (
      <button
        ref={ref}
        className={cn(
          "flex w-full justify-between items-center p-4 text-left font-medium",
          className
        )}
        onClick={() => onValueChange(itemValue)}
        aria-expanded={isExpanded}
        {...props}
      >
        {children}
        <ChevronDown
          className={cn(
            "h-4 w-4 transition-transform duration-200",
            isExpanded ? "transform rotate-180" : ""
          )}
        />
      </button>
    );
  }
);
AccordionTrigger.displayName = "AccordionTrigger";

const AccordionContent = React.forwardRef<HTMLDivElement, AccordionContentProps>(
  ({ className, children, ...props }, ref) => {
    const { value, type } = React.useContext(AccordionContext);
    const itemValue = props["data-value"]?.toString() || "";
    
    const isExpanded = type === "multiple"
      ? Array.isArray(value) && value.includes(itemValue)
      : value === itemValue;

    return (
      <div
        ref={ref}
        className={cn(
          "overflow-hidden transition-all",
          isExpanded ? "max-h-96" : "max-h-0",
          className
        )}
        {...props}
      >
        <div className="p-4 pt-0">{children}</div>
      </div>
    );
  }
);
AccordionContent.displayName = "AccordionContent";

export { Accordion, AccordionItem, AccordionTrigger, AccordionContent };