import React from "react";
import { Check } from "lucide-react";
import { cn } from "../../lib/utils";

interface CheckboxProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  error?: string;
}

export const Checkbox = React.forwardRef<HTMLInputElement, CheckboxProps>(
  ({ className, label, error, ...props }, ref) => {
    return (
      <div className="space-y-1">
        <div className="flex items-center space-x-2">
          <div className="relative">
            <input
              type="checkbox"
              className="peer sr-only"
              ref={ref}
              {...props}
            />
            <div
              className={cn(
                "h-4 w-4 rounded border border-primary ring-offset-background",
                "peer-focus-visible:outline-none peer-focus-visible:ring-2 peer-focus-visible:ring-ring peer-focus-visible:ring-offset-2",
                "peer-data-[state=checked]:bg-primary peer-data-[state=checked]:text-primary-foreground",
                "peer-disabled:cursor-not-allowed peer-disabled:opacity-50",
                error && "border-red-500",
                className
              )}
            />
            <Check
              className="absolute top-0 left-0 h-4 w-4 text-primary-foreground opacity-0 peer-checked:opacity-100"
              strokeWidth={3}
            />
          </div>
          {label && (
            <label
              className={cn(
                "text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
              )}
            >
              {label}
            </label>
          )}
        </div>
        {error && <p className="text-sm text-red-500">{error}</p>}
      </div>
    );
  }
);
Checkbox.displayName = "Checkbox";