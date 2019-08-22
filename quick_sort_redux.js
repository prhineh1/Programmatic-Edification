const partition = require ('./quick_sort_partition');

const quicksort = (arr, lbound, rbound) => {
    if (lbound >= rbound) {
        return;
    }
    let pivot = partition(arr, lbound, rbound);
    if (lbound < pivot-1) {
        quicksort(arr, lbound, pivot-1); 
    }
    if (pivot < rbound) {
        quicksort(arr, pivot+1, rbound);
    }
    return arr;
}
console.log(quicksort([50,23,9,18,61,2,32,11], 0, 7));