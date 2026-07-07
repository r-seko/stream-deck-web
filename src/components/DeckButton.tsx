import type { ReactNode } from "react";

interface DeckButtonProps {
    children: ReactNode;
    onClick: () => void;
    disabled?: boolean;
    className?: string;
    isActive?: boolean;
}

export default function DeckButton({ children, onClick, disabled = false, className = "", isActive = false }: DeckButtonProps) {
    return (
        <button
            onClick={onClick}
            disabled={disabled}
            className={`
        relative flex flex-col items-center justify-center 
        aspect-square w-full rounded-xl border-2 transition-all duration-100 ease-out
        touch-manipulation focus:outline-none select-none
        
        ${!isActive ? `
          shadow-[0_4px_0_rgba(0,0,0,0.4),0_8px_16px_rgba(0,0,0,0.3)]
          hover:-translate-y-0.5 hover:brightness-110 hover:shadow-[0_6px_0_rgba(0,0,0,0.4),0_12px_20px_rgba(0,0,0,0.3)]
          active:translate-y-1 active:scale-95 active:shadow-inner
          cursor-pointer
        ` : ""}
        
        ${className}
      `}
        >
            {children}
        </button>
    );
}