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
                return `[|${n[Symbol.toPrimitive]()}|]`;
            }

            // list with > 1 elements
            let str = `[|${n[Symbol.toPrimitive]()}, `;
            while (n.next !== null) {
                n = n.next;
                if (n.next === null) {
                    str += `${n[Symbol.toPrimitive]()}|]`;
                } else {
                    str += `${n[Symbol.toPrimitive]()}, `;
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
            if (this.head !== null) {
                list.head = this.head;
            }
            return list;
        }

        /**
         * concatenating on an empty linked list
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

        // check for empty args after removing empty linked lists
        if (args.length < 1) {
            if (this.head !== null) {
                list.head = this.head;
            }
            return list;
        }

        // convert non-linked lists and non-nodes into nodes
        i = 0;
        while (i < args.length) {
            if (!isLinkedList && !args[i].hasOwnProperty("node")) {
                args[i] = node(args[i]);
            }
            ++i;
        }

        // if 'this' is non-empty we set the head here
        if (this.head !== null) {
            list.head = this.head;
        }

        i = 0;
        do {
            // set list.head if 'this' was empty
            if (i < 1 && this.head === null) {
                if (isLinkedList) {
                    list.head = args[i].head
                } else {
                    list.head = args[i];
                }
            /**
             * iterate through 'list'
             * link last node to first item in args
             */
            } else if (i < 1 && this.head !== null) {
                for (let n of list) {
                    if (n.next === null) {
                        if (isLinkedList) {
                            n.next = args[i].head;
                        } else {
                            n.next = args[i];
                        }
                        // must break so cycle isn't created
                        break;
                    }
                }
            }
            /**
             * iterate through linked lists
             * link final node to next item in args,
             * if its a node; or to the head of the
             * next item in args, if a linked list
             */
            if (i >= 1 && isLinkedList) {
                for (let n of args[i]) {
                    if (n.next === null) {
                        if (isLinkedList) {
                            n.next = args[i+1].head;
                        } else {
                            n.next = args[i+1];
                        }
                        // must break so cycle isn't created
                        break;
                    }
                }
            /**
             * link nodes to next item in args,
             * if a node; or to head of
             * next item in args if linked list
             */
            } else if (i >= 1 && !isLinkedList) {
                if (isLinkedList) {
                    args[i].next = args[i+1].head
                } else {
                    args[i].next = args[i+1];
                }
            }
            ++i;
        } while (i < args.length);

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

    // return empty list if args is empty
    if (args.length < 1) {
        return Object.create(linkedListPrototype, props);
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
LinkedList(1,2).concat(LinkedList(3,4));
module.exports = LinkedList;