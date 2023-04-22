// https://leetcode.com/problems/counting-elements/
// tags - array
/**
 * @param {number[]} arr
 * @return {number}
 */
var countElements = function (arr) {
  // // Given 0 <= arr[i] <= 1000
  // const count = new Array(1001).fill(0);
  // for (const num of arr) {
  //     count[num]++;
  // }
  // let result = 0;
  // for (let i = 0; i < 1000; i++) {
  //     if (count[i+1] > 0) result += count[i];
  // }
  // return result;

  let count = 0;
  const set = new Set(arr);
  for (const num of arr) {
    if (set.has(num + 1)) count++;
  }
  return count;
};
