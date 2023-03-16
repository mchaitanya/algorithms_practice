// https://leetcode.com/problems/valid-palindrome-ii/
// tags - string
/**
 * @param {string} s
 * @return {boolean}
 */
var validPalindrome = function (s) {
  function isPalindrome(left, right, attemptDelete) {
    if (left >= right) {
      return true;
    } else if (s[left] === s[right]) {
      return isPalindrome(left + 1, right - 1, attemptDelete);
    } else if (attemptDelete) {
      return (
        isPalindrome(left + 1, right, false) ||
        isPalindrome(left, right - 1, false)
      );
    } else {
      return false;
    }
  }
  // Given s contains >= 1 chars.
  return isPalindrome(0, s.length - 1, true);
};
