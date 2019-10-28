const Graph = require('../../data_structure/adjacency_list');

const bfs = (graph, vertex) => {
    console.log(`Begin graph traversal at ${vertex.data}`)
    vertex.explored = true;
    let queue = [vertex];
    while (queue.length) {
        for (edge of queue.pop().edges) {
            if (!graph[edge].explored) {
                graph[edge].explored = true;
                queue.unshift(graph[edge]);
                console.log(`Visited ${graph[edge].data}`);
            }
        }
    }
    console.log('graph traversal complete');
}
const gaff = Graph.UndirectedGraph([0,1,2,3,4,5], [[1,2], [0,3], [0,3,5], [1,2,4,5], [3,5], [2,3,4]]);
bfs(gaff, gaff['0']);