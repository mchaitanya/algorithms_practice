// https://leetcode.com/problems/finding-the-users-active-minutes/
// tags - array
/**
 * @param {number[][]} logs
 * @param {number} k
 * @return {number[]}
 */
var findingUsersActiveMinutes = function (logs, k) {
  // Map each user to a set containing the minutes at which they performed actions.
  const map = new Map();
  for (const [id, time] of logs) {
    if (!map.has(id)) map.set(id, new Set());
    map.get(id).add(time);
  }

  const result = new Array(k).fill(0);
  for (const set of map.values()) {
    if (set.size <= k) result[set.size - 1]++;
  }
  return result;
};
