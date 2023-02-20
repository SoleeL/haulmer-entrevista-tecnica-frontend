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

interface Comment {
    postId: String;
    id: String;
    name: String;
    email: Date;
    body: String;
}
