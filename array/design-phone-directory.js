// https://leetcode.com/problems/design-phone-directory/
// tags - design
/**
 * @param {number} maxNumbers
 */
var PhoneDirectory = function (maxNumbers) {
  this.available = new Set();
  for (let num = 0; num < maxNumbers; num++) {
    this.available.add(num);
  }
};

/**
 * @return {number}
 */
PhoneDirectory.prototype.get = function () {
  if (this.available.size === 0) return -1;
  const { value: result } = this.available.values().next();
  this.available.delete(result);
  return result;
};

/**
 * @param {number} number
 * @return {boolean}
 */
PhoneDirectory.prototype.check = function (number) {
  return this.available.has(number);
};

/**
 * @param {number} number
 * @return {void}
 */
PhoneDirectory.prototype.release = function (number) {
  this.available.add(number);
};

/**
 * Your PhoneDirectory object will be instantiated and called as such:
 * var obj = new PhoneDirectory(maxNumbers)
 * var param_1 = obj.get()
 * var param_2 = obj.check(number)
 * obj.release(number)
 */
