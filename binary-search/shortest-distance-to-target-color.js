// https://leetcode.com/problems/shortest-distance-to-target-color/
// tags - binary-search
/**
 * @param {number[]} colors
 * @param {number[][]} queries
 * @return {number[]}
 */
var shortestDistanceColor = function (colors, queries) {
  // Store the indexes where each color occurs.
  const map = new Map();
  for (let i = 0; i < colors.length; i++) {
    if (!map.has(colors[i])) map.set(colors[i], []);
    map.get(colors[i]).push(i);
  }

  // Binary search the indexes.
  function calculateDistance(arr, target) {
    if (target <= arr[0]) return arr[0] - target;
    if (target >= arr[arr.length - 1]) return target - arr[arr.length - 1];

    // Now target must lie in the middle.
    let left = 0,
      right = arr.length;
    while (left <= right) {
      const mid = left + Math.floor((right - left) / 2);
      if (arr[mid] === target) {
        return 0;
      } else if (arr[mid] > target) {
        right = mid - 1; // Search the left half.
      } else {
        left = mid + 1; // Search the right half.
      }
    }

    // left will have crossed right
    return Math.min(arr[left] - target, target - arr[right]);
  }

  const result = [];
  for (const [i, c] of queries) {
    if (!map.has(c)) {
      result.push(-1);
    } else {
      result.push(calculateDistance(map.get(c), i));
    }
  }
  return result;
};
