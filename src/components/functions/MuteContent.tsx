interface MuteContentProps {
    label: string;
    icon: string;
    isMuted: boolean;
}

export default function MuteContent({ label, icon, isMuted }: MuteContentProps) {
    return (
        <>
            <span className={`text-3xl md:text-4xl mb-1 filter drop-shadow transition-transform ${isMuted ? 'translate-y-0.5' : ''}`}>
                {icon}
            </span>
            <span className="text-[10px] md:text-xs font-bold tracking-wide uppercase text-zinc-100">
                {label}
            </span>
        </>
    );
}