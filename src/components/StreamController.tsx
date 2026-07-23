import { useState } from "react";
import { INITIAL_DECK_DATA } from "../data/deckData";
import SeButton from "./functions/SeButton";
import EffectButton from "./functions/EffectButton";
import EmergencyButton from "./functions/EmergencyButton";
import SystemButton from "./functions/SystemButton";
import SceneButton from "./functions/SceneButton";
import MuteButton from "./functions/MuteButton";

export default function StreamController() {
    const [currentPage, setCurrentPage] = useState<number>(1);
    const [activeSceneId, setActiveSceneId] = useState<string>("1");
    const [muteStates, setMuteStates] = useState({ bgm: false, mic: false });

    const totalPages = Object.keys(INITIAL_DECK_DATA).length;

    const currentSceneName = Object.values(INITIAL_DECK_DATA)
        .flat()
        .find(b => b.type === "scene" && b.id === activeSceneId)?.label || "Unknown";

    const handleToggleMute = (id: string) => {
        if (id === "9") {
            setMuteStates(prev => ({ ...prev, bgm: !prev.bgm }));
        } else if (id === "10") {
            setMuteStates(prev => ({ ...prev, mic: !prev.mic }));
        }
    };

    const handlePrevPage = () => {
        setCurrentPage(prev => (prev > 1 ? prev - 1 : totalPages));
    };

    const handleNextPage = () => {
        setCurrentPage(prev => (prev < totalPages ? prev + 1 : 1));
    };

    const currentButtons = INITIAL_DECK_DATA[currentPage] || [];

    return (
        <div className="flex flex-col items-center min-h-screen bg-zinc-950 py-12 px-6 text-white select-none">
            <div className="w-full max-w-4xl bg-zinc-900 border border-zinc-800 p-6 rounded-2xl shadow-2xl">

                <div className="flex justify-between items-center mb-6 px-2">
                    <div className="flex items-center gap-3">
                        <h1 className="text-xl font-bold tracking-wider text-zinc-400 uppercase">Stream Deck</h1>
                        <span className="px-2 py-0.5 bg-zinc-800 border border-zinc-700 text-zinc-300 rounded text-xs font-mono">
                            Active: {currentSceneName}
                        </span>
                    </div>
                    <div className="flex items-center gap-2 bg-zinc-950 p-1 border border-zinc-800 rounded-full">
                        <button
                            onClick={handlePrevPage}
                            className="w-8 h-8 flex items-center justify-center rounded-full hover:bg-zinc-800 text-zinc-400 hover:text-white transition-colors text-sm font-bold"
                        >
                            ◀
                        </button>
                        <div className="px-3 py-0.5 bg-blue-500/10 border border-blue-500/20 text-blue-400 rounded-full text-xs font-semibold tracking-wide min-w-[110px] text-center">
                            Page {currentPage} / {totalPages}
                        </div>
                        <button
                            onClick={handleNextPage}
                            className="w-8 h-8 flex items-center justify-center rounded-full hover:bg-zinc-800 text-zinc-400 hover:text-white transition-colors text-sm font-bold"
                        >
                            ▶
                        </button>
                    </div>
                </div>

                <div className="grid grid-cols-5 gap-4">
                    {currentButtons.map((button) => {

                        if (button.type === "scene") {
                            return (
                                <SceneButton
                                    key={button.id}
                                    id={button.id}
                                    label={button.label}
                                    icon={button.icon}
                                    colorClass={button.colorClass}
                                    activeSceneId={activeSceneId}
                                    onSceneChange={setActiveSceneId}
                                />
                            );
                        }

                        if (button.type === "mute") {
                            const isMuted = button.id === "9" ? muteStates.bgm : muteStates.mic;
                            return (
                                <MuteButton
                                    key={button.id}
                                    id={button.id}
                                    label={button.label}
                                    icon={button.icon}
                                    isMuted={isMuted}
                                    onToggleMute={handleToggleMute}
                                />
                            );
                        }

                        if (button.type === "action") {
                            const soundLabels = ["Clap", "Fanfare", "Goon"];

                            if (soundLabels.includes(button.label)) {
                                return (
                                    <SeButton
                                        key={button.id}
                                        label={button.label}
                                        icon={button.icon}
                                        colorClass={button.colorClass}
                                    />
                                );
                            }

                            return (
                                <EffectButton
                                    key={button.id}
                                    label={button.label}
                                    icon={button.icon}
                                    colorClass={button.colorClass}
                                />
                            );
                        }

                        if (button.type === "emergency") {
                            return (
                                <EmergencyButton
                                    key={button.id}
                                    label={button.label}
                                    icon={button.icon}
                                    colorClass={button.colorClass}
                                />
                            );
                        }

                        if (button.type === "system") {
                            return (
                                <SystemButton
                                    key={button.id}
                                    label={button.label}
                                    icon={button.icon}
                                    colorClass={button.colorClass}
                                />
                            );
                        }

                        return null;
                    })}
                </div>
            </div>
        </div >
    );
}