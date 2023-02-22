/**
 * @field descendants: cantidad de comentarios totales
 * @field kids: ids de los comentarios principales de la historia
 */
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
