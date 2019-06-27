class UF {
    // quick find
    constructor(...args) {
        this.idArray = args;
    }

    union(p, q) {
        for (let i = 0; i < this.idArray.length; ++i) {
            if (this.idArray[i] === p) {
                this.idArray[i] = q;
            }
        }
    }

    connected(p, q) {
        return this.idArray[p] === this.idArray[q];
    }

    find(p) {

    }

    get count() {

    }
}

module.exports = UF;