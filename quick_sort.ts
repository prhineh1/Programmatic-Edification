'use strict';

const swap = (list: number[], j: number) => {
    let temp: number = list[j];
    list[j] = list[j+1];
    list[j+1] = temp;
}

const sort = (list: number[], pivot: number): number => {
    let i, j;
    i = 0;

    while (i < list.length) {
        j = i;
        /* 
            if an item is > than pivot and is to
            its left, move it until its right of pivot
        */
        if (list[i] > list[pivot] && i < pivot) {
            while (j < pivot) {
                swap(list, j);
                ++j;
            }
            --pivot; // shift pivot index back
        }
        /* 
            converse of above: move smaller numbers
            to the left of the pivot
        */
        else if (list[i] < list[pivot] && i > pivot) {
            while (j > pivot) {
                swap(list, j-1);
                --j;
            }
            ++pivot; // shift forward
            ++i; // previous element was already handled
        }
        else { ++i; }
    }

    return pivot;
}

const quickSort = (list: number[], pivot: number): number[] => {
    let left, right: number[];
    pivot = sort(list, pivot);
    if (pivot <= 1) {
        return list;
    }
    left = quickSort(list.slice(0, pivot), list.slice(0, pivot).length-1);
    right = quickSort(list.slice(pivot+1), list.slice(pivot+1).length-1);
    return left.concat(list[pivot], right);
}

console.log(quickSort([50,23,9,18,61,2,32,11], 6))