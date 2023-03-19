// https://leetcode.com/problems/diet-plan-performance/
// tags - array
/**
 * @param {number[]} calories
 * @param {number} k
 * @param {number} lower
 * @param {number} upper
 * @return {number}
 */
var dietPlanPerformance = function (calories, k, lower, upper) {
  let numPoints = 0;
  const n = calories.length;
  for (let i = 0, calorieSum = 0; i < n; i++) {
    calorieSum += calories[i];
    if (i >= k - 1) {
      if (calorieSum < lower) {
        numPoints--;
      } else if (calorieSum > upper) {
        numPoints++;
      }
      calorieSum -= calories[i - k + 1];
    }
  }
  return numPoints;
};
