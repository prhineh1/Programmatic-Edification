'use strict';

import { ModuleKind } from "typescript";

const spiralOrder = (matrix: number[][]) => {
    let arr: number[];
    //check for an empty matrix
    for (let el of matrix) {
        if (el.length < 1) {
            return arr;
        }
    }
    let top, bottom, left, right, dir: number;
    top = left = dir = 0;
    bottom = matrix.length - 1;
    right = matrix[top].length - 1;

    let isSquare: boolean = matrix.length === matrix[top].length;
    /*
        If the matrix isn't a square,
        the while loop condition should
        be for the longer dimension
    */
    while (isSquare ? top <= bottom :
             matrix.length > matrix[top].length ?
               top <= bottom :
               left < right
          ) {
        switch(dir) {
            case 0:
                for (let i=left; i <= right; i++) {
                    arr.push(matrix[top][i]);
                }
                ++top;
                break;
            case 1:
                for (let i=top; i<=bottom; ++i) {
                    arr.push(matrix[i][right]);
                }
                --right;
                break;
            case 2:
                for (let i=right; i >= left; i--) {
                    arr.push(matrix[bottom][i])
                }
                --bottom;
                break;
            case 3:
                for (let i=bottom; i >= top; i--) {
                    arr.push(matrix[i][left]);
                }
                ++left;
        }
        dir = (dir + 1) % 4;
    }
    return arr;
}