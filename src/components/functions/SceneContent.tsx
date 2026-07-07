interface SceneContentProps {
    label: string;
    icon: string;
    isActive: boolean;
}

export default function SceneContent({ label, icon, isActive }: SceneContentProps) {
    return (
        <>
            <span className={`text-3xl md:text-4xl mb-1 filter drop-shadow transition-transform ${isActive ? 'translate-y-0.5' : ''}`}>
                {icon}
            </span>
            <span className="text-[10px] md:text-xs font-bold tracking-wide uppercase text-zinc-100">
                {label}
            </span>
        </>
    );
}