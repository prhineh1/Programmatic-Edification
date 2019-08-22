const partition = (arr, lbound, rbound) => {
    // i iterates through the array
    // j tracks where the pivot is placed
    let i, j;
    i = j = lbound;

    for (i; i < rbound; ++i) {
        let temp;
        if (arr[i] < arr[rbound]) { // use the last element for the partition
            temp = arr[i];
            arr[i] = arr[j];
            arr[j] = temp;
            ++j;
        }
    }

    let swap;
    swap = arr[rbound];
    arr[rbound] = arr[j];
    arr[j] = swap;

    return j;
}

module.exports = partition;
