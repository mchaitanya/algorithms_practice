// https://leetcode.com/problems/single-number/
// tags - set, bit-manipulation
/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function (nums) {
  // XOR all the numbers.
  // a XOR b = 1 if a & b are different, = 0 if they are the same.
  // XORing a number with zero gives the same number back.
  let result = 0;
  for (const n of nums) {
    result ^= n;
  }
  return result;

  // const set = new Set();
  // for (const n of nums) {
  //     if (set.has(n)) {
  //         set.delete(n);
  //     } else {
  //         set.add(n);
  //     }
  // }
  // return Array.from(set)[0];
};
