var binaryTree = require('./binary_tree');
var BinTreeNode = require('./binary_tree_node');

class BinarySearchTree extends binaryTree {
    constructor(data) {
        super(data);
    }

    insert(data, node = this.head) {
        if (!this.head) {
            this.head = new BinTreeNode(data);
            return this;
        }

        const less = data < node.data;
        if (node.data === data) {
            return this;
        }
        if (node.lchild && less) {
            this.insert(data, node.lchild);
        }
        if (node.rchild && !less) {
            this.insert(data, node.rchild);
        }
        if (!node.lchild && less) {
            this.lappend(data, node);
            return this;
        }
        if (!node.rchild && !less) {
            this.rappend(data, node);
            return this;
        }
        return this;
    }

    find(data, node = this.head) {
        let found;

        if (data < node.data) {
            found = node.lchild ? this.find(data, node.lchild) : null;
        } else if (data > node.data) {
            found = node.rchild ? this.find(data, node.rchild): null;
        } else {
            return node;
        }

        return found;
    }

    minimum(node = this.head) {
        return node.lchild ? this.minimum(node.lchild) : node;
    }

    maximum(node = this.head) {
        return node.rchild ? this.maximum(node.rchild) : node;
    }

    delete(data, node = this.head, parent = null) {

        if (!node) {
            return this;
        }

        if (data === node.data) {

            // two children
            const nodeIsRightChild = node.data > parent.data;
            if (node.rchild && node.lchild) {

                let inOrderSuc = node.rchild;
                let parentSuc;
                while (inOrderSuc.lchild) {
                    parentSuc = inOrderSuc;
                    inOrderSuc = inOrderSuc.lchild;
                }

                node = inOrderSuc;
                if (inOrderSuc.rchild) {
                    parentSuc.lchild = inOrderSuc.rchild;
                }
                inOrderSuc = null;
            }

            // single left child
            if (node.lchild && parent) {
                nodeIsRightChild
                    ? parent.rchild = node.lchild
                    : parent.lchild = node.lchild;
                node = null;
            }

            // single right child
            if (node.rchild && parent) {
                nodeIsRightChild
                    ? parent.rchild = node.rchild
                    : parent.lchild = node.rchild;
                node = null;
            } else {
                node = null;
            }
        }

        if (data < node.data) {
            node.lchild && this.delete(data, node.lchild, node) ;
        } else if (data > node.data) {
            node.rchild && this.delete(data, node.rchild, node);
        }
        return this;
    }
}

module.exports = BinarySearchTree;