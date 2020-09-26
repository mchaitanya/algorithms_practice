// https://leetcode.com/problems/valid-palindrome/
// tags - string
/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function(s) {
    const cleaned = s.toLowerCase().replace(new RegExp(/[^0-9a-zA-Z]/, 'g'), '');
    for (let left = 0, right = cleaned.length - 1; left < right; left++, right--) {
        if (cleaned[left] !== cleaned[right]) {
            return false;
        }
    }
    return true;
};