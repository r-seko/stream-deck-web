import type { DeckButtonConfig } from "../types/deck";

export const INITIAL_DECK_DATA: DeckButtonConfig[] = [
    { id: "1", label: "Intro", icon: "🎬", type: "scene", colorClass: "bg-blue-600 border-blue-400" },
    { id: "2", label: "Main", icon: "💬", type: "scene", colorClass: "bg-blue-600 border-blue-400" },
    { id: "3", label: "Game", icon: "🎮", type: "scene", colorClass: "bg-blue-600 border-blue-400" },
    { id: "4", label: "Outro", icon: "👋", type: "scene", colorClass: "bg-blue-600 border-blue-400" },
    { id: "5", label: "CLEAR", icon: "🚨", type: "emergency", colorClass: "bg-red-600 border-red-400" },

    { id: "6", label: "Welcome", icon: "✨", type: "action", colorClass: "bg-purple-600 border-purple-400" },
    { id: "7", label: "Sub", icon: "🔔", type: "action", colorClass: "bg-purple-600 border-purple-400" },
    { id: "8", label: "Focus", icon: "⚡", type: "action", colorClass: "bg-purple-600 border-purple-400" },
    { id: "9", label: "BGM Mute", icon: "🔇", type: "mute", colorClass: "bg-amber-600 border-amber-400" },
    { id: "10", label: "MIC Mute", icon: "🎙️", type: "mute", colorClass: "bg-amber-600 border-amber-400" },

    { id: "11", label: "Clap", icon: "👏", type: "action", colorClass: "bg-emerald-600 border-emerald-400" },
    { id: "12", label: "Fanfare", icon: "🎉", type: "action", colorClass: "bg-emerald-600 border-emerald-400" },
    { id: "13", label: "Goon", icon: "💥", type: "action", colorClass: "bg-emerald-600 border-emerald-400" },
    { id: "14", label: "Prev", icon: "◀", type: "system", colorClass: "bg-zinc-700 border-zinc-500" },
    { id: "15", label: "Next", icon: "▶", type: "system", colorClass: "bg-zinc-700 border-zinc-500" }
];