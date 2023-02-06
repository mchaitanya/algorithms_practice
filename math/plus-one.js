// https://leetcode.com/problems/plus-one/
// tags - math
/**
 * @param {number[]} digits
 * @return {number[]}
 */
var plusOne = function (digits) {
  const result = [];
  for (let i = digits.length - 1, carry = 1; i >= 0; i--) {
    if (carry === 0) {
      result.push(digits[i]);
    } else if (digits[i] === 9) {
      result.push(0);
      if (i === 0) result.push(1);
    } else {
      result.push(digits[i] + 1);
      carry = 0;
    }
  }
  return result.reverse();

  // // we're only adding 1
  // // the only time the result can contain more digits is if the input is 99...9
  // if (digits.every(d => d === 9)) {
  //     return [1, ...Array(digits.length).fill(0)];
  // }

  // let carry = 1;
  // const result = [...digits];
  // for (let i = digits.length-1; i >= 0; i--) {
  //     result[i] = ((digits[i] + carry) % 10);
  //     carry = (digits[i] + carry >= 10 ? 1 : 0);
  //     if (carry === 0) {
  //         break;
  //     }
  // }
  // return result;
};
