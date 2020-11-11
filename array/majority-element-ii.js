// https://leetcode.com/problems/majority-element-ii/
// tags - array
/**
 * @param {number[]} nums
 * @return {number[]}
 */
var majorityElement = function(nums) {
    const map = new Map();
    for (let n of nums) {
        let count = map.get(n) || 0;
        map.set(n, count+1);
    }
    
    return Array.from(map.entries())
            .filter(([_, count]) => count > Math.floor(nums.length/3))
            .map(([n, _]) => n);
};