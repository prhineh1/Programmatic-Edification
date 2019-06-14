const LinkedList = (...args) => {
    let props = {
        head: {
            value: null,
            writable: true,
            configurable: false,
            enumerable: true
        },
        length: {
            get() {
                let len = 1;
                let node = this.head;
                while (node.next !== null) {
                    node = node.next;
                    ++len;
                }
                return len;
            },
            writable: false,
            configurable: false,
            enumerable: true
        }
    }
    for (let i = 0; i < args.length - 1; i ++) {
        if (i < 1) {
            props.head = args[i];
        }
        args.next = args[i+1];
    }
    Object.assign({}, props);
}