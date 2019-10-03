const partition = (arr, lbound, rbound, pivot) => {
    // i iterates through the array
    // j tracks where the pivot is placed
    let i, j;
    i = j = lbound;

    // ensure pivot is the last element
    let last;
    last = arr[rbound];
    arr[rbound] = arr[pivot];
    arr[pivot] = last;

    for (i; i < rbound; ++i) {
        let temp;
        if (arr[i] < arr[rbound]) {
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
