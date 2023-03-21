// https://leetcode.com/problems/range-sum-query-immutable/
// tags - array
/**
 * @param {number[]} nums
 */
var NumArray = function (nums) {
  // Create an array of prefix sums.
  this.prefixSums = new Array(nums.length);
  this.prefixSums[0] = nums[0]; // Given nums.length >= 1.
  for (let i = 1; i < nums.length; i++) {
    this.prefixSums[i] = this.prefixSums[i - 1] + nums[i];
  }
};

/**
 * @param {number} left
 * @param {number} right
 * @return {number}
 */
NumArray.prototype.sumRange = function (left, right) {
  return this.prefixSums[right] - (left > 0 ? this.prefixSums[left - 1] : 0);
};

/**
 * Your NumArray object will be instantiated and called as such:
 * var obj = new NumArray(nums)
 * var param_1 = obj.sumRange(left,right)
 */
