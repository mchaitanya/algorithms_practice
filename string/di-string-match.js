// https://leetcode.com/problems/di-string-match/
// tags - string
/**
 * @param {string} s
 * @return {number[]}
 */
var diStringMatch = function (s) {
  const n = s.length;
  const result = [];
  let low = 0,
    high = n;
  for (let i = 0; i < s.length; i++) {
    if (s[i] === "I") {
      // Next number is guaranteed to be greater.
      result.push(low);
      low++;
    } else {
      // Next number is guaranteed to be smaller.
      result.push(high);
      high--;
    }
  }
  // Can push either high/low - that'll be the last remaining number.
  result.push(low);

  return result;
};
