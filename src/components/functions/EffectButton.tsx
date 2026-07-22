import DeckButton from "../DeckButton";

interface EffectButtonProps {
    label: string;
    icon: string;
    colorClass: string;
}

export default function EffectButton({ label, icon, colorClass }: EffectButtonProps) {
    const handleTriggerEffect = () => {
        const audioPath = `/sounds/${label.toLowerCase()}.mp3`;
        const audio = new Audio(audioPath);
        audio.play().catch(() => { }); //効果音

        console.log(`Trigger Visual Effect: ${label}`); //画面演出
    };

    return (
        <DeckButton
            onClick={handleTriggerEffect}
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