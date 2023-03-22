// https://leetcode.com/problems/crawler-log-folder/
// tags - stack
/**
 * @param {string[]} logs
 * @return {number}
 */
var minOperations = function (logs) {
  const stack = [];
  for (const log of logs) {
    if (log === "../") {
      stack.pop();
    } else if (log !== "./") {
      stack.push(log);
    }
  }
  return stack.length;
};
