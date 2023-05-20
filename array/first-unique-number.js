// https://leetcode.com/problems/first-unique-number/
// tags - array
/**
 * @param {number[]} nums
 */
var FirstUnique = function (nums) {
  this.unique = new Set();
  this.repeated = new Set();
  for (const num of nums) {
    this.add(num);
  }
};

/**
 * @return {number}
 */
FirstUnique.prototype.showFirstUnique = function () {
  if (this.unique.size > 0) {
    // The iterator yields the values of the set in insertion order.
    const iter = this.unique[Symbol.iterator]();
    return iter.next().value;
  }
  return -1;
};

/**
 * @param {number} value
 * @return {void}
 */
FirstUnique.prototype.add = function (value) {
  if (this.repeated.has(value)) return;
  if (this.unique.has(value)) {
    this.repeated.add(value);
    this.unique.delete(value);
  } else {
    this.unique.add(value);
  }
};

/**
 * Your FirstUnique object will be instantiated and called as such:
 * var obj = new FirstUnique(nums)
 * var param_1 = obj.showFirstUnique()
 * obj.add(value)
 */
