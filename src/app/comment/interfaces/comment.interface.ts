export interface Story {
    by: string;
    descendants?: number;
    id: number;
    kids?: number[];
    score: number;
    text?: string;
    time: number;
    title: string;
    type: string;
    url?: string;
}

export interface Comments {
    by: String;
    id: number;
    parent: number;
    text: String;
    time: number;
    deleted?: boolean;
    dead?: boolean;
    kids?: number[];
    children?: Comments[];
    type: string;
}
