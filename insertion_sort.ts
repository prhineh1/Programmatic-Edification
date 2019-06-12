'use strict';

//complexity O(n**2)
const insertionSort = (list: number[]): number[] => {
    for (let i: number = 1; i < list.length; ++i) {
        let k: number = i;
        let j: number = k - 1;
        while (j >= 0) {
            // if the ith + 1 element > ith swap them
            if (list[k] < list[j]) {
                let smaller: number = list[k];
                list[k] = list[j];
                list[j] = smaller;
                --j;
                --k;
            } else { break; }
        }
    }
    return list;
}

console.log(insertionSort([25,17,31,13,2]));