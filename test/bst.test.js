var assert = require('chai').assert;
var func = require('../binary-tree/bst');

describe('binary search tree', function() {
    it("inserts a node in a null tree", function() {
        let tree = new func();
        assert.equal(tree.insert(1).head.data, 1);
    });

    it("should construct a valid BST", function() {
        let tree = new func(50);
        tree.insert(75).insert(25).insert(17).insert(28);
        assert.deepEqual(tree.inorderTraversal(), [17,25,28,50,75]);
    });

    it("should not insert duplicates", function() {
        let tree = new func(50);
        tree.insert(75).insert(25).insert(17).insert(28).insert(28);
        assert.deepEqual(tree.inorderTraversal(), [17,25,28,50,75]);
    });

    it("should find a BST node", function() {
        let tree = new func(50);
        tree.insert(75).insert(25).insert(17).insert(28);
        assert.equal(tree.find(25).data, 25);
    });

    it("should not find a BST node", function() {
        let tree = new func(50);
        tree.insert(75).insert(25).insert(17).insert(28);
        assert.equal(tree.find(66), null);
    });

    it("should return the minimum node", function() {
        let tree = new func(50);
        tree.insert(75).insert(25).insert(17).insert(28);
        assert.equal(tree.minimum().data, 17);
    });

    it("should return the maximum node", function() {
        let tree = new func(50);
        tree.insert(75).insert(25).insert(17).insert(28);
        assert.equal(tree.maximum().data, 75);
    });
})