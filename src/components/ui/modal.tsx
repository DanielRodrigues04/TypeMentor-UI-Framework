import React, { Fragment } from "react";
import { X } from "lucide-react";
import { cn } from "../../lib/utils";

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  children: React.ReactNode;
  className?: string;
}

const ModalOverlay = ({ onClick }: { onClick: () => void }) => (
  <div 
    className="fixed inset-0 bg-black/50 z-40" 
    onClick={onClick}
  />
);

const ModalContainer = ({ 
  children, 
  className 
}: { 
  children: React.ReactNode;
  className?: string;
}) => (
  <div className="fixed inset-0 flex items-center justify-center z-50 p-4">
    <div 
      className={cn(
        "bg-white rounded-lg shadow-lg w-full max-w-md max-h-[90vh] overflow-auto",
        className
      )}
      onClick={(e) => e.stopPropagation()}
    >
      {children}
    </div>
  </div>
);

const Modal = ({ isOpen, onClose, children, className }: ModalProps) => {
  if (!isOpen) return null;

  return (
    <Fragment>
      <ModalOverlay onClick={onClose} />
      <ModalContainer className={className}>
        {children}
      </ModalContainer>
    </Fragment>
  );
};

const ModalHeader = ({ 
  children, 
  className 
}: { 
  children: React.ReactNode;
  className?: string;
}) => (
  <div className={cn("flex items-center justify-between p-4 border-b", className)}>
    <div className="text-lg font-semibold">{children}</div>
    <button 
      className="p-1 rounded-full hover:bg-gray-100" 
      onClick={() => {
        const modal = document.querySelector("[data-modal]");
        const closeEvent = new CustomEvent("modal-close");
        modal?.dispatchEvent(closeEvent);
      }}
    >
      <X className="h-5 w-5" />
    </button>
  </div>
);

const ModalBody = ({ 
  children, 
  className 
}: { 
  children: React.ReactNode;
  className?: string;
}) => (
  <div className={cn("p-4", className)}>
    {children}
  </div>
);

const ModalFooter = ({ 
  children, 
  className 
}: { 
  children: React.ReactNode;
  className?: string;
}) => (
  <div className={cn("p-4 border-t flex justify-end space-x-2", className)}>
    {children}
  </div>
);

export { Modal, ModalHeader, ModalBody, ModalFooter };