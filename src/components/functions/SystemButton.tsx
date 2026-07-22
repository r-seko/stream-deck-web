import DeckButton from "../DeckButton";

interface SystemButtonProps {
    label: string;
    icon: string;
    colorClass: string;
}

export default function SystemButton({ label, icon, colorClass }: SystemButtonProps) {
    const handleSystem = () => {
        console.log(`System: ${label}`);
    };

    return (
        <DeckButton
            onClick={handleSystem}
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