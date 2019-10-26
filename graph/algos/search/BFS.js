const bfs = (graph, vertex) => {
    console.log(`Begin graph traversal at ${graph[vertex]}`)
    vertex.explored = true;
    let queue = [vertex];
    while (queue.length) {
        for (edge of queue.pop().edges) {
            if (!graph[edge].explored) {
                graph[edge].explored = true;
                queue.unshift(graph[edge]);
                console.log(`Visited ${graph[edge]}`);
            }
        }
    }
    console.log('graph traversal complete');
}