import { useState } from "react";
import { INITIAL_DECK_DATA } from "../data/deckData";
import SeButton from "./functions/SeButton";
import EffectButton from "./functions/EffectButton";
import EmergencyButton from "./functions/EmergencyButton";
import SystemButton from "./functions/SystemButton";
import SceneButton from "./functions/SceneButton";
import MuteButton from "./functions/MuteButton";


export default function StreamController() {
    const [activeSceneId, setActiveSceneId] = useState<string>("1");
    const [muteStates, setMuteStates] = useState({ bgm: false, mic: false });

    const handleToggleMute = (id: string) => {
        if (id === "9") {
            setMuteStates(prev => ({ ...prev, bgm: !prev.bgm }));
        } else if (id === "10") {
            setMuteStates(prev => ({ ...prev, mic: !prev.mic }));
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
        </div>
    );
}