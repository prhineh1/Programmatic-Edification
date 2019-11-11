const Graph = require('../../data_structure/adjacency_list');

const ucc = (graph) => {
    let connectedComponents = 0;
    let connectedGroup = [];
    const setConnectedGroup = (vert, group) => {
        if (!connectedGroup[group]) {
            connectedGroup[group] = [];
        }
        connectedGroup[group].push(vert);
    }
    for (let vert of graph) {
        if (!vert.explored) {
            vert.explored = true;
            ++connectedComponents;
            let queue = [vert];
            while (queue.length) {
                const visited = queue.pop();
                setConnectedGroup(visited, connectedComponents);
                for (let edge of visited.edges) {
                    if (!graph[edge].explored) {
                        graph[edge].explored = true;
                        queue.unshift(graph[edge]);
                    }
                }
            }
        }
    }
    for (let group of connectedGroup) {
        group && console.log(group);
    }
}

const graph = Graph.UndirectedGraph([0,1,2,3,4,5,6,7,8,9], [[2,4], [3], [0,4], [1], [0,2,6,8], [7,9], [4], [5], [4], [5]]);
ucc(graph);