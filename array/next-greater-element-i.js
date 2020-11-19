// https://leetcode.com/problems/next-greater-element-i/
// tags - array
/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var nextGreaterElement = function(nums1, nums2) {
    // function _findNextGreater(n1) {
    //     let seen = false;
    //     for (let n2 of nums2) {
    //         if (n2 === n1) {
    //             seen = true;
    //         }
            
    //         if (seen && n2 > n1) {
    //             return n2;
    //         }
    //     }
    //     return -1;
    // }
    
    // const result = Array(nums1.length);
    // for (let i = 0; i < nums1.length; i++) {
    //     result[i] = _findNextGreater(nums1[i]);
    // }
    
    // return result;
    
    // MONOTONIC STACK
    const map = new Map();
    const stack = [];
    for (let num of nums2) { // O(n)
        while (stack.length > 0 && stack[stack.length-1] < num) {
            map.set(stack.pop(), num);
        }
        stack.push(num);
    }
    // console.log(map);
    
    const result = Array(nums1.length);
    for (let i = 0; i < nums1.length; i++) { // O(m)
        result[i] = map.get(nums1[i]) || -1;
    }
    return result;

};