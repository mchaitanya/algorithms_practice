// https://leetcode.com/problems/fruit-into-baskets/
// tags - array
/**
 * @param {number[]} tree
 * @return {number}
 */
var totalFruit = function(tree) {
    // essentially find length of the longest subarray that contains only 2 distinct elements
    let maxLen = 0;
    let start = 0, end = 0;
    const distinct = new Map();
    
    while (start < tree.length && end < tree.length) {
        // invariant: window contains <= 2 types of tree
        if (distinct.size < 2 || distinct.has(tree[end])) {
            let count = distinct.get(tree[end]) || 0;
            distinct.set(tree[end], count + 1);
            end++; // end now points to next index to process
            maxLen = Math.max(maxLen, end-start);
        } else {
            // distinct.size === 2 and tree[end] isn't in it
            // advance start till distinct.size drops to 1
            start++;
            let count = distinct.get(tree[start]);
            if (count > 1) {
                distinct.set(tree[start], count-1);
            } else {
                distinct.delete(tree[start]);
            }
        }
    }
    
    return maxLen;
    
};