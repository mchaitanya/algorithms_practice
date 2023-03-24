// https://leetcode.com/problems/add-bold-tag-in-string/
// tags - string, interval
/**
 * @param {string} s
 * @param {string[]} words
 * @return {string}
 */
var addBoldTag = function (s, words) {
  function areOverlapping(i1, i2) {
    return i1[0] <= i2[1] && i1[1] >= i2[0] - 1;
  }

  function merge(i1, i2) {
    return [Math.min(i1[0], i2[0]), Math.max(i1[1], i2[1])];
  }

  // Match each word  with s and create an interval for each match. Then merge the intervals.
  const intervals = [];
  for (const w of words) {
    scan: for (let i = 0; i < s.length - w.length + 1; i++) {
      for (let j = 0; j < w.length; j++) {
        if (s[i + j] !== w[j]) continue scan;
      }
      intervals.push([i, i + w.length - 1]); // Both ends inclusive.
    }
  }

  if (intervals.length === 0) return s;
  // Sort the intervals.
  intervals.sort((i1, i2) => i1[0] - i2[0]);

  const merged = [];
  for (let i = 0, curr = intervals[0]; i < intervals.length; i++) {
    if (i === intervals.length - 1 || !areOverlapping(curr, intervals[i + 1])) {
      merged.push(curr);
      curr = intervals[i + 1];
    } else {
      curr = merge(curr, intervals[i + 1]);
    }
  }

  const result = [];
  for (let i = 0, j = 0; i < s.length; i++) {
    if (j >= merged.length) {
      result.push(s[i]);
    } else {
      const [start, end] = merged[j];
      if (i < start || (i > start && i < end)) {
        result.push(s[i]);
      } else if (i === start) {
        result.push("<b>", s[i]);
        if (start === end) {
          result.push("</b>");
          j++;
        }
      } else if (i === end) {
        result.push(s[i], "</b>");
        j++;
      }
    }
  }
  return result.join("");
};
