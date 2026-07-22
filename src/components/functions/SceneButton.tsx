import DeckButton from "../DeckButton";

interface SceneButtonProps {
    id: string;
    label: string;
    icon: string;
    colorClass: string;
    activeSceneId: string;
    onSceneChange: (id: string) => void;
}

export default function SceneButton({ id, label, icon, colorClass, activeSceneId, onSceneChange }: SceneButtonProps) {
    const isActive = activeSceneId === id;
    return (
        <DeckButton
            onClick={() => onSceneChange(id)}
            disabled={isActive}
            isActive={isActive}
            className={isActive ? "bg-blue-600 border-blue-300 translate-y-1 scale-95 shadow-[inset_0_4px_12px_rgba(0,0,0,0.6)] ring-4 ring-blue-500/50 brightness-125" : colorClass}
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