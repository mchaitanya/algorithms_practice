// https://leetcode.com/problems/multiply-strings/
// tags - string
/**
 * @param {string} num1
 * @param {string} num2
 * @return {string}
 */
var multiply = function (num1, num2) {
  if (num1 === "0" || num2 === "0") return "0";
  num1 = Array.from(num1).map(Number);
  num2 = Array.from(num2).map(Number);

  let maxLen = 0;
  const products = [];
  for (let i = num2.length - 1; i >= 0; i--) {
    let carry = 0;
    const product = [];
    for (let j = 0; j < num2.length - i - 1; j++) product.push(0);
    for (let j = num1.length - 1; j >= 0; j--) {
      const temp = num2[i] * num1[j] + carry;
      product.push(temp % 10);
      carry = Math.floor(temp / 10);
    }
    if (carry > 0) product.push(carry);
    products.push(product); // The intermediate products are reversed.
    maxLen = Math.max(maxLen, product.length);
  }

  let result = "";
  let carry = 0;
  for (let i = 0; i < maxLen; i++) {
    let sum = carry;
    for (const product of products) {
      const digit = i < product.length ? product[i] : 0;
      sum += digit;
    }
    result = (sum % 10) + result;
    carry = Math.floor(sum / 10);
  }
  if (carry > 0) result = carry + result;
  return result;
};
