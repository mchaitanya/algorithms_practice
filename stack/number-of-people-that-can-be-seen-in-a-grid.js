// https://leetcode.com/problems/number-of-people-that-can-be-seen-in-a-grid/
// tags - stack
/**
 * @param {number[][]} heights
 * @return {number[][]}
 */
var seePeople = function (heights) {
  const m = heights.length;
  const n = heights[0].length;

  const result = new Array(m);
  for (let r = 0; r < m; r++) {
    result[r] = new Array(n).fill(0);
  }

  // Scan the rows.
  for (let r = 0; r < m; r++) {
    const stack = [];
    for (let c = 0; c < n; c++) {
      let popped;
      while (stack.length > 0) {
        const top = stack[stack.length - 1];
        if (heights[r][top] > heights[r][c]) {
          if (!popped || heights[r][c] > heights[r][popped]) {
            result[r][top]++;
          }
          break;
        }
        stack.pop();
        popped = top;
        result[r][top]++;
      }
      stack.push(c);
    }
  }

  // Scan the columns.
  for (let c = 0; c < n; c++) {
    const stack = [];
    for (let r = 0; r < m; r++) {
      let popped;
      while (stack.length > 0) {
        const top = stack[stack.length - 1];
        if (heights[top][c] > heights[r][c]) {
          if (!popped || heights[r][c] > heights[popped][c]) {
            result[top][c]++;
          }
          break;
        }
        stack.pop();
        popped = top;
        result[top][c]++;
      }
      stack.push(r);
    }
  }

  return result;
};
