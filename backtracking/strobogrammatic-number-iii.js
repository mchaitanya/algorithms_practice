// https://leetcode.com/problems/strobogrammatic-number-iii/
// tags - string, backtracking
/**
 * @param {string} low
 * @param {string} high
 * @return {number}
 */
var strobogrammaticInRange = function (low, high) {
  const mapping = new Map([
    ["0", "0"],
    ["1", "1"],
    ["6", "9"],
    ["8", "8"],
    ["9", "6"],
  ]);

  function isGreater(n1, n2) {
    if (n1.length != n2.length) {
      return n1.length > n2.length;
    } else {
      return n1.localeCompare(n2) > 0;
    }
  }

  let count = 0;
  const middle = ["", "0", "1", "8"];
  function generate(digits) {
    let left = "",
      right = "";
    for (let i = 0; i < digits.length; i++) {
      left += digits[i];
      right += mapping.get(digits[digits.length - i - 1]);
    }

    let numLessHigh = 0;
    for (const mid of middle) {
      const number = left + mid + right;
      if (number === "" || isGreater(number, high)) continue;
      if (number === low || isGreater(number, low)) count++;
      numLessHigh++;
    }

    if (numLessHigh === 0) return;

    for (const digit of mapping.keys()) {
      if (digits.length === 0 && digit === "0") continue;
      digits.push(digit);
      generate(digits);
      digits.pop();
    }
  }

  generate([]);

  return count;
};
