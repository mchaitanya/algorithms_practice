// https://leetcode.com/problems/k-th-symbol-in-grammar/
// tags - string, recursion
/**
 * @param {number} n
 * @param {number} k
 * @return {number}
 */
var kthGrammar = function (n, k) {
  // Base case
  if (n === 1) return 0;
  // Recurrence relation
  // S(n, k) = S(n-1, k) if k <= 2^(n-2)
  // else flip S(n-1, k - 2^(n-2))
  const mid = 2 ** (n - 2);
  if (k <= mid) {
    // k is in the first half of symbols on this row.
    return kthGrammar(n - 1, k);
  } else {
    // k is in the second half.
    return 1 - kthGrammar(n - 1, k - mid);
  }
};
