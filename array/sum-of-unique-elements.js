// https://leetcode.com/problems/sum-of-unique-elements/
// tags -array
/**
 * @param {number[]} nums
 * @return {number}
 */
var sumOfUnique = function (nums) {
  // let sum = 0;
  // const seen = new Set();
  // const seenTwice = new Set();
  // for (const num of nums) {
  //     if (seenTwice.has(num)) continue;
  //     if (seen.has(num)) {
  //         seenTwice.add(num);
  //         sum -= num;
  //     } else {
  //         seen.add(num);
  //         sum += num;
  //     }
  // }
  // return sum;

  let sum = 0;
  // Store how many times each number occurs.
  const map = new Map();
  for (const num of nums) {
    const count = map.get(num) || 0;
    map.set(num, count + 1);
    if (count === 0) {
      sum += num;
    } else if (count === 1) {
      sum -= num;
    }
  }
  return sum;
};
