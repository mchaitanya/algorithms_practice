// https://leetcode.com/problems/palindrome-permutation/
// tags - string
/**
 * @param {string} s
 * @return {boolean}
 */
var canPermutePalindrome = function(s) {
    const set = new Set();
    for (let c of s) {
        if (set.has(c)) {
            set.delete(c);
        } else {
            set.add(c);
        }
    }
    
    // if the set is empty, there are an even number of each character
    // if there's one char left in the set, we can put that in the middle of the palindrome
    return set.size === 0 || set.size === 1;
};
