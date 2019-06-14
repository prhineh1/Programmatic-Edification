var assert = require('chai').assert;
var func = require('../compiled-js/spiral_matrix');

describe('spiral matrix', function() {
    it('should return an array of a square matrix in spiral order', function() {
        const matrix = [
            [1,2,3],
            [4,5,6],
            [7,8,9]
        ];
        assert.deepEqual(func(matrix),[1,2,3,6,9,8,7,4,5]);
    });

    it('should return an array of a rectangular (rows > columns) matrix in spiral order', function() {
        const matrix = [
            [1,2,3],
            [4,5,6],
            [7,8,9],
            [10,11,12]
        ];
        assert.deepEqual(func(matrix),[1,2,3,6,9,12,11,10,7,4,5,8]);
    });

    it('should return an array of a rectangular (rows < columns) matrix in spiral order', function() {
        const matrix = [
            [1,2,3,10],
            [4,5,6,11],
            [7,8,9,12]
        ];
        assert.deepEqual(func(matrix),[1,2,3,10,11,12,9,8,7,4,5,6]);
    });

    it('should return an empty array', function() {
        const matrix = [[]];
        assert.deepEqual(func(matrix),[]);
    });

    it('should return a singleton array', function() {
        const matrix = [[1]];
        assert.deepEqual(func(matrix),[1]);
    });
});