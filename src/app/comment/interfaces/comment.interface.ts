// TODO: unificar en share todas las interfaces.

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

/**
 * @field kids: ids de los comentarios principales de la historia
 * @field children: propiedad para guardar de manera n-aria ramificaciones de
 * comentarios.
 */
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
