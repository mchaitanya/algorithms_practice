// https://leetcode.com/problems/the-employee-that-worked-on-the-longest-task/
// tags - array
/**
 * @param {number} n
 * @param {number[][]} logs
 * @return {number}
 */
var hardestWorker = function (n, logs) {
  let startTime = 0;
  let maxDuration = 0,
    resultId = 0;
  for (const [id, leaveTime] of logs) {
    const duration = leaveTime - startTime;
    if (duration > maxDuration || (duration === maxDuration && id < resultId)) {
      maxDuration = duration;
      resultId = id;
    }
    startTime = leaveTime;
  }
  return resultId;
};
