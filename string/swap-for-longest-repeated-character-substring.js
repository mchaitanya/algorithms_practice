// https://leetcode.com/problems/swap-for-longest-repeated-character-substring/
// tags - string
/**
 * @param {string} text
 * @return {number}
 */
var maxRepOpt1 = function (text) {
  // Count the frequency of each char.
  const map = new Map();
  for (const c of text) {
    const count = map.get(c) || 0;
    map.set(c, count + 1);
  }

  let maxLen = 0;
  for (let i = 0; i < text.length; i++) {
    let first = text[i],
      second = null;
    let count = map.get(first);
    let len = 0;
    for (let j = i; j < text.length; j++) {
      // count > 0 here
      if (text[j] === first) {
        len++;
      } else if (second == null) {
        // We can swap second for first since count > 0
        second = text[j];
        len++;
      } else {
        maxLen = Math.max(len, maxLen);
        break;
      }

      count--;
      if (count === 0) {
        maxLen = Math.max(len, maxLen);
        break;
      }

      if (j === text.length - 1 && second == null) {
        maxLen = Math.max(len + 1, maxLen);
      }
    }
  }
  return maxLen;
};
