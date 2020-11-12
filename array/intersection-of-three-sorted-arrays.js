// https://leetcode.com/problems/intersection-of-three-sorted-arrays/
// tags - array
/**
 * @param {number[]} arr1
 * @param {number[]} arr2
 * @param {number[]} arr3
 * @return {number[]}
 */
var arraysIntersection = function(arr1, arr2, arr3) {
    //     // we can intersect arr1 & arr2, then the result of that with arr3
    //     function _intersect(arr1, arr2) {
    //         const result = [];
    //         let i = 0, j = 0;
    //         while (i < arr1.length && j < arr2.length) {
    //             if (arr1[i] < arr2[j]) {
    //                 i++;
    //             } else if (arr1[i] > arr2[j]) {
    //                 j++;
    //             } else {
    //                 result.push(arr1[i]);
    //                 i++;
    //                 j++;
    //             }
    //         }
            
    //         return result;
    //     }
        
    //     return _intersect(_intersect(arr1, arr2), arr3);
        
        const set1 = new Set(arr1);
        const set2 = new Set(arr2);
        return arr3.filter(n => set1.has(n) && set2.has(n));
        
    //     // we are given that the numbers can lie between 1 and 2000 (inclusive)
    //     const freq = Array(2001).fill(0);
    //     function _count(arr) {
    //         for (let n of arr) {
    //             freq[n]++;
    //         }
    //     }
        
    //     _count(arr1);
    //     _count(arr2);
    //     _count(arr3);
        
    //     const result = [];
    //     for (let i = 0; i < freq.length; i++) {
    //         if (freq[i] === 3) {
    //             result.push(i);
    //         }
    //     }
    //     return result;
        
};