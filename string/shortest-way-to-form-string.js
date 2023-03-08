// https://leetcode.com/problems/shortest-way-to-form-string/
// tags - string
/**
 * @param {string} source
 * @param {string} target
 * @return {number}
 */
var shortestWay = function (source, target) {
  // Greedy strategy - At each step, consume the longest prefix of target that is a subsequence of source.
  function segment(j) {
    let i = 0;
    const initial = j;
    while (i < source.length && j < target.length) {
      if (source[i] === target[j]) j++;
      i++;
    }

    if (j === initial) {
      return -1; // target[j] didn't match any char in source.
    } else if (j === target.length) {
      // target is a subsequence of source.
      return 1;
    } else {
      const remaining = segment(j);
      return remaining !== -1 ? remaining + 1 : -1;
    }
  }

  return segment(0);
};
