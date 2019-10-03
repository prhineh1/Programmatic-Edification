const partition = (arr, rbound) => {
    // i iterates through the array
    // j tracks where the pivot is placed
    let i, j;
    i = j = 0;

    // ensure rbound is the last element
    let last;
    last = arr[arr.length-1];
    arr[arr.length-1] = arr[rbound];
    arr[rbound] = last;

    for (i; i < arr.length; ++i) {
        let temp;
        if (arr[i] < arr[arr.length-1]) {
            temp = arr[i];
            arr[i] = arr[j];
            arr[j] = temp;
            ++j;
        }
    }

    let swap;
    swap = arr[arr.length-1];
    arr[arr.length-1] = arr[j];
    arr[j] = swap;

    return j;
}

module.exports = partition;
