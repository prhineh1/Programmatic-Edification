'use strict';
const partition = require ('./rSelect_partition');

const rSelect = (arr, ord, lbound, rbound) => {
    if (ord > arr.length) {
        return null;
    }

    if (arr.length === 1) {
        return arr[0];
    }

    if (rbound === lbound) {
        return arr[rbound];
    }

    // choose pivot randomly between lbound and rbound
    let randomPivot;
    do {
        randomPivot = Math.floor(Math.random() * ((rbound+1)-lbound));
    } while (randomPivot < lbound || randomPivot > rbound);

    const position = partition(arr, lbound, rbound, randomPivot);

    if (position === ord) {
        return arr[position];
    }

    if (position > ord) {
        return rSelect(arr, ord, lbound, position-1);
    }

    if (position < ord) {
        return rSelect(arr, ord - position, position+1, rbound);
    }
}

console.log(rSelect([6,8,9,2,3,22], 1, 0, 5));