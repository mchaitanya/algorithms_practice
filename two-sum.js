// https://leetcode.com/problems/two-sum/
// tags - array, hash table
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    let map = new Map(); // keep track of the index for each value
    for (let i = 0; i < nums.length; i++) {
        const x = target - nums[i];
        if (map.has(x)) {
            return [map.get(x), i];
        }
        map.set(nums[i], i);
    }
    
    // let map = {};
    // for (let i = 0; i < nums.length; i++) {
    //     const x = target - nums[i];
    //     if (map[x] != null) {
    //         return [map[x], i];
    //     }
    //     map[nums[i]] = i;
    // }
    
    // for (let i = 0; i < nums.length; i++) {
    //     for (let j = i+1; j < nums.length; j++) {
    //         if (nums[i] + nums[j] === target) {
    //             return [i, j];
    //         }
    //     }
    // }
};