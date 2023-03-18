// https://leetcode.com/problems/two-city-scheduling/
// tags - greedy
/**
 * @param {number[][]} costs
 * @return {number}
 */
var twoCitySchedCost = function (costs) {
  // GREEDY
  // costs[i][0] - costs[i][1] equals the loss to the company on sending person i to city A.
  // Sort in increasing order by the loss incurred for each person.
  costs.sort((c1, c2) => {
    const diff1 = c1[0] - c1[1];
    const diff2 = c2[0] - c2[1];
    return diff1 - diff2;
  });

  let minCost = 0;
  // Send the first n people to A & the rest to B.
  for (let i = 0; i < costs.length; i++) {
    minCost += i < costs.length / 2 ? costs[i][0] : costs[i][1];
  }
  return minCost;

  // DYNAMIC PROGRAMMING
  // const n = costs.length;
  // const memo = new Array(n);
  // for (let i = 0; i < n; i++) {
  //     memo[i] = new Array(n/2).fill(null);
  // }

  // // State
  // // i - Current person
  // // numFlyA - Number of people that must be flown to A
  // function dp(i, numFlyA) {
  //     if (i === n) return 0;
  //     if (memo[i][numFlyA] == null) {
  //         if (numFlyA === 0) {
  //             memo[i][numFlyA] = costs[i][1] + dp(i+1, 0);
  //         } else if (n-i === numFlyA) {
  //             memo[i][numFlyA] = costs[i][0] + dp(i+1, numFlyA-1);
  //         } else {
  //             memo[i][numFlyA] = Math.min(costs[i][0] + dp(i+1, numFlyA-1), costs[i][1] + dp(i+1, numFlyA));
  //         }
  //     }
  //     return memo[i][numFlyA];
  // }

  // return dp(0, n/2);
};
