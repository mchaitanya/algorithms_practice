// https://leetcode.com/problems/longest-substring-without-repeating-characters/
// tags - string, dynamic-programming
/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
    //     // search greedily from the left
    //     // fails on "dvdf" - greedy approach won't work
    //     let maxLen = 0;
    //     const set = new Set();
    //     for (let i = 0; i < s.length; i++) {
    //         set.add(s[i]);
    //         if (i+1 == s.length || set.has(s[i+1])) {
    //             if (set.size > maxLen) {
    //                 maxLen = set.size;
    //             }
    //             set.clear();
    //         }
            
    //     }
    //     return maxLen;
        
        if (s.length === 0) {
            return 0;
        }
        
        // apply dynamic programming - state[i] = length of LSWRC ending on i
        // if we define state[i] = length of LSWRC in substring upto i
        // then it's hard to define a relation between state[i+1] & state[i]
        const state = Array(s.length).fill(1);
        for (let i = 1; i < s.length; i++) {
            let j = 0;
            while (j < state[i-1]) {
                if (s[i-j-1] === s[i]) {
                    break;
                }
                j++;
            }
            state[i] += j;
        }
        
        return Math.max(...state);
        
    };