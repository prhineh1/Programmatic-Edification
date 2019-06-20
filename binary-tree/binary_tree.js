var BinTreeNode = require('./binary_tree_node');

class BinaryTree {
    constructor(head) {
        this.head = new BinTreeNode(head);
    }
    lappend(data, node) {
        if (node) {
            node.lchild = new BinTreeNode(data);
            return this.head;
        }
    }
    rappend(data, node) {
        if (node) {
            node.rchild = new BinTreeNode(data);
            return this.head;
        }
    }
    preorderTraversal = function*(node = this.head) {
        yield node.data;
        if (node.lchild) { yield* this.preorderTraversal(node.lchild); }
        if (node.rchild) { yield* this.preorderTraversal(node.rchild); }
        return;
    }
}
var x = new BinaryTree(1);
x.lappend(2, x.head);
x.rappend(3, x.head.lchild);
x.lappend(4, x.head.lchild);
x.rappend(5, x.head);
x.preorderTraversal();
module.exports = BinaryTree;