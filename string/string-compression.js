// https://leetcode.com/problems/string-compression/
// tags - string
/**
 * @param {character[]} chars
 * @return {number}
 */
var compress = function (chars) {
  let j = 0;
  for (let i = 0, count = 0; i < chars.length; i++) {
    count++;
    if (i === chars.length - 1 || chars[i + 1] !== chars[i]) {
      const compressed = chars[i] + (count > 1 ? String(count) : "");
      for (const c of compressed) {
        chars[j] = c;
        j++;
      }
      count = 0;
    }
  }
  return j;
};
