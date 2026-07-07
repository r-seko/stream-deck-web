interface SystemContentProps {
    label: string;
    icon: string;
}

export default function SystemContent({ label, icon }: SystemContentProps) {
    return (
        <>
            <span className="text-3xl md:text-4xl mb-1 filter drop-shadow">
                {icon}
            </span>
            <span className="text-[10px] md:text-xs font-bold tracking-wide uppercase text-zinc-100">
                {label}
            </span>
        </>
    );
}