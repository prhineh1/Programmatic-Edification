const Graph = require('../../data_structure/adjacency_list');

const iterative_dfs = (graph, vertex) => {
    let stack = [vertex];
    while (stack.length) {
        const visited = stack.pop();
        if (!visited.explored) {
            visited.explored = true;
            console.log(visited.data + " explored");
            for (let edge of visited.edges) {
                stack.push(graph[edge]);
            }
        }
    }
}

const recursive_dfs = (graph, vertex) => {
    vertex.explored = true;
    console.log(vertex.data + " explored");
    for (let edge of vertex.edges) {
        if (!graph[edge].explored) {
            recursive_dfs(graph, graph[edge]);
        }
    }
}

const gaff = Graph.UndirectedGraph([0,1,2,3,4,5], [[1,2], [0,3], [0,3,5], [1,2,4,5], [3,5], [2,3,4]]);
// iterative_dfs(gaff, gaff[0]);
recursive_dfs(gaff, gaff[0]);
