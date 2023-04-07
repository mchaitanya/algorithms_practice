// https://leetcode.com/problems/set-mismatch/
// tags - array
/**
 * @param {number[]} nums
 * @return {number[]}
 */
var findErrorNums = function (nums) {
  let repeat;
  let sum = 0;
  const set = new Set();
  for (let num of nums) {
    sum += num;
    if (set.has(num)) repeat = num;
    set.add(num);
  }

  // const n = nums.length;
  const expectedSum = (nums.length * (nums.length + 1)) / 2;

  // const diff = sum - expectedSum
  const missing = repeat - (sum - expectedSum);

  return [repeat, missing];
};
