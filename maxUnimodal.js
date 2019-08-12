'use strict';

const maxUnimodal = (arr)  => {
    if (arr.length <= 1) { return arr[0]; }

    const half = Math.floor(arr.length/2);
    const left = maxUnimodal(arr.slice(0,half));
    const right = maxUnimodal(arr.slice(half));
    return Math.max(left, right);
}
console.log(maxUnimodal([1,1,1,2,6,6,9,18,5,3,2,2,1]));