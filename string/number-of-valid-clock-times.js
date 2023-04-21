// https://leetcode.com/problems/number-of-valid-clock-times/
// tags - string
/**
 * @param {string} time
 * @return {number}
 */
var countTime = function (time) {
  let result = 1;
  if (time[0] === "?" && time[1] === "?") {
    result *= 24;
  } else {
    // If one of the two is a '?', we know the other one can't be.
    if (time[0] === "?") result *= Number(time[1]) < 4 ? 3 : 2;
    if (time[1] === "?") result *= time[0] === "2" ? 4 : 10;
  }

  if (time[3] === "?") result *= 6;
  if (time[4] === "?") result *= 10;

  return result;
};
