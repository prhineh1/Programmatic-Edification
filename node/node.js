'use strict';

const Node = (...args) => {
    if (args.length < 1) { return; }

    let col = [];
    for (let i = 0; i < args.length; ++i) {
        const props = {
            data: {
                value: args[i],
                writable: true,
                configurable: false,
                enumberable: true
            },
            next: {
                value: null,
                writable: true,
                configurable: false,
                enumberable: true
            },
            prev: {
                value: null,
                writable: true,
                configurable: false,
                enumberable: true
            }
        }
        col[i] = Object.create({}, props);
    }
    return col.length < 2 ? col[0] : col;
};
module.exports = Node;