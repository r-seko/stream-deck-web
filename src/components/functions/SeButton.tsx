import DeckButton from "../DeckButton";

interface SeButtonProps {
    label: string;
    icon: string;
    colorClass: string;
}

export default function SeButton({ label, icon, colorClass }: SeButtonProps) {
    const handlePlaySound = () => {
        const audioPath = `/sounds/${label.toLowerCase()}.mp3`;
        const audio = new Audio(audioPath);
        audio.play().catch(() => { });
    };


    return (
        <DeckButton
            onClick={handlePlaySound}
            isActive={false}
            className={colorClass}
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