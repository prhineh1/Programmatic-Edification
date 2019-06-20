var assert = require('chai').assert;
var func = require('../binary-tree/binary_tree');

describe('binary tree', function() {
    it('creates a tree with a head', function() {
        assert.deepEqual(new func(1).head, { data: 1, lchild: null, rchild: null });
    });

    it('creates a tree with a null head', function() {
        assert.deepEqual(new func().head, { data: null, lchild: null, rchild: null });
    });

    it('appends an lchild to the tree', function() {
        const tree = new func(1);
        assert.deepEqual(tree.lappend(2, tree.head).lchild, { data: 2, lchild: null, rchild: null });
    });

    it('appends an rchild to the tree', function() {
        const tree = new func(1);
        assert.deepEqual(tree.rappend(2, tree.head).rchild, { data: 2, lchild: null, rchild: null });
    });

    it('preorder traversal', function() {
        const tree = new func(1);
        tree.lappend(2, tree.head);
        tree.rappend(3, tree.head);
        assert.deepEqual(tree, { data: 2, lchild: null, rchild: null });
    });
})