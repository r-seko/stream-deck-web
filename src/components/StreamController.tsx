import { useState } from "react";
import { INITIAL_DECK_DATA } from "../data/deckData";
import type { DeckButtonConfig } from "../types/deck";
import DeckButton from "./DeckButton";

export default function StreamController() {
    const [activeSceneId, setActiveSceneId] = useState<string>("1");

    const handleButtonClick = (button: DeckButtonConfig) => {
        if (button.type === "scene") {
            setActiveSceneId(button.id);
        } else {
            console.log(`Clicked: ${button.label}`);
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
                        const isActive = button.type === "scene" && activeSceneId === button.id;

                        return (
                            <DeckButton
                                key={button.id}
                                button={button}
                                isActive={isActive}
                                onClick={() => handleButtonClick(button)} />
                        );
                    })}
                </div>
            </div>
        </div>
    )
}