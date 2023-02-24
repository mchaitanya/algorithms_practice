// https://leetcode.com/problems/number-of-sub-arrays-with-odd-sum/
// tags - array, dynamic-programming
/**
 * @param {number[]} arr
 * @return {number}
 */
var numOfSubarrays = function (arr) {
  // Store how many subarrays with odd/even sums end on each index.
  const odds = new Array(arr.length).fill(0);
  const evens = new Array(arr.length).fill(0);
  // Given arr.length >= 1.
  if (arr[0] % 2 === 0) {
    evens[0] = 1;
  } else {
    odds[0] = 1;
  }

  for (let i = 1; i < arr.length; i++) {
    if (arr[i] % 2 === 0) {
      // We can add arr[i] to all the odd-sum subarrays at ending on i-1
      // for an odd-sum subarray ending on i.
      odds[i] = odds[i - 1];
      // We can add arr[i] to the even-sum subarrays ending on i-1
      // or start a new subarray with arr[i].
      evens[i] = evens[i - 1] + 1;
    } else {
      odds[i] = evens[i - 1] + 1;
      evens[i] = odds[i - 1];
    }
  }

  // Sum up the subarray count for each index for the total.
  let numSubarrays = 0;
  for (const count of odds) {
    numSubarrays += count;
    numSubarrays %= 10 ** 9 + 7;
  }
  return numSubarrays;
};
