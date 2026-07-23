import type { DeckButtonConfig } from "../types/deck";

export const INITIAL_DECK_DATA: Record<number, DeckButtonConfig[]> = {
    1: [
        { id: "1", type: "scene", label: "Intro", icon: "🎬", colorClass: "bg-zinc-800 border-zinc-700 hover:bg-zinc-700 text-white" },
        { id: "2", type: "scene", label: "Main", icon: "🎮", colorClass: "bg-zinc-800 border-zinc-700 hover:bg-zinc-700 text-white" },
        { id: "3", type: "scene", label: "Chat", icon: "💬", colorClass: "bg-zinc-800 border-zinc-700 hover:bg-zinc-700 text-white" },
        { id: "4", type: "scene", label: "Collab", icon: "👥", colorClass: "bg-zinc-800 border-zinc-700 hover:bg-zinc-700 text-white" },
        { id: "5", type: "scene", label: "Outro", icon: "👋", colorClass: "bg-zinc-800 border-zinc-700 hover:bg-zinc-700 text-white" },

        { id: "6", type: "action", label: "Welcome", icon: "✨", colorClass: "bg-purple-900/60 border-purple-700 hover:bg-purple-800 text-white" },
        { id: "7", type: "action", label: "Sub", icon: "🔔", colorClass: "bg-purple-900/60 border-purple-700 hover:bg-purple-800 text-white" },
        { id: "8", type: "action", label: "Focus", icon: "🎯", colorClass: "bg-purple-900/60 border-purple-700 hover:bg-purple-800 text-white" },
        { id: "9", type: "mute", label: "Mute BGM", icon: "🎵", colorClass: "bg-amber-600 border-amber-400 text-white" },
        { id: "10", type: "mute", label: "Mute Mic", icon: "🎙️", colorClass: "bg-amber-600 border-amber-400 text-white" },

        { id: "11", type: "action", label: "Clap", icon: "👏", colorClass: "bg-emerald-900/60 border-emerald-700 hover:bg-emerald-800 text-white" },
        { id: "12", type: "action", label: "Fanfare", icon: "🎉", colorClass: "bg-emerald-900/60 border-emerald-700 hover:bg-emerald-800 text-white" },
        { id: "13", type: "action", label: "Goon", icon: "💥", colorClass: "bg-emerald-900/60 border-emerald-700 hover:bg-emerald-800 text-white" },
        { id: "14", type: "emergency", label: "SOS", icon: "🚨", colorClass: "bg-red-900 border-red-700 hover:bg-red-800 text-white" },
        { id: "15", type: "system", label: "Settings", icon: "⚙️", colorClass: "bg-zinc-700 border-zinc-600 hover:bg-zinc-600 text-white" },
    ],
    2: [
        { id: "2-1", type: "scene", label: "Away", icon: "☕", colorClass: "bg-zinc-800 border-zinc-700 hover:bg-zinc-700 text-white" },
        { id: "2", type: "scene", label: "Main", icon: "🎮", colorClass: "bg-zinc-800 border-zinc-700 hover:bg-zinc-700 text-white" }, // 1ページ目と同一IDで連動
        { id: "2-2", type: "system", label: "Discord", icon: "🎧", colorClass: "bg-indigo-900 border-indigo-700 hover:bg-indigo-800 text-white" },
        { id: "2-3", type: "system", label: "OBS Rec", icon: "🔴", colorClass: "bg-zinc-800 border-zinc-700 hover:bg-zinc-700 text-white" },
        { id: "2-4", type: "system", label: "Browser", icon: "🌐", colorClass: "bg-zinc-700 border-zinc-600 hover:bg-zinc-600 text-white" },

        ...Array.from({ length: 10 }, (_, i) => ({
            id: `blank-${i}`,
            type: "system" as const,
            label: "",
            icon: "",
            colorClass: "bg-zinc-900/20 border-zinc-800/40 opacity-20 pointer-events-none text-white"
        }))
    ]
};