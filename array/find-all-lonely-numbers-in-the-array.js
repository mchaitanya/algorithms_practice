// https://leetcode.com/problems/find-all-lonely-numbers-in-the-array/
// tags - array
/**
 * @param {number[]} nums
 * @return {number[]}
 */
var findLonely = function (nums) {
  const map = new Map(); // Count how many times each number occurs.
  for (const num of nums) {
    map.set(num, (map.get(num) || 0) + 1);
  }
  return nums.filter(
    (num) => map.get(num) === 1 && !map.has(num + 1) && !map.has(num - 1)
  );
};
