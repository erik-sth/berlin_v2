export class GraphNode<T> {
    value: T;
    edges: Set<GraphNode<T>> = new Set();

    constructor(value: T) {
        this.value = value;
    }

    addEdge(node: GraphNode<T>): void {
        this.edges.add(node);
    }

    removeEdge(node: GraphNode<T>): void {
        this.edges.delete(node);
    }
}
export class DirectedGraph<T> {
    nodes: Set<GraphNode<T>> = new Set();
    lengthEdges: number = 0;

    addNode(value: T): GraphNode<T> {
        const newNode = new GraphNode(value);
        this.nodes.add(newNode);
        return newNode;
    }

    addEdge(from: GraphNode<T>, to: GraphNode<T>): void {
        if (!from.edges.has(to)) {
            from.addEdge(to);
            this.lengthEdges++;
        }
    }

    removeNode(node: GraphNode<T>): void {
        this.nodes.delete(node);
        this.nodes.forEach((n) => n.removeEdge(node));
    }

    includes(item: T): boolean {
        return [...this.nodes].some((node) => node.value === item);
    }

    getNode(value: T): GraphNode<T> | undefined {
        return [...this.nodes].find((node) => node.value === value);
    }

    removeEdge(from: GraphNode<T>, to: GraphNode<T>): void {
        if (from.edges.has(to)) {
            from.removeEdge(to);
            this.lengthEdges--;
        }
    }

    sizeEdges(): number {
        return this.lengthEdges;
    }

    sizeNodes(): number {
        return this.nodes.size;
    }

    getNodesWithInDegreeZero(): GraphNode<T>[] {
        // Create a map to keep track of incoming edge counts for each node.
        const inDegreeMap = new Map<GraphNode<T>, number>();

        // Initialize the map with all nodes and set their counts to 0.
        [...this.nodes].forEach((node) => {
            inDegreeMap.set(node, 0);
        });

        // Calculate incoming edge counts for each node.
        [...this.nodes].forEach((node) => {
            node.edges.forEach((edgeNode) => {
                inDegreeMap.set(edgeNode, (inDegreeMap.get(edgeNode) || 0) + 1);
            });
        });

        // Filter nodes with no incoming edges.
        const inDegreeOfZero = [...this.nodes].filter((node) => {
            return inDegreeMap.get(node) === 0;
        });

        return inDegreeOfZero;
    }
}
