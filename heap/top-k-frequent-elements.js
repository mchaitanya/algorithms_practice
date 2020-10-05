// https://leetcode.com/problems/top-k-frequent-elements/
// tags - heap, sorting
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var topKFrequent = function(nums, k) {
    // count the occurences, sort by frequency, pick top k
    // that should be O(nlogn)
    const countsMap = new Map();
    for (const num of nums) {
        const count = countsMap.get(num) || 0;
        countsMap.set(num, count + 1);
    }
    
    const countsArray = Array.from(countsMap.entries());
    // each entry is a tuple of the form [num, count]
    // sort the array in place
    countsArray.sort((entry1, entry2) => entry2[1] - entry1[1]);
    
    return countsArray.slice(0, k).map(entry => entry[0]);
    
};