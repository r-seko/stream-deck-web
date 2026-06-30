import type { DeckButtonConfig } from "../types/deck";

interface DeckButtonProps {
    button: DeckButtonConfig;
    isActive: boolean;
    onClick: () => void;
}

export default function DeckButton({ button, isActive, onClick }: DeckButtonProps) {
    return (
        <button
            onClick={onClick}
            disabled={isActive}
            className={`
                relative flex flex-col items-center justify-center 
                aspect-square rounded-xl border-2 transition-all duration-100 ease-out
                touch-manipulation focus:outline-none
            ${!isActive ? `
                ${button.colorClass} 
                shadow-[0_4px_0_rgba(0,0,0,0.4),0_8px_16px_rgba(0,0,0,0.3)]
                hover:-translate-y-0.5 hover:brightness-110 hover:shadow-[0_6px_0_rgba(0,0,0,0.4),0_12px_20px_rgba(0,0,0,0.3)]
                active:translate-y-1 active:scale-95 active:shadow-inner
                cursor-pointer
            ` : ''}
            ${isActive ? `
                bg-blue-600 border-blue-300 translate-y-1 scale-95
                shadow-[inset_0_4px_12px_rgba(0,0,0,0.6)]
                ring-4 ring-blue-500/50 brightness-125
                cursor-default pointer-events-none
            ` : ''}
        `}>
            <span className={`text-3xl md:text-4xl mb-1 filter drop-shadow transition-transform ${isActive ? 'translate-y-0.5' : ''}`}>
                {button.icon}
            </span>

            <span className="text-[10px] md:text-xs font-bold tracking-wide uppercase text-zinc-100">
                {button.label}
            </span>
        </button>
    );
}