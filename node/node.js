'use strict';

/**
 * Creats a Node object
 * @param  {...any} args
 * @returns {object, array, undefined}
 */

const Node = (...args) => {
    args = args; // converts to an array

    const props = {
        data: {
            value: null,
            writable: true,
            enumberable: true
        },
        next: {
            value: null,
            writable: true,
            enumberable: true
        },
        prev: {
            value: null,
            writable: true,
            enumberable: true
        },
        ['node']: {
            value: true
        },
        [Symbol.toPrimitive]: {
            value: function() {
                const isArray = Array.isArray(this.data) ? '[object Array]' : this.data;
                const isNode = (data) => data !== null ? 'Node' : data;
                return `{ data: ${isArray}, next: ${isNode(this.next)}, prev: ${isNode(this.prev)} }`;
            }
        }
    }
    // args is empty
    if (args.length < 1) {
        return Object.create({}, props);
    }

    let col = [];
    for (let i = 0; i < args.length; ++i) {
        col[i] = Object.create({}, props);
        col[i].data = args[i];
    }
    return col.length < 2 ? col[0] : col;
};
module.exports = Node;