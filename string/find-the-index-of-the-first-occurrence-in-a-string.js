// https://leetcode.com/problems/find-the-index-of-the-first-occurrence-in-a-string/
// tags - string
/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */
var strStr = function (haystack, needle) {
  // Scan haystack with a needle-sized window.
  for (let i = 0; i < haystack.length - needle.length + 1; i++) {
    for (let j = i, k = 0; k < needle.length; j++, k++) {
      if (haystack[j] !== needle[k]) break;
      if (k === needle.length - 1) return i;
    }
  }
  return -1;
};
