// https://leetcode.com/problems/average-salary-excluding-the-minimum-and-maximum-salary/
// tags - array
/**
 * @param {number[]} salary
 * @return {number}
 */
var average = function (salary) {
  let total = 0;
  let min = Infinity,
    max = -Infinity;
  for (const val of salary) {
    total += val;
    if (val < min) min = val;
    if (val > max) max = val;
  }

  // Given all values are unique & there are >= 3 values.
  // Therefore min & max can't be the same. Also there's only one instance of min & max.
  return (total - min - max) / (salary.length - 2);
};
