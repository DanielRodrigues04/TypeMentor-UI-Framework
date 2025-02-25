import React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { AlertCircle, CheckCircle, Info, XCircle } from "lucide-react";
import { cn } from "../../lib/utils";

const alertVariants = cva(
  "relative w-full rounded-lg border p-4",
  {
    variants: {
      variant: {
        default: "bg-background text-foreground",
        info: "border-blue-200 bg-blue-50 text-blue-800",
        success: "border-green-200 bg-green-50 text-green-800",
        warning: "border-yellow-200 bg-yellow-50 text-yellow-800",
        error: "border-red-200 bg-red-50 text-red-800",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  }
);

interface AlertProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof alertVariants> {
  title?: string;
  icon?: React.ReactNode;
  onClose?: () => void;
}

const iconMap = {
  info: <Info className="h-5 w-5 text-blue-500" />,
  success: <CheckCircle className="h-5 w-5 text-green-500" />,
  warning: <AlertCircle className="h-5 w-5 text-yellow-500" />,
  error: <XCircle className="h-5 w-5 text-red-500" />,
};

export function Alert({
  className,
  variant = "default",
  title,
  children,
  icon,
  onClose,
  ...props
}: AlertProps) {
  const alertIcon = icon || (variant !== "default" ? iconMap[variant] : null);

  return (
    <div
      className={cn(alertVariants({ variant }), className)}
      role="alert"
      {...props}
    >
      <div className="flex items-start">
        {alertIcon && <div className="mr-3 mt-0.5">{alertIcon}</div>}
        <div className="flex-1">
          {title && <h5 className="mb-1 font-medium">{title}</h5>}
          <div className="text-sm">{children}</div>
        </div>
        {onClose && (
          <button
            onClick={onClose}
            className="ml-3 inline-flex h-5 w-5 items-center justify-center rounded-full text-gray-500 hover:bg-gray-200"
          >
            <span className="sr-only">Close</span>
            <svg
              className="h-3 w-3"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
        )}
      </div>
    </div>
  );
}