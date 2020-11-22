// https://leetcode.com/problems/permutations/
// tags - array, recursion
/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permute = function(nums) {
    // if (nums.length === 0) {
    //     return [[]];
    // } else if (nums.length === 1) {
    //     return [nums];
    // } else if (nums.length === 2) {
    //     return [nums, [nums[1], nums[0]]];
    // }
    
    // // length at least 3
    // let permutations = [];
    // for (let num of nums) {
    //     const rest = nums.filter(n => n !== num);
    //     for (let sub of permute(rest)) {
    //         permutations.push([num, ...sub]);
    //     }
    // }
    
    // return permutations;


    // See Laaksonen
    // imagine this in terms of a tree
    // at a depth of 1, you're picking an element for the first slot - there are n options
    // at a depth of 2, you're picking an element for the second slot - (n-1) options
    // ...
    // ..
    // . 
    // explore all n(n-1)(n-2) ... 1 = n! permutations
    
    const permutations = [];
    function _search(arr = [], chosen = Array(nums.length).fill(false)) {
        if (arr.length === nums.length) {
            permutations.push(arr);
            return;
        }
        
        for (let i = 0; i < nums.length; i++) {
            if (chosen[i]) continue;
            // add the ith element to the permutation
            const updatedArr = arr.concat(nums[i]);
            // flip chosen to true for the ith element
            const updatedChosen = chosen.map((flag, j) => j === i ? true : flag);
            _search(updatedArr, updatedChosen);
        }
        
    }
    
    _search();
    return permutations;
    
};