// https://leetcode.com/problems/count-vowels-permutation/
// tags - dynamic-programming
/**
 * @param {number} n
 * @return {number}
 */
var countVowelPermutation = function (n) {
  // Encode the given rules in the map.
  // Mapping ''=0, a=1, e=2, i=3, o=4, u=5
  const nextChars = new Map([
    [0, [1, 2, 3, 4, 5]],
    [1, [2]],
    [2, [1, 3]],
    [3, [1, 2, 4, 5]],
    [4, [3, 5]],
    [5, [1]],
  ]);

  const MOD_VAL = 10 ** 9 + 7;
  const memo = new Array(n);
  for (let i = 0; i < n; i++) {
    memo[i] = new Array(6).fill(null);
  }

  // State
  // i - Current index; We're trying to choose the char at this index.
  // prevChar - Character at the previous index.
  // Return the #strings we can form starting at index i, given prevChar.
  function choose(i, prevChar) {
    if (i === n) return 1; // We've created a combination of n chars. Therefore return 1.
    if (memo[i][prevChar] != null) return memo[i][prevChar];

    let numStrings = 0;
    for (const c of nextChars.get(prevChar)) {
      numStrings = (numStrings + choose(i + 1, c)) % MOD_VAL;
    }

    memo[i][prevChar] = numStrings;
    return numStrings;
  }

  // prevChar empty for the first index.
  return choose(0, 0);
};
