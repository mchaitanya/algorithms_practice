// https://leetcode.com/problems/hamming-distance/
// tags - binary
/**
 * @param {number} x
 * @param {number} y
 * @return {number}
 */
var hammingDistance = function (x, y) {
  // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Expressions_and_Operators#bitwise_operators
  // XOR the numbers & count the 1 bits in the result;
  let xor = x ^ y;
  let count = 0;
  while (xor > 0) {
    if (xor & 1) count++;
    xor = xor >>> 1;
  }
  return count;

  // const xBinary = x.toString(2);
  // const yBinary = y.toString(2);
  // let result = 0;
  // for (let i = xBinary.length-1, j = yBinary.length-1; i >= 0 || j >= 0; i--, j--) {
  //     const xBit = i >= 0 ? xBinary[i] : '0';
  //     const yBit = j >= 0 ? yBinary[j] : '0';
  //     if (xBit !== yBit) result++;
  // }
  // return result;
};
