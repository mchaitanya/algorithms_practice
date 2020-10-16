// https://leetcode.com/problems/relative-sort-array/
// tags - array
/**
 * @param {number[]} arr1
 * @param {number[]} arr2
 * @return {number[]}
 */
var relativeSortArray = function(arr1, arr2) {
    const map = new Map(); // map each number to its index
    for (let i = 0; i < arr2.length; i++) {
        map.set(arr2[i], i);
    }
    
    const inArr2 = [];
    const notInArr2 = [];
    for (let e of arr1) {
        if (map.has(e)) {
            inArr2.push(e);
        } else {
            notInArr2.push(e);
        }
    }
    
    // sort inArr2 according to ordering in arr2
    inArr2.sort((e1, e2) => map.get(e1) - map.get(e2));
    // console.log(inArr2);
    
    // sort notInArr2 in ascending order
    notInArr2.sort((e1, e2) => e1 - e2);
    // console.log(notInArr2);
    
    
    return [...inArr2, ...notInArr2];
    
};