// https://leetcode.com/problems/generate-parentheses/
// tags - string
/**
 * @param {number} n
 * @return {string[]}
 */
var generateParenthesis = function (n) {
  // Solve with backtracking.
  const combinations = [];
  const combination = [];
  function generate(numLeft, numRight) {
    if (numLeft === n && numRight === n) {
      combinations.push(combination.join(""));
      return;
    }
    // Try adding a '('.
    if (numLeft < n && numLeft + 1 > numRight) {
      combination.push("(");
      generate(numLeft + 1, numRight);
      combination.pop();
    }
    // Try adding a ')'.
    if (numRight < n && numLeft >= numRight + 1) {
      combination.push(")");
      generate(numLeft, numRight + 1);
      combination.pop();
    }
  }
  generate(0, 0);
  return combinations;

  // const combinations = new Array(n+1);
  // combinations[0] = [];
  // combinations[1] = ['()'];
  // for (let i = 2; i <= n; i++) {
  //     const set = new Set();
  //     for (const comb of combinations[i-1]) {
  //         set.add('(' + comb + ')');
  //     }

  //     for (let j = 1; j < i; j++) {
  //         for (const left of combinations[j]) {
  //             for (const right of combinations[i-j]) {
  //                 set.add(left + right);
  //             }
  //         }
  //     }
  //     combinations[i] = Array.from(set);
  // }
  // return combinations[n];
};
