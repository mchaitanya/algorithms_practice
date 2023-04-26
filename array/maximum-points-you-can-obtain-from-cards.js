// https://leetcode.com/problems/maximum-points-you-can-obtain-from-cards/
// tags - array
/**
 * @param {number[]} cardPoints
 * @param {number} k
 * @return {number}
 */
var maxScore = function (cardPoints, k) {
  // From LC - Find a subarray of size n-k with the smallest sum.
  let total = 0;
  for (const points of cardPoints) {
    total += points;
  }

  if (k === cardPoints.length) return total;

  let minSum = total;
  const size = cardPoints.length - k;
  for (let i = 0, sum = 0; i < cardPoints.length; i++) {
    sum += cardPoints[i];
    if (i >= size - 1) {
      minSum = Math.min(minSum, sum);
      sum -= cardPoints[i - size + 1];
    }
  }

  return total - minSum;

  // const sumFromLeft = new Array(k+1).fill(0); // Given k <= cardPoints.length
  // // sumFromLeft[i] = Sum of points for cards up to index i-1
  // for (let i = 0; i < k; i++) {
  //     sumFromLeft[i+1] = sumFromLeft[i] + cardPoints[i];
  // }

  // const sumFromRight = new Array(k+1).fill(0);
  // for (let i = cardPoints.length-1, j = k-1; i >= cardPoints.length-k; i--, j--) {
  //     sumFromRight[j] = sumFromRight[j+1] + cardPoints[i];
  // }

  // let max = 0;
  // for (let i = 0; i <= k; i++) {
  //     max = Math.max(max, sumFromLeft[i] + sumFromRight[i]);
  // }
  // return max;

  // const n = cardPoints.length;
  // // const memo = new Map();
  // // State
  // // - left - Number of cards we've taken from the left
  // // - right - Number of cards from the right
  // // Return the maximum score
  // function dp(left, right) {
  //     if (left + right === k) return 0;
  //     return Math.max(
  //         cardPoints[left] + dp(left+1, right),
  //         cardPoints[n - right - 1] + dp(left, right+1)
  //     );
  //     // // const key = left + '|' + right;
  //     // if (!memo.has(key)) {
  //     //     // We can either take a card from the left or right.
  //     //     memo.set(key, Math.max(
  //     //         cardPoints[left] + dp(left+1, right),
  //     //         cardPoints[n - right - 1] + dp(left, right+1)
  //     //     ));
  //     // }
  //     // return memo.get(key);
  // }
  // return dp(0, 0);
};
