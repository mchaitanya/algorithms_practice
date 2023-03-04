// https://leetcode.com/problems/paint-fence/
// tags - dynamic-programming
/**
 * @param {number} n
 * @param {number} k
 * @return {number}
 */
var numWays = function (n, k) {
  // FROM LC - SIMPLER RECURRENCE
  const totalWays = new Array(Math.max(2, n));
  totalWays[0] = k; // k ways to paint one post
  totalWays[1] = k * k; // Can choose any colour for either post
  for (let i = 2; i < n; i++) {
    // Case 1 - Paint post i different from i-1 => (k-1) * totalWays[i-1]
    // Case 2 - Paint it the same as i-1
    //  => Number of ways i-1 can be painted different from i-2 = (k-1) * totalWays[i-2]
    totalWays[i] = (k - 1) * (totalWays[i - 1] + totalWays[i - 2]);
  }
  return totalWays[n - 1];

  // MY SOLUTION - 2-D DP
  // if (n <= 2) return k ** n;

  // const memo = new Array(n);
  // for (let i = 0; i < n; i++) {
  //     memo[i] = [null, null]; // 2 elements for prevTwoSame = 0/1
  // }

  // // State
  // // i - Current post
  // // prevTwoSame - 1 if we painted the previous 2 posts the same colour, 0 otherwise
  // function dp(i, prevTwoSame) {
  //     // Base case - we've painted all the posts.
  //     if (i == n) return 1;

  //     if (memo[i][prevTwoSame] != null) return memo[i][prevTwoSame];

  //     // We can always choose a different colour from the previous post.
  //     let result = (k-1) * dp(i+1, 0);
  //     // We can choose the same colour only if the previous 2 posts weren't also painted the same colour.
  //     if (prevTwoSame === 0) {
  //         result += dp(i+1, 1);
  //     }

  //     memo[i][prevTwoSame] = result;
  //     return result;
  // }

  // // n >= 3 here
  // // Case 1 - We paint the first 2 posts with different colours
  // // Case 2 - We paint them the same
  // return k*(k-1)*dp(2, 0) + k*dp(2, 1);
};
