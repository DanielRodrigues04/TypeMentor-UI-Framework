import React, { useState } from "react";
import { cn } from "../../lib/utils";

interface TooltipProps {
  content: React.ReactNode;
  children: React.ReactNode;
  position?: "top" | "right" | "bottom" | "left";
  delay?: number;
  className?: string;
}

export function Tooltip({
  content,
  children,
  position = "top",
  delay = 0,
  className,
}: TooltipProps) {
  const [isVisible, setIsVisible] = useState(false);
  const [timeoutId, setTimeoutId] = useState<NodeJS.Timeout | null>(null);

  const showTooltip = () => {
    if (delay) {
      const id = setTimeout(() => setIsVisible(true), delay);
      setTimeoutId(id);
    } else {
      setIsVisible(true);
    }
  };

  const hideTooltip = () => {
    if (timeoutId) {
      clearTimeout(timeoutId);
      setTimeoutId(null);
    }
    setIsVisible(false);
  };

  const positionClasses = {
    top: "bottom-full left-1/2 -translate-x-1/2 mb-2",
    right: "left-full top-1/2 -translate-y-1/2 ml-2",
    bottom: "top-full left-1/2 -translate-x-1/2 mt-2",
    left: "right-full top-1/2 -translate-y-1/2 mr-2",
  };

  const arrowClasses = {
    top: "bottom-[-6px] left-1/2 -translate-x-1/2 border-l-transparent border-r-transparent border-b-transparent",
    right: "left-[-6px] top-1/2 -translate-y-1/2 border-t-transparent border-b-transparent border-l-transparent",
    bottom: "top-[-6px] left-1/2 -translate-x-1/2 border-l-transparent border-r-transparent border-t-transparent",
    left: "right-[-6px] top-1/2 -translate-y-1/2 border-t-transparent border-b-transparent border-r-transparent",
  };

  return (
    <div className="relative inline-block" onMouseEnter={showTooltip} onMouseLeave={hideTooltip}>
      {children}
      {isVisible && (
        <div
          className={cn(
            "absolute z-50 px-2 py-1 text-sm font-medium text-white bg-gray-900 rounded-md shadow-sm max-w-xs",
            positionClasses[position],
            className
          )}
        >
          {content}
          <div
            className={cn(
              "absolute w-0 h-0 border-4 border-gray-900",
              arrowClasses[position]
            )}
          />
        </div>
      )}
    </div>
  );
}