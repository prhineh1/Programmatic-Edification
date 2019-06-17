const node = require('../node/node');

const linkedListPrototype = {
        // print linked list in array format
        [Symbol.toPrimitive]: function() {
            // if list is empty
            if (this.head === null) {
                return '[||]';
            }

            let n = this.head;
            // if list has one element
            if (n.next === null) {
                return `[|${n.data}|]`;
            }

            // list with > 1 elements
            let str = '[|' + n.data + ', ';
            while (n.next !== null) {
                n = n.next;
                if (n.next === null) {
                    str += n.data + '|]';
                } else {
                    str += n.data + ', ';
                }
            }
            return str;
        },
        [Symbol.iterator]: function() {
        let node = null;
        return {
            next: () => {
                if (node === null && this.head !== null) {
                    node = this.head;
                    return { value: node, done: false };
                } if (node.next !== null) {
                    node = node.next;
                    return { value: node, done: false}
                } else {
                    return { done: true };
                }
            }
        }
    }, 
    concat: function(...args) {
        args = args;
        let list = LinkedList();
        // args is empty
        if (args.length < 1) {
            return list;
        }
        
        /**
         * concatenating an empty linked list
         * returns the object the method was called on
         * thus remove all empty linked lists from args
         */
        let i = 0;
        const isLinkedList = typeof args[i] === 'object' && args[i].hasOwnProperty("linkedList");
        while (i < args.length) {
            if (isLinkedList && args[i].head === null) {
                args.splice(i, 1);
            }
            ++i;
        }

        // convert non-linked lists and non-nodes into nodes
        i = 0;
        while (i < args.length) {
            if (!isLinkedList || !args[i].hasOwnProperty("node")) {
                args[i] = node(args[i]);
            }
            ++i;
        }

        // form a new linked list from args
        i = 0;
        list.head = args[0];
        for (i; i < args.length-1; ++i) {
            /**
             * iterate through linked lists
             * link final node to next item in args
             */
            if (isLinkedList) {
                for (let n of args[i]) {
                    if (n.next === null) {
                        n.next = args[i+1];
                    }
                }
            } else {
                // otherwise link the node to the next item in args
                args[i].next = args[i+1];
            }
        }
        return list;
    }
}

/**
 * Creates a Linked List
 * @param  {...any} args 
 * @returns {object}
 */
const LinkedList = (...args) => {
    args = args;
    // linked list obj props
    let props = {
        head: {
            value: null,
            writable: true,
            enumerable: true
        },
        length: {
            get() {
                let len = 1;
                if (this.head === null) {
                    return --len;
                }
                let n = this.head;
                while (n.next !== null) {
                    n = n.next;
                    ++len;
                }
                return len;
            },
            enumerable: true
        },
        linkedList: {
            value: true,
        }
    }
    // construct linked list
    let nodeList = node(...args) || [];

    // in case node() returns a single object
    if (nodeList.length === undefined) {
        props.head.value = nodeList;
    }
    // in case node() returns Array
    for (let i = 0; i < nodeList.length-1; i ++) {
        if (i < 1) {
            props.head.value = nodeList[i];
        }
        nodeList[i].next = nodeList[i+1];
    }
    
    return Object.create(linkedListPrototype, props);
}

module.exports = LinkedList;
