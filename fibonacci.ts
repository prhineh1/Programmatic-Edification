'use strict;';

const fib = (n: number): number[] => {
    let arr: number[] = [];

    if (n === 0) {
        return [1];
    }

    if (n === 1) {
        return [1,1];
    }

    let left, right: number[];
    left = fib(n-2);
    right = fib(n-1);
    if (left.length >= right.length) {
        return arr.concat(left, left[n-2] + right[n-1]);
    } else {
        return arr.concat(right, left[n-2] + right[n-1]);
    }
}

console.log(fib(3));