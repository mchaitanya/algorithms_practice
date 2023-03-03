// https://leetcode.com/problems/word-break/
// tags - dynamic-programming, recursion
/**
 * @param {string} s
 * @param {string[]} wordDict
 * @return {boolean}
 */
var wordBreak = function (s, wordDict) {
  // Given both s.length & wordDict.length >= 1
  const memo = new Array(s.length).fill(null);

  // Return true iff the substring starting at index 'start' can be segmented.
  function isSegmentable(start) {
    if (start === s.length) return true;
    if (memo[start] != null) return memo[start];
    for (const word of wordDict) {
      const index = s.indexOf(word, start);
      if (index === start && isSegmentable(start + word.length)) {
        memo[start] = true;
        return true;
      }
    }
    memo[start] = false;
    return false;
  }

  return isSegmentable(0);

  // const charsS = new Set(s);
  // const charsWordDict = new Set();
  // for (let word of wordDict) {
  //     for (let letter of word) {
  //         charsWordDict.add(letter);
  //     }
  // }

  // // check if there are any chars in s that don't even occur in wordDict
  // for (let char of charsS) {
  //     if (!charsWordDict.has(char)) {
  //         return false;
  //     }
  // }

  // // memoization
  // const segmentable = new Set(['']);
  // const notSegmentable = new Set();

  // // check recursively
  // return (function _isSegmentable(s) {
  //     if (segmentable.has(s)) {
  //         return true;
  //     }

  //     if (notSegmentable.has(s)) {
  //         return false;
  //     }

  //     for (let word of wordDict) {
  //         // if one of the words matches the start of s & the remainder can be segmented
  //         if (s.startsWith(word) && _isSegmentable(s.slice(word.length))) {
  //             segmentable.add(s);
  //             return true;
  //         }
  //     }

  //     notSegmentable.add(s);
  //     return false;

  // })(s);
};
