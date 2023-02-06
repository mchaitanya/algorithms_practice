// https://leetcode.com/problems/longest-common-prefix/
// tags - string
/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function (strs) {
  let i = 0; // i is the index where the first mismatch occurs.
  search: while (true) {
    // strs contains at least one string. Okay to access strs[0].
    if (i >= strs[0].length) break;
    for (let j = 1; j < strs.length; j++) {
      if (i >= strs[j].length || strs[j][i] !== strs[0][i]) {
        break search;
      }
    }
    i++;
  }
  return strs[0].slice(0, i);

  // let len = strs[0].length;
  // for (let i = 1; i < strs.length; i++) {
  //     if (strs[i].length < len) len = strs[i].length;
  // }

  // let diffIdx = len;
  // for (let i = 0; i < len && diffIdx === len; i++) {
  //     for (let j = 1; j < strs.length; j++) {
  //         if (strs[j][i] !== strs[0][i]) {
  //             diffIdx = i;
  //             break;
  //         }
  //     }
  // }
  // return strs[0].slice(0, diffIdx);
};
