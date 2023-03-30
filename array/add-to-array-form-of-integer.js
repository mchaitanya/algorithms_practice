// https://leetcode.com/problems/add-to-array-form-of-integer/
// tags - array
/**
 * @param {number[]} num
 * @param {number} k
 * @return {number[]}
 */
var addToArrayForm = function (num, k) {
  // Convert k to array-form.
  const arrK = []; // k will be reversed.
  while (k > 0) {
    arrK.push(k % 10);
    k = Math.floor(k / 10);
  }

  // Reverse num in-place.
  num.reverse();

  const result = [];
  let carry = 0;
  for (let i = 0; i < num.length || i < arrK.length; i++) {
    const digit1 = i < num.length ? num[i] : 0;
    const digit2 = i < arrK.length ? arrK[i] : 0;
    const sum = digit1 + digit2 + carry;
    result.push(sum % 10);
    carry = Math.floor(sum / 10);
  }

  if (carry > 0) result.push(carry);
  return result.reverse();
};
