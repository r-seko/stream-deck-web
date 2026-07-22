import { useState } from "react";
import { INITIAL_DECK_DATA } from "../data/deckData";
import DeckButton from "./DeckButton";
import SceneContent from "./functions/SceneContent";
import MuteContent from "./functions/MuteContent";
import SeButton from "./functions/SeButton";
import EmergencyContent from "./functions/EmergencyContent";
import SystemContent from "./functions/SystemContent";
import type { DeckButtonConfig } from "../types/deck";
import EffectButton from "./functions/EffectButton";

export default function StreamController() {
    const [activeSceneId, setActiveSceneId] = useState<string>("1");
    const [muteStates, setMuteStates] = useState({ bgm: false, mic: false });

    const handleButtonClick = (button: DeckButtonConfig) => {
        if (button.type === "scene") {
            setActiveSceneId(button.id);
        } else if (button.id === "9") {
            setMuteStates(prev => ({ ...prev, bgm: !prev.bgm }));
        } else if (button.id === "10") {
            setMuteStates(prev => ({ ...prev, mic: !prev.mic }));
        } else if (button.type === "action") {
            console.log(`Trigger SE: ${button.label}`);
        } else if (button.type === "emergency") {
            console.log("Emergency Clear");
        } else if (button.type === "system") {
            console.log(`System: ${button.label}`);
        }
    };

    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-zinc-950 p-6 text-white select-none">
            <div className="w-full max-w-4xl bg-zinc-900 border border-zinc-800 p-6 rounded-2xl shadow-2xl">

                <div className="flex justify-between items-center mb-6 px-2">
                    <h1 className="text-xl font-bold tracking-wider text-zinc-400 uppercase">Stream Deck Web</h1>
                    <div className="px-3 py-1 bg-blue-500/10 border border-blue-500/30 text-blue-400 rounded-full text-sm font-semibold">
                        Profile: Default (Page 1/1)
                    </div>
                </div>

                <div className="grid grid-cols-5 gap-4">
                    {INITIAL_DECK_DATA.map((button) => {

                        if (button.type === "scene") {
                            const isActive = activeSceneId === button.id;
                            return (
                                <DeckButton
                                    key={button.id}
                                    onClick={() => handleButtonClick(button)}
                                    disabled={isActive}
                                    isActive={isActive}
                                    className={isActive ? "bg-blue-600 border-blue-300 translate-y-1 scale-95 shadow-[inset_0_4px_12px_rgba(0,0,0,0.6)] ring-4 ring-blue-500/50 brightness-125" : button.colorClass}
                                >
                                    <SceneContent label={button.label} icon={button.icon} isActive={isActive} />
                                </DeckButton>
                            );
                        }

                        if (button.type === "mute") {
                            const isMuted = button.id === "9" ? muteStates.bgm : muteStates.mic;
                            return (
                                <DeckButton
                                    key={button.id}
                                    onClick={() => handleButtonClick(button)}
                                    isActive={isMuted}
                                    className={isMuted ? "bg-red-600 border-red-400 translate-y-1 scale-95 shadow-[inset_0_4px_12px_rgba(0,0,0,0.6)] ring-4 ring-red-500/50 brightness-125 animate-pulse" : "bg-amber-600 border-amber-400"}
                                >
                                    <MuteContent label={button.label} icon={button.icon} isMuted={isMuted} />
                                </DeckButton>
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
                                <DeckButton
                                    key={button.id}
                                    onClick={() => handleButtonClick(button)}
                                    isActive={false}
                                    className={button.colorClass}
                                >
                                    <EmergencyContent label={button.label} icon={button.icon} />
                                </DeckButton>
                            );
                        }

                        if (button.type === "system") {
                            return (
                                <DeckButton
                                    key={button.id}
                                    onClick={() => handleButtonClick(button)}
                                    isActive={false}
                                    className={button.colorClass}
                                >
                                    <SystemContent label={button.label} icon={button.icon} />
                                </DeckButton>
                            );
                        }

                        return null;
                    })}
                </div>
            </div>
        </div>
    );
}