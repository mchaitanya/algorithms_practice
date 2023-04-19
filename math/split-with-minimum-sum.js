// https://leetcode.com/problems/split-with-minimum-sum/
// tags - math
/**
 * @param {number} num
 * @return {number}
 */
var splitNum = function (num) {
  // Count how many times each digit occurs.
  const count = new Array(10).fill(0);
  while (num > 0) {
    count[num % 10]++;
    num = Math.floor(num / 10);
  }

  // Build up nums1 & nums2 by picking digits alternately.
  let nums1 = 0,
    nums2 = 0;
  for (let i = 0, numDigits = 0; i < 10; i++) {
    while (count[i] > 0) {
      if (numDigits % 2 === 0) {
        nums1 = nums1 * 10 + i;
      } else {
        nums2 = nums2 * 10 + i;
      }
      numDigits++;
      count[i]--;
    }
  }

  return nums1 + nums2;
};
