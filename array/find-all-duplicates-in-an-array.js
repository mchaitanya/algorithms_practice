// https://leetcode.com/problems/find-all-duplicates-in-an-array/
// tags - array
/**
 * @param {number[]} nums
 * @return {number[]}
 */
var findDuplicates = function(nums) {
    //     // given 1 <= a[i] <= n
    //     const counts = Array(nums.length+1).fill(0);
    //     for (let n of nums) {
    //         counts[n]++;
    //     }
        
    //     // return counts
    //     //     .map((count, num) => [count, num])
    //     //     .filter(([count, _]) => count === 2)
    //     //     .map(([_, num]) => num);
    //     const result = [];
    //     for (let i = 0; i < counts.length; i++) {
    //         if (counts[i] === 2) {
    //             result.push(i);
    //         }
    //     }
    //     return result;
        
        // LeetCode approach 4
        // mark visited elements in the input array itself
        // flipping the sign to keep track of occurrences
        for (let x of nums) {
            // negate the value at abs(x)-1
            let ix = Math.abs(x) - 1;
            nums[ix] = -nums[ix];
        }
        
        const result = [];
        for (let x of nums) {
            let ix = Math.abs(x) - 1;
            if (nums[ix] > 0) { // must have flipped the sign twice
                result.push(Math.abs(x));
                nums[ix] = -nums[ix]; // we want to ignore the num on its next occurrence
            }
        }
        return result;
        
    };