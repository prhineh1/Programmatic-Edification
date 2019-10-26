// vertices = n edges = m

const UndirectedGraph = (vert, edg) => {
    let Graph;
    for (let v of vert) {
        Graph[v] = {
            edges: edg[v],
            explored: false
        }
    }
    return Graph;
}

const DirectedGraph = (vert, inc, out) => {
    let Graph;
    for (let v of vert) {
        Graph[v] = {
            inc: inc[v],
            out: out[v]
        }
    }
    return Graph;
}

module.exports = {UndirectedGraph, DirectedGraph};