// https://leetcode.com/problems/add-strings/
// tags - string, math
/**
 * @param {string} num1
 * @param {string} num2
 * @return {string}
 */
var addStrings = function (num1, num2) {
  // perform addition digit by digit from right
  const len = Math.max(num1.length, num2.length);
  num1 = num1.padStart(len, "0");
  num2 = num2.padStart(len, "0");

  let result = "";
  let carry = 0;
  for (let i = len - 1; i >= 0; i--) {
    let dig1 = Number(num1[i]);
    let dig2 = Number(num2[i]);
    let sum = dig1 + dig2 + carry;
    if (i > 0) {
      result = (sum % 10) + result;
    } else {
      result = sum + result;
    }
    carry = Math.floor(sum / 10);
  }

  return result;
};
