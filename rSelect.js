'use strict';
const partition = require ('./rSelect_partition');

const rSelect = (arr, ord) => {
    if (ord > arr.length) {
        return null;
    }

    if (arr.length === 1) {
        return arr[0];
    }

    // choose pivot randomly
    const position = partition(arr, Math.floor(Math.random() * arr.length));

    if (position === ord) {
        return arr[position];
    }

    if (position > ord) {
        return rSelect(arr.slice(0, position), ord);
    }

    if (position < ord) {
        return rSelect(arr.slice(position+1), ord - (position+1));
    }
}

console.log(rSelect([6,8,9,2,3,22], 1));