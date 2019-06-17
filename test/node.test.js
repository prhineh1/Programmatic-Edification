var assert = require('chai').assert;
var func = require('../node/node');

describe('node', function() {
    it('returns an empty node', function() {
        const empty = func();
        assert.equal(empty.data, null);
    });

    it('returns one node', function() {
        const one = func([1]);
        assert.deepEqual(one.data, [1]);
    });

    it('returns multiple nodes', function() {
        const [node1, node2] = func(1,2);
        assert.equal(node1.data, 1);
        assert.equal(node2.data, 2);
        assert.propertyVal(node1, 'data', 1);
    });

    it('next and prev are set to null', function() {
        const node = func(1);
        assert.equal(node.next, null);
        assert.equal(node.prev, null);
    });

    it('toPrimitive formats correctly', function() {
        const node = func(1);
        const isArray = func([1,2,3]);
        isArray.next = isArray.prev = {};
        const nodeFormat = '{ data: 1, next: null, prev: null }';
        const isArrayFormat = '{ data: [object Array], next: Node, prev: Node }';
        assert.equal(node, nodeFormat, 'next = prev = null');
        assert.equal(isArray, isArrayFormat, 'data = array, next = prev = Node');
    });
});