var assert = require('chai').assert;
var func = require('../linked-list/linked_list');

describe('Linked List', function() {
    it('Has a length of 0', function() {
        assert.equal(func().length, 0);
    });

    it('Has a length of 3', function() {
        assert.equal(func(4,5,6).length, 3);
    });

    it('Has a length of 1', function() {
        assert.equal(func(2).length, 1);
    });

    it('Head is null', function() {
        assert.equal(func().head, null);
    });    

    it('Head is 2', function() {
        assert.equal(func(2,1).head.data, 2);
    });  

    it('Prints a null linked list correctly', function() {
        assert.equal(func(), '[||]');
    }); 

    it('Prints a linked list with items correctly', function() {
        assert.equal(func(4,5,6), '[|4, 5, 6|]');
    }); 

    it('Prints a linked list with a single item', function() {
        assert.equal(func(4), '[|4|]');
    }); 

    it('Iterates through a linked list', function() {
        let iterator = func(1,2,3);
        for (let node of iterator) {
            assert.hasAllKeys(node, ['data', 'next', 'prev']);
        }
    }); 
});