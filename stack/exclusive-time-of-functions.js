// https://leetcode.com/problems/exclusive-time-of-functions/
// tags - string, stack
/**
 * @param {number} n
 * @param {string[]} logs
 * @return {number[]}
 */
var exclusiveTime = function (n, logs) {
  const START = "start",
    END = "end";

  logs = logs.map((s) => new Log(s));
  const stack = [];
  const times = new Array(n).fill(0);
  for (const { fid, action, ts } of logs) {
    if (action === START) {
      if (stack.length > 0) {
        // Add the time the top element spent at the top.
        const [topId, topTs] = stack[stack.length - 1];
        times[topId] += ts - topTs;
      }
      stack.push([fid, ts]);
    } else {
      const [popId, popTs] = stack.pop();
      times[popId] += ts - popTs + 1;
      if (stack.length > 0) {
        // Update the time for the top element.
        const top = stack[stack.length - 1];
        top[1] = ts + 1;
      }
    }
  }
  return times;
};

class Log {
  constructor(str) {
    const [fid, action, ts] = str.split(":");
    this.fid = Number(fid);
    this.action = action;
    this.ts = Number(ts);
  }
}
