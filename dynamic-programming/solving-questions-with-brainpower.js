// https://leetcode.com/problems/solving-questions-with-brainpower/
// tags - dynamic-programming
/**
 * @param {number[][]} questions
 * @return {number}
 */
var mostPoints = function (questions) {
  // State
  // i - Current question
  // Maximize the points you can earn.
  const memo = new Array(questions.length).fill(null);
  function dp(i) {
    if (i >= questions.length) return 0;
    if (memo[i] == null) {
      const [points, brainpower] = questions[i];
      memo[i] = Math.max(
        dp(i + 1), // Skip the question.
        points + dp(i + brainpower + 1) // Solve it & skip the next #brainpower questions.
      );
    }
    return memo[i];
  }
  return dp(0);
};
