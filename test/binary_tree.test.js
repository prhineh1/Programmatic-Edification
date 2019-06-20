var assert = require('chai').assert;
var func = require('../binary-tree/binary_tree');

describe('binary tree', function() {
    it('creates a tree with a head', function() {
        assert.deepEqual(new func(1).head, { data: 1, lchild: null, rchild: null });
    });

    it('creates a tree with a null head', function() {
        assert.equal(new func().head, null);
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
        tree.lappend(3, tree.head.lchild);
        tree.rappend(4, tree.head.lchild);
        tree.rappend(5, tree.head);
        const gen = tree.preorderTraversal();
        assert.deepEqual(gen, [1,2,3,4,5]);
    });

    it('inorder traversal', function() {
        const tree = new func(4);
        tree.lappend(2, tree.head);
        tree.lappend(1, tree.head.lchild);
        tree.rappend(3, tree.head.lchild);
        tree.rappend(5, tree.head);
        const gen = tree.inorderTraversal();
        assert.deepEqual(gen, [1,2,3,4,5]);
    });

    it('postorder traversal', function() {
        const tree = new func(5);
        tree.lappend(3, tree.head);
        tree.lappend(1, tree.head.lchild);
        tree.rappend(2, tree.head.lchild);
        tree.rappend(4, tree.head);
        const gen = tree.postorderTraversal();
        for (let i = 1; i < 6; ++i) {
            assert.equal(gen.next().value, i);
        }
    });

    it('levelorder traversal', function() {
        const tree = new func(1);
        tree.lappend(2, tree.head);
        tree.lappend(4, tree.head.lchild);
        tree.rappend(5, tree.head.lchild);
        tree.rappend(3, tree.head);
        const gen = tree.levelorderTraversal();
        for (let i = 1; i < 6; ++i) {
            assert.equal(gen.next().value, i);
        }
    });

    it('has a height of 0', function() {
        const tree = new func();
        assert.equal(tree.height, 0);
    });

    it('has a height of 1', function() {
        const tree = new func(1);
        assert.equal(tree.height, 1);
    });

    it('has a height of 3', function() {
        const tree = new func(1);
        tree.lappend(2, tree.head);
        tree.lappend(4, tree.head.lchild);
        tree.rappend(5, tree.head.lchild);
        tree.rappend(3, tree.head);
        tree.rappend(6, tree.head.lchild.lchild);
        assert.equal(tree.height, 4);
    });
})