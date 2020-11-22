// https://leetcode.com/problems/subsets/
// tags - array, bitmask
/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var subsets = function(nums) {
    // // if there are n numbers, there can be 2**n subsets
    // // for each number, decide whether to keep it or not
    // const numSubsets = 2**(nums.length);
    // const result = Array(numSubsets);
    // for (let i = 0; i < numSubsets; i++) {
    //     let bitmask = i.toString(2).padStart(nums.length, '0'); 
    //     result[i] = nums.filter((_, i) => bitmask[i] === '1');
    // }
    // return result;


    // See Laaksonen, Ch5 - Complete Search - Generating Subsets Method 1
    // const result = [];
    // function _search(ix, subset = []) {
    //     if (ix === nums.length) {
    //         // all elements have been processed & a subset has been generated
    //         result.push(subset);
    //     } else {
    //         // decide whether to include element at ix or not
    //         _search(ix+1, subset); // chose not to include
    //         _search(ix+1, subset.concat(nums[ix])); // chose to include
    //     }
    // }
    
    // _search(0);
    // return result;

    const result = [];
    const subset = [];
    function _search(ix) {
        if (ix === nums.length) {
            // all elements have been processed & a subset has been generated
            // create a copy here, since we manage (push/pop) current subset in same array
            result.push([...subset]);
        } else {
            // decide whether to include element at ix or not
            // chose not to include
            _search(ix+1);
            // chose to include
            subset.push(nums[ix]);
            _search(ix+1);
            subset.pop(); // backtracking step
        }
    }
    
    _search(0);
    return result;

};