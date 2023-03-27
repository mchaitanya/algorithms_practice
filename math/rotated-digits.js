// https://leetcode.com/problems/rotated-digits/
// tags - number
/**
 * @param {number} n
 * @return {number}
 */
var rotatedDigits = function (n) {
  // const mapping = new Map([
  //   ["0", "0"],
  //   ["1", "1"],
  //   ["2", "5"],
  //   ["5", "2"],
  //   ["6", "9"],
  //   ["8", "8"],
  //   ["9", "6"],
  // ]);

  const invalidAfterRotation = new Set([3, 4, 7]);
  const diffAfterRotation = new Set([2, 5, 6, 9]);

  function isGood(n) {
    // const s = String(n);
    // let rotated = "";
    // for (const c of s) {
    //   if (!mapping.has(c)) return false;
    //   rotated += mapping.get(c);
    // }
    // return s !== rotated;

    // Extract the digits.
    let maybeGood = false;
    while (n > 0) {
      const digit = n % 10;
      if (invalidAfterRotation.has(digit)) {
        return false;
      } else if (diffAfterRotation.has(digit)) {
        maybeGood = true;
      }
      n = Math.floor(n / 10);
    }
    return maybeGood;
  }

  let numGood = 0;
  for (let i = 1; i <= n; i++) {
    if (isGood(i)) numGood++;
  }
  return numGood;
};
