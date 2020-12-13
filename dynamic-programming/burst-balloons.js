// https://leetcode.com/problems/burst-balloons/
// tags - dynamic-programming, recursion
/**
 * @param {number[]} nums
 * @return {number}
 */
var maxCoins = function(nums) {
    // console.log(nums);
    // what's the correct strategy?
    const n = nums.length;
    if (n === 0) return 0;
    
    // greedy?
    // if there's only 1 num - pick it
    // if there are 2 - pick the smaller first
    // if there are >= 3 - pick the smallest number in the middle - max bang for the buck
//     if (n === 1) {
//         return nums[0];
//     } else if (n === 2) {
//         return nums[0]*nums[1] + Math.max(nums[0], nums[1]);
//     }
    
//     let cx = 1;
//     for (let i = 1; i < n-1; i++) {
//         if (nums[i] < nums[cx]) {
//             cx = i;
//         }
//     }
//     return (nums[cx-1] * nums[cx] * nums[cx+1]) + maxCoins(nums.filter((_,i) => i !== cx));
    
    
    // dynamic programming? the problem has a recursive structure
    
    
    // there'll be n steps in all - each time you pick one balloon
    // brute force - try all n! sequences
    if (n === 1) {
        return nums[0];
    } else if (n === 2) {
        return nums[0]*nums[1] + Math.max(nums[0], nums[1]);
    }
    
    let max = 0;
    // choose each balloon - see how many coins you can get
    for (let i = 0; i < n; i++) {
        const previous = (i > 0 ? nums[i-1] : 1);
        const next = (i < n-1 ? nums[i+1] : 1);
        
        // backtracking
        let [popped] = nums.splice(i, 1);
        const coinsFromLeftover = maxCoins(nums);
        nums.splice(i, 0, popped);
        
        const coins = previous * nums[i] * next;
        if (coins + coinsFromLeftover > max) {
            max = coins + coinsFromLeftover;
        }
    }
    return max;
    
    
};