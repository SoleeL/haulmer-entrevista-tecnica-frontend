/**
 * Arbol N-ario para manejar la ramificacion de los comentarios.
 */
export class DynamicFlatNode<Comments> {
    /**
     * Crear un nuevo Nodo/Comentario
     * @param item Contiene un comentario con todos su elementos.
     * @param level Nivel de anidado del Nodo/Comentario.
     * @param expandable Si el Nodo/Comentario cuenta con subcomentarios.
     * @param isLoading Si el Nodo/Comentario se encuentra expandiendose
     */
    constructor(
        public item: Comments,
        public level: number = 1,
        public expandable: boolean = false,
        // TODO: Buscar como implementar animacion de carga de subcomentarios.
        public isLoading: boolean = false
    ) {}
}
