import React, { useState, useRef, useEffect } from "react";
import { ChevronDown } from "lucide-react";
import { cn } from "../../lib/utils";

interface SelectOption {
  value: string;
  label: string;
  disabled?: boolean;
}

interface SelectProps extends Omit<React.HTMLAttributes<HTMLDivElement>, "onChange"> {
  options: SelectOption[];
  value?: string;
  onChange?: (value: string) => void;
  placeholder?: string;
  disabled?: boolean;
  error?: string;
}

export function Select({
  className,
  options,
  value,
  onChange,
  placeholder = "Select an option",
  disabled = false,
  error,
  ...props
}: SelectProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedValue, setSelectedValue] = useState(value || "");
  const selectRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (value !== undefined) {
      setSelectedValue(value);
    }
  }, [value]);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (selectRef.current && !selectRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const handleSelect = (option: SelectOption) => {
    if (option.disabled) return;
    
    setSelectedValue(option.value);
    onChange?.(option.value);
    setIsOpen(false);
  };

  const selectedOption = options.find(option => option.value === selectedValue);

  return (
    <div className="space-y-1" ref={selectRef}>
      <div
        className={cn(
          "relative",
          disabled && "opacity-50 cursor-not-allowed",
          className
        )}
        {...props}
      >
        <div
          className={cn(
            "flex h-10 w-full items-center justify-between rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background",
            !disabled && "cursor-pointer",
            error && "border-red-500",
            "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
          )}
          onClick={() => !disabled && setIsOpen(!isOpen)}
        >
          <span className={!selectedValue ? "text-muted-foreground" : ""}>
            {selectedOption ? selectedOption.label : placeholder}
          </span>
          <ChevronDown className="h-4 w-4 opacity-50" />
        </div>
        
        {isOpen && (
          <div className="absolute z-10 mt-1 w-full rounded-md border border-input bg-background shadow-md">
            <ul className="max-h-60 overflow-auto py-1">
              {options.map((option) => (
                <li
                  key={option.value}
                  className={cn(
                    "px-3 py-2 text-sm",
                    option.value === selectedValue && "bg-primary/10 text-primary",
                    option.disabled ? "opacity-50 cursor-not-allowed" : "cursor-pointer hover:bg-accent"
                  )}
                  onClick={() => handleSelect(option)}
                >
                  {option.label}
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
      
      {error && (
        <p className="text-sm text-red-500">{error}</p>
      )}
    </div>
  );
}