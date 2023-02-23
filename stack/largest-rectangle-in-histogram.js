// https://leetcode.com/problems/largest-rectangle-in-histogram/
// tags - stack, array
/**
 * @param {number[]} heights
 * @return {number}
 */
var largestRectangleArea = function (heights) {
  // Solve with a monotonic stack.
  let maxArea = 0;
  const stack = [];
  for (const height of heights) {
    let numPopped = 0;
    while (stack.length > 0) {
      const top = stack[stack.length - 1];
      // Pop from the stack till the top height > current height.
      if (top <= height) break;
      maxArea = Math.max(maxArea, top * ++numPopped);
      stack.pop();
    }
    // No point pushing zeroes into the stack.
    if (height > 0) {
      // Push the current height once & also for each height popped earlier.
      while (numPopped + 1 > 0) {
        stack.push(height);
        numPopped--;
      }
    }
  }

  let numPopped = 0;
  while (stack.length > 0) {
    maxArea = Math.max(maxArea, stack.pop() * ++numPopped);
  }

  return maxArea;
};
