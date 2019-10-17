'use strict';

// vertices = n edges = m

const UndirectedGraph = (...args) => {
    const vertices = args.map(arg => {
        if (/n/.test(arg)) {
            return {
                data: arg,
                edges: []
            };
        }
    });
    const edges = args.map(arg => {
        if (/m/.test(arg)) {
            return arg.split('m');
        }
    });
}