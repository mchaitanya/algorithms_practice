// https://leetcode.com/problems/minimum-time-difference/
// tags - array
/**
 * @param {string[]} timePoints
 * @return {number}
 */
var findMinDifference = function (timePoints) {
  function toMinutes(time) {
    const [hh, mm] = time.split(":").map(Number);
    return hh * 60 + mm;
  }

  const sorted = timePoints.map(toMinutes).sort((m1, m2) => m1 - m2);
  let minDiff = 24 * 60 - sorted[sorted.length - 1] + sorted[0];
  for (let i = 1; i < sorted.length; i++) {
    minDiff = Math.min(minDiff, sorted[i] - sorted[i - 1]);
  }
  return minDiff;
};
