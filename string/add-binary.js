// https://leetcode.com/problems/add-binary/
// tags - string
/**
 * @param {string} a
 * @param {string} b
 * @return {string}
 */
var addBinary = function (a, b) {
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
};
