const node = require('../node/node');

const linkedListPrototype = {

        // print linked list in array format
        [Symbol.toPrimitive]: function() {

            // if list is empty
            if (!this.head) {
                return '[||]';
            }

            let n = this.head;

            // if list has one element
            if (!n.next) {
                return `[|${n[Symbol.toPrimitive]()}|]`;
            }

            // list with > 1 elements
            let str = `[|${n[Symbol.toPrimitive]()}, `;

            while (n.next) {
                n = n.next;
                if (!n.next) {
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
                if (!node && this.head) {
                    node = this.head;
                    return { value: node, done: false };
                } if (node.next) {
                    node = node.next;
                    return { value: node, done: false}
                } else {
                    return { done: true };
                }
            }
        }
    },
    /**
     *
     * @param  {...any} args
     * @returns {LinkedList}
     */
    concat: function(...args) {
        let list = LinkedList();

        // args is empty
        if (args.length < 1) {
            if (this.head) {
                list.head = this.head;
            }
            return list;
        }

        /**
         * concatenating on an empty linked list
         * returns the object the method was called on
         * thus remove all empty linked lists from args
         */
        const isLinkedList = (arg) => typeof arg === 'object' && arg.hasOwnProperty("linkedList");
        args = args.filter(arg => !isLinkedList(arg) || arg.length > 0)

        // check for empty args after removing empty linked lists
        if (args.length < 1) {
            if (this.head) {
                list.head = this.head;
            }
            return list;
        }

        // convert non-linked lists into linked lists
        for (let i=0; i < args.length; i++) {
            if (!isLinkedList(args[i])) {
                args[i] = LinkedList(args[i]);
            }
        }

        // if 'this' is non-empty we set the head here
        if (this.head) {
            list.head = this.head;
        }

        for (let i=0; i < args.length; ++i) {
            // set list.head if 'this' was empty
            if (!list.head) {
                list.head = args[i].head;
            } else {
                /**
                 * iterate through 'list'
                 * link last node to next item in args
                 */
                for (let n of list) {
                    if (!n.next) {
                        n.next = args[i].head;
                        // must break so cycle isn't created
                        break;
                    }
                }
            }
        }

        return list;
    },
    reverse: function(n = this.head) {
        let list = LinkedList();

        if (!n) { return list; }

        if (n.next) {
            list = this.reverse(n.next);
            n.next = null;
        }
        return list.concat(n);
    },
    reverse2: function(n = this.head) {
        if (!n) {return this};

        let p = null;
        let q;
        while (n.next) {
            q = n.next;
            n.next = p;
            p = n;
            n = q;
        }
        n.next = p;
        this.head = n;
        return this;
    },
    findCycle: function(slowRef = this.head, fastRef = this.head) {
        let cycle;
        if (!this.head) {
            return null;
        }
        if (fastRef && fastRef.next) {
            slowRef = slowRef.next;
            fastRef = fastRef.next.next;
            if (fastRef === slowRef) {
                return slowRef;
            }
            cycle = this.findCycle(slowRef, fastRef);
        } else {
            return null;
        }
        return cycle;
    },
    removeCycle: function() {
        const cycle = this.findCycle();
        if (true) {
            let p = q = cycle;
            // find the length of cycle
            let cycleLength = 1;
            while (q.next !== p) {
                ++cycleLength;
                q = q.next;
            }

            // find the length of remaning list
            q = cycle;
            p = this.head;
            let restLength = 0;
            while (q !== p) {
                ++restLength;
                q = q.next;
                p = p.next;
            }
            // remove the cycle
            p = this.head;
            for (let i = 1; i < cycleLength + restLength; ++i) {
                p = p.next;
            }
            p.next = null;
        }
        return this;
    }
}

/**
 * Creates a Linked List
 * @constructor  {...any} args
 * @returns {object}
 */
const LinkedList = (...args) => {
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
                if (!this.head) {
                    return --len;
                }
                let n = this.head;
                while (n.next) {
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
    let nodeList = args.map(arg => {
        if (typeof arg !== 'object' || !arg.hasOwnProperty("node")) {
            return node(arg);
        } else {
            return arg;
        }
    })

    // in case node() returns Array
    for (let i = 0; i < nodeList.length; i ++) {
        if (i < 1) {
            props.head.value = nodeList[i];
        }
        if (i < nodeList.length-1) {
            nodeList[i].next = nodeList[i+1];
        }
    }

    return Object.create(linkedListPrototype, props);
}

module.exports = LinkedList;