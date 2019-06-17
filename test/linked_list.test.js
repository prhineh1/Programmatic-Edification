var assert = require('chai').assert;
var func = require('../linked-list/linked_list');
var node = require('../node/node');

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

    it('Prints a linked list with a single item', function() {
        assert.equal(func(4), '[|{ data: 4, next: null, prev: null }|]');
    });

    it('Prints a linked list with items correctly', function() {
        assert.equal(""+func(4,[5]), '[|{ data: 4, next: Node, prev: null }, { data: [object Array], next: null, prev: null }|]');
    });

    it('Iterates through a linked list', function() {
        let iterator = func(1,2,3)[Symbol.iterator]();
        assert.propertyVal(iterator.next(), 'done', false, '1st item');
        assert.propertyVal(iterator.next(), 'done', false, '2nd item');
        assert.propertyVal(iterator.next(), 'done', false, '3rd item');
        assert.propertyVal(iterator.next(), 'done', true, 'done');
    });

    it('calls concat without any arguments', function() {
        assert.equal(func(1).concat().length, 1, '= the list it was called on');
    });

    it('concats an empty list with an empty list', function() {
        assert.equal(func().concat(func()).head, null, '= an empty list');
    });

    it('concats an empty list with non-node element', function() {
        assert.equal(func().concat(1).length, 1, '= list with one element');
    });

    it('concats an empty list with a node element', function() {
        assert.deepEqual(func().concat(node(5)).length, 1, '= list with one element');
    });

    it('concats a list with an empty list', function() {
        assert.deepEqual(func(1,2).concat(func()).length, 2, '= list with 2 elements');
    });

    it('concats a list with a list', function() {
        assert.deepEqual(func(1,2).concat(func(3,4)).length, 4, '= list with one element');
    });
});