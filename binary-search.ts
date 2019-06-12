'use strict';

const binarySearch = (list: number[], item: number): number => {
    let low = 0;
    let high = list.length;

    while (low <= high) {
        let mid = Math.floor((low + high)/2);
        
        if (list[mid] === item) 
            return mid;
        if (list[mid] < item) 
            low = mid;
        else 
            high = mid;
    }
    return;
}

console.log(binarySearch([1, 5, 8 , 22, 56, 101], 56));