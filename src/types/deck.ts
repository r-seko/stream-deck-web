export type ButtonType = 'scene' | 'action' | 'emergency' | 'system';

export interface DeckButtonConfig {
    id: string;
    label: string;
    icon: string;
    type: ButtonType;
    colorClass: string;
}