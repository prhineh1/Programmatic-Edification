var BinTreeNode = require('./binary_tree_node');

class BinaryTree {
    constructor(head) {
        if (head) {
            this.head = new BinTreeNode(head);
        } else {
            this.head = null;
        }
    }

    get height() {
        return this.treeHeight(this.head)
    }

    treeHeight(node = this.head) {
        if (!this.head) {
            return 0;
        }

        const left = node.lchild ? this.treeHeight(node.lchild): 0;
        const right = node.rchild ? this.treeHeight(node.rchild): 0;
        return 1 + Math.max(left,right);
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

    preorderTraversal(node = this.head) {
        let list = [];
        list = list.concat(node.data);
        const left = node.lchild ? this.preorderTraversal(node.lchild) : [];
        const right = node.rchild ? this.preorderTraversal(node.rchild): [];
        return list.concat(left, right);
    }

    inorderTraversal(node = this.head) {
        let list = [];
        const left = node.lchild ? this.inorderTraversal(node.lchild) : [];
        list = list.concat(node.data);
        const right = node.rchild ? this.inorderTraversal(node.rchild) : [];
        return left.concat(list, right);
    }

    *postorderTraversal(node = this.head) {
        if (node.lchild) { yield* this.postorderTraversal(node.lchild); }
        if (node.rchild) { yield* this.postorderTraversal(node.rchild); }
        yield node.data;
        return;
    }

    *levelorderTraversal(queue = [this.head]) {
        if (queue[queue.length-1]) {
            const popped = queue.pop();
            yield popped.data;
            queue.unshift(popped.rchild, popped.lchild);
            yield* this.levelorderTraversal(queue);
        }
        if (queue.length) {
            queue.pop();
            yield* this.levelorderTraversal(queue);
        }
        return;
    }
}

module.exports = BinaryTree;