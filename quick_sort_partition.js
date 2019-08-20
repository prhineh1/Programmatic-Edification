const partition = (arr, pivot) => {
    // i iterates through the array
    // j tracks where the pivot is placed
    let i, j;
    i = j = 0;

    for (i; i < pivot; ++i) {
        let temp;
        if (arr[i] < arr[arr.pivot]) {
            temp = arr[i];
            arr[i] = arr[j];
            arr[j] = temp;
            ++j;
        }
    }

    let swap;
    swap = arr[arr.pivot];
    arr[arr.pivot] = arr[j];
    arr[j] = swap;

    return j;
}

module.exports = partition;
