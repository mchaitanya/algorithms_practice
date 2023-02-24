// https://leetcode.com/problems/insert-delete-getrandom-o1/
// tags - array, map
var RandomizedSet = function () {
  this.map = new Map(); // O(1) insertion & deletion
  this.arr = []; // O(1) element access
};

/**
 * @param {number} val
 * @return {boolean}
 */
RandomizedSet.prototype.insert = function (val) {
  if (this.map.has(val)) return false;
  this.map.set(val, this.arr.length);
  this.arr.push(val);
  return true;
};

/**
 * @param {number} val
 * @return {boolean}
 */
RandomizedSet.prototype.remove = function (val) {
  if (!this.map.has(val)) return false;
  const idx = this.map.get(val);
  const last = this.arr.length - 1;
  // Fix the map.
  this.map.set(this.arr[last], idx);
  this.map.delete(val);
  // Swap the val with the val at the end & pop it out of the array.
  [this.arr[idx], this.arr[last]] = [this.arr[last], this.arr[idx]];
  this.arr.pop();
  return true;
};

/**
 * @return {number}
 */
RandomizedSet.prototype.getRandom = function () {
  const idx = Math.floor(this.arr.length * Math.random());
  return this.arr[idx];
};

/**
 * Your RandomizedSet object will be instantiated and called as such:
 * var obj = new RandomizedSet()
 * var param_1 = obj.insert(val)
 * var param_2 = obj.remove(val)
 * var param_3 = obj.getRandom()
 */
