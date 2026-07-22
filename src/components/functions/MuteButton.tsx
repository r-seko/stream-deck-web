import DeckButton from "../DeckButton";

interface MuteButtonProps {
    id: string;
    label: string;
    icon: string;
    isMuted: boolean;
    onToggleMute: (id: string) => void;
}

export default function MuteButton({ id, label, icon, isMuted, onToggleMute }: MuteButtonProps) {
    return (
        <DeckButton
            onClick={() => onToggleMute(id)}
            isActive={isMuted}
            className={isMuted ? "bg-red-600 border-red-400 translate-y-1 scale-95 shadow-[inset_0_4px_12px_rgba(0,0,0,0.6)] ring-4 ring-red-500/50 brightness-125 animate-pulse" : "bg-amber-600 border-amber-400"}
        >
            <span className="text-3xl md:text-4xl mb-1 filter drop-shadow">
                {icon}
            </span>
            <span className="text-[10px] md:text-xs font-bold tracking-wide uppercase text-zinc-100">
                {label}
            </span>
        </DeckButton>
    );
}