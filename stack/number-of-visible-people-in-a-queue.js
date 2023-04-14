// https://leetcode.com/problems/number-of-visible-people-in-a-queue/
// tags - stack
/**
 * @param {number[]} heights
 * @return {number[]}
 */
var canSeePersonsCount = function (heights) {
  // Solve with a monotonic stack.
  const stack = [];
  const result = new Array(heights.length).fill(0);
  for (let i = 0; i < heights.length; i++) {
    while (stack.length > 0) {
      const top = stack[stack.length - 1];
      result[top]++;
      if (heights[top] > heights[i]) break;
      stack.pop();
    }
    stack.push(i);
  }
  return result;
};
