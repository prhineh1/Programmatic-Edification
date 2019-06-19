class BinaryTree {
    constructor(head) {
        this.head = new BinTreeNode(head);
    }
    lappend(data) {
        if (this.head) {
            this.head.lchild = new BinTreeNode(data);
            return this.head;
        }
    }
    rappend(data) {
        if (this.head) {
            this.head.rchild = new BinTreeNode(data);
            return this.head;
        }
    }
    preorderTraversal(node = this.head){
        if (!node.left && !node.right) {
            
        }
    }
}