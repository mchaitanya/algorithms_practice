// https://leetcode.com/problems/arranging-coins/
// tags - binary-search
/**
 * @param {number} n
 * @return {number}
 */
var arrangeCoins = function (n) {
  // Apply binary search.
  // Coins required upto row i = 1 + 2 + ... + i = i(i+1)/2
  if (n <= 1) return n;
  // Binary search the range 1 to n.
  let left = 1,
    right = n;
  while (left <= right) {
    const mid = left + Math.floor((right - left) / 2);
    const numCoins = (mid * (mid + 1)) / 2;
    if (numCoins === n) {
      return mid;
    } else if (numCoins < n) {
      left = mid + 1;
    } else {
      right = mid - 1;
    }
  }
  return left - 1;

  // let row = 1;
  // let numLeft = n;
  // while (numLeft >= row) {
  //     numLeft -= row;
  //     row++;
  // }
  // return row-1;
};
