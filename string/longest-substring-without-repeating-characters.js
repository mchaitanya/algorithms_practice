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
    
//     if (s.length === 0) {
//         return 0;
//     }
    
//     // apply dynamic programming - state[i] = length of LSWRC ending on i
//     const state = Array(s.length).fill(1);
//     for (let i = 1; i < s.length; i++) {
//         let j = 0;
//         while (j < state[i-1]) {
//             if (s[i-j-1] === s[i]) {
//                 break;
//             }
//             j++;
//         }
//         state[i] += j;
//     }
    
//     return Math.max(...state);
    
    
    // let maxLen = 0;
    // for (let i = 0, sub = ''; i < s.length; i++) {
    //     sub += s[i];
    //     if (i === s.length-1 || sub.includes(s[i+1])) {
    //         maxLen = Math.max(maxLen, sub.length);
    //         sub = sub.slice(sub.indexOf(s[i+1]) + 1);
    //     }
    // }
    // return maxLen;
    
    
    // using a HashSet as a sliding window
    let maxLen = 0;
    let start = 0, end = 0;
    let window = new Set();
    while (start < s.length && end < s.length) {
        if (!window.has(s[end])) {
            window.add(s[end]);
            end++;
            maxLen = Math.max(maxLen, end-start);
        } else {
            // we keep removing chars from the start till there are no duplicates
            window.delete(s[start]);
            start++;
        }
    }
    return maxLen;
};