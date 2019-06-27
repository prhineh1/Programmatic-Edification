const UF = require('../union_find/UF');
var assert = require('chai').assert;

describe("Union Find", function() {
    const uf = new UF(0,1,2,3,4,5,6,7,8,9);

    it('creates an idArray', function() {
        assert.deepEqual(uf.idArray, [0,1,2,3,4,5,6,7,8,9]);
    });

    it('connects to elements', function() {
        uf.union(4,7);
        assert.equal(uf[4], uf[7]);
    });

    it('connected returns true', function() {
        assert.equal(uf.connected(4,7), true);
    });

    it('connected returns false', function() {
        assert.equal(uf.connected(4,8), false);
    });
})