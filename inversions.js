'use strict';

const count = (left, right) => {
    let sorted = [];
    let i, j, k, inversions;
    i = j = k = inversions = 0;

    // sort the sub-arrays
    while (j < left.length && i < right.length) {
        if (left[j] <= right[i]) {
            sorted[k] = left[j];
            ++j;
        }
        else {
            sorted[k] = right[i];
            ++i;
            inversions += left.length - j;
        }
        ++k;
    }
    /*
     append whichever array is unexhausted
     to the rest of 'sorted'
    */
    while (j < left.length) {
        sorted[k] = left[j];
        j++, k++;
    }

    while (i < right.length) {
        sorted[k] = right[i];
        i++, k++;
    }

    return [sorted, inversions];
}
// (n * log n time complexity)
const findIversions = (list) => {
    let left, right, leftInv, rightInv, sorted, splitInv;

    if (list.length <= 1) { return [list, 0]; }
    let half = Math.floor(list.length/2);
    [left, leftInv]  = findIversions(list.slice(0, half));
    [right, rightInv] = findIversions(list.slice(half));
    [sorted, splitInv] = count(left, right);
    return [sorted, splitInv+leftInv+rightInv]
}

console.log(findIversions([1,3,5,2,4,6]));
console.log(findIversions([1,6,7,8,2]))