// https://leetcode.com/problems/largest-values-from-labels/
// tags - array, greedy
/**
 * @param {number[]} values
 * @param {number[]} labels
 * @param {number} numWanted
 * @param {number} useLimit
 * @return {number}
 */
var largestValsFromLabels = function (values, labels, numWanted, useLimit) {
  // ALWAYS consider a greedy strategy before DP!
  const n = values.length;
  // values[i] >= 0. Pick as many values as you can.

  // Sort the values in decreasing order.
  const sorted = values
    .map((val, i) => [val, labels[i]])
    .sort((e1, e2) => e2[0] - e1[0]);

  let sum = 0;
  // Keep track of how many values of each label we've picked.
  const map = new Map();
  for (let i = 0, j = 0; i < n && j < numWanted; i++) {
    const [value, label] = sorted[i];
    const count = map.get(label) || 0;
    if (count < useLimit) {
      map.set(label, count + 1);
      sum += value;
      j++;
    }
  }
  return sum;
};
