const partition = require ('./quick_sort_partition');

const quicksort = (arr, lbound, rbound) => {
    if (lbound >= rbound) {
        return;
    }
    const pivot = partition(arr, lbound, rbound);
    return quicksort(arr.slice(0,pivot)).concat(arr[pivot], quicksort(arr.slice(pivot+1)));
}
console.log(quicksort([50,23,9,18,61,2,32,11]));