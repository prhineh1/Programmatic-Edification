'use strict';

const sort = (left: number[], right: number[]): number[] => {
    let sorted: number[] = [];
    let i,j,k: number;
    i = j = k = 0;

    // sort the sub-arrays
    while (j < left.length && i < right.length) {
        if (left[j] < right[i]) {
            sorted[k]= left[j];
            ++j;
        }
        else {
            sorted[k] = right[i];
            ++i;
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

    return sorted;
}
// (n * log n time complexity)
const mergeSort = (list: number[]): number[] => {
    let left, right: number[];

    if (list.length <= 1) { return list; }
    let half: number = Math.floor(list.length/2);
    left = mergeSort(list.slice(0, half));
    right = mergeSort(list.slice(half));
    return sort(left, right);
}

console.log(mergeSort([14,7,3,12,9,11,6,2]));