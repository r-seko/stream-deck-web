export type ButtonType = "scene" | "action" | "mute" | "system" | "emergency";

export interface DeckButtonConfig {
    id: string;
    label: string;
    icon: string;
    type: ButtonType;
    colorClass: string;
}