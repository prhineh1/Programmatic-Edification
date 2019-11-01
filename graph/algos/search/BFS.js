const Graph = require('../../data_structure/adjacency_list');

const bfs = (graph, vertex) => {
    for (let vert of graph) {
        if (vert.data === vertex.data) {
            vert.distance = 0;
        } else {
            vert.distance = Infinity;
        }
    }
    console.log(`Begin graph traversal at ${vertex.data}`)
    vertex.explored = true;
    let queue = [vertex];
    while (queue.length) {
        let discovered = queue.pop();
        for (edge of discovered.edges) {
            if (!graph[edge].explored) {
                graph[edge].explored = true;
                graph[edge].distance = discovered.distance + 1;
                queue.unshift(graph[edge]);
                console.log(`distance from initial node: ${graph[edge].distance}`);
            }
        }
    }
    console.log('graph traversal complete');
}
const gaff = Graph.UndirectedGraph([0,1,2,3,4,5], [[1,2], [0,3], [0,3,5], [1,2,4,5], [3,5], [2,3,4]]);
bfs(gaff, gaff[0]);