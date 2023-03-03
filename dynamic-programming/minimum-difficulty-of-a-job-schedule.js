// https://leetcode.com/problems/minimum-difficulty-of-a-job-schedule/
// tags - dynamic-programming
/**
 * @param {number[]} jobDifficulty
 * @param {number} d
 * @return {number}
 */
var minDifficulty = function (jobDifficulty, d) {
  const n = jobDifficulty.length;
  if (n < d) return -1; // Fewer jobs than there are days

  // Precompute the hardest job from the right.
  const hardestLeft = new Array(n);
  for (let i = n - 1, hardest = 0; i >= 0; i--) {
    hardest = Math.max(hardest, jobDifficulty[i]);
    hardestLeft[i] = hardest;
  }

  const memo = new Array(n);
  for (let i = 0; i < n; i++) {
    memo[i] = new Array(d).fill(null);
  }

  // State:
  // i - Next job available to pick up
  // day - Current day
  // Return the minimum difficulty of scheduling given i & day.
  function dp(i, day) {
    // Constraint on how many jobs we can pick for the next day
    // Jobs remaining >= Days left
    if (day === d) return hardestLeft[i];
    if (memo[i][day] != null) return memo[i][day];

    let result = Infinity;
    const daysLeft = d - day; // daysLeft >= 1 here
    for (let job = i, hardest = 0; job < n - daysLeft; job++) {
      hardest = Math.max(hardest, jobDifficulty[job]);
      result = Math.min(result, hardest + dp(job + 1, day + 1));
    }
    memo[i][day] = result;
    return result;
  }

  return dp(0, 1);
};
