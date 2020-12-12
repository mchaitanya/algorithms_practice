// https://leetcode.com/problems/count-the-number-of-consistent-strings/
// tags - string
/**
 * @param {string} allowed
 * @param {string[]} words
 * @return {number}
 */
var countConsistentStrings = function(allowed, words) {
    const allowedChars = new Set(Array.from(allowed));
    let count = 0;
    scan:
    for (let word of words) {
        for (let char of word) {
            if (!allowedChars.has(char)) {
                continue scan;
            }
        }
        count++;
    }
    return count;
};