import DeckButton from "../DeckButton";

interface EmergencyButtonProps {
    label: string;
    icon: string;
    colorClass: string;
}

export default function EmergencyButton({ label, icon, colorClass }: EmergencyButtonProps) {
    const handleEmergency = () => {
        console.log("Emergency Clear");
    };

    return (
        <DeckButton
            onClick={handleEmergency}
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