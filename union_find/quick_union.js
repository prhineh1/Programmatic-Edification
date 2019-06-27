class QuickUnion {
    constructor(...args) {
        this.idArray = args;
        this.size = []
        for (let i = 0; i < args.length; ++i) {
            this.size[i] = 1;
        }
    }

    root(i) {
        while (i !== this.idArray[i]) {
            this.idArray[i] = this.idArray[this.idArray[i]];
            i = this.idArray[i]
        }
        return i;
    }

    connected(p, q) {
        return this.root(p) === this.root(q);
    }

    union(p, q) {
        const i = this.root(p);
        const j = this.root(q);
        if (this.size[i] < this.size[j]) {
            this.idArray[i] = j;
            this.size[j] += this.size[i];
        } else {
            this.idArray[j] = i;
            this.size[i] += this.size[j];
        }
    }

    find(p) {

    }
}