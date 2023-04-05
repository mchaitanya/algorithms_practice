// https://leetcode.com/problems/confusing-number-ii/
// tags - backtracking
/**
 * @param {number} n
 * @return {number}
 */
var confusingNumberII = function (n) {
  const mapping = new Map([
    [0, 0],
    [1, 1],
    [6, 9],
    [8, 8],
    [9, 6],
  ]);

  function createNumber(digits) {
    let result = 0;
    for (const digit of digits) {
      result = result * 10 + digit;
    }
    return result;
  }

  // Generate numbers that only contain valid digits.
  let numConfusing = 0;
  const digits = [];
  function generate(i) {
    const number = createNumber(digits);
    if (number > n) return;
    if (number > 0) {
      const transformed = digits.map((d) => mapping.get(d)).reverse();
      if (createNumber(transformed) !== number) {
        numConfusing++;
      }
    }

    for (const d of mapping.keys()) {
      if (i === 0 && d === 0) continue;
      digits.push(d);
      generate(i + 1);
      digits.pop();
    }
  }

  generate(0);

  return numConfusing;

  //     function isConfusing(num) {
  //         let result = 0;
  //         let temp = num;
  //         while (temp > 0) {
  //             const digit = temp%10;
  //             if (!mapping.has(digit)) return false;
  //             result = result*10 + mapping.get(digit);
  //             temp = Math.floor(temp/10);
  //         }
  //         return result !== num;
  //     }

  //     let count = 0;
  //     for (let i = 1; i <= n; i++) {
  //         if (isConfusing(i)) count++;
  //     }
  //     return count;
};
