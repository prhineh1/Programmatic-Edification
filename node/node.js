'use strict';

const Node = (...args) => {
    let col = [];
    for (let i=0; i<args.length; ++i) {
        col[i] = {
            data: args[i],
            next: null,
            prev: null
        }
    }
    return col;
};
console.log(...Node(1,2,3));
module.exports = Node;