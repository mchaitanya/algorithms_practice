// https://leetcode.com/problems/add-strings/
// tags - string, math
/**
 * @param {string} num1
 * @param {string} num2
 * @return {string}
 */
var addStrings = function (num1, num2) {
  const result = [];
  let carry = 0;
  for (let i = a.length - 1, j = b.length - 1; i >= 0 || j >= 0; i--, j--) {
    const bitA = i >= 0 && a[i] === "1" ? 1 : 0;
    const bitB = j >= 0 && b[j] === "1" ? 1 : 0;
    const sum = bitA + bitB + carry;
    if (sum === 3) {
      result.push(1);
      carry = 1;
    } else if (sum == 2) {
      result.push(0);
      carry = 1;
    } else {
      result.push(sum);
      carry = 0;
    }
  }
  if (carry === 1) result.push(1);
  return result.reverse().join("");

  // // perform addition digit by digit from right
  // const len = Math.max(num1.length, num2.length);
  // num1 = num1.padStart(len, '0');
  // num2 = num2.padStart(len, '0');

  // let result = '';
  // let carry = 0;
  // for (let i = len-1; i >= 0; i--) {
  //     let dig1 = Number(num1[i]);
  //     let dig2 = Number(num2[i]);
  //     let sum = dig1 + dig2 + carry;
  //     if (i > 0) {
  //         result = (sum%10) + result;
  //     } else {
  //         result = sum + result;
  //     }
  //     carry = Math.floor(sum/10);
  // }

  // return result;
};
