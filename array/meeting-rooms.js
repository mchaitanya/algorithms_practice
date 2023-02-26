// https://leetcode.com/problems/meeting-rooms/
// tags - array
/**
 * @param {number[][]} intervals
 * @return {boolean}
 */
var canAttendMeetings = function (intervals) {
  // Sort the intervals by start time.
  intervals.sort((i1, i2) => i1[0] - i2[0]);
  // If the current meeting doesn't end before the next one starts, return false.
  for (let k = 0; k < intervals.length - 1; k++) {
    if (intervals[k][1] > intervals[k + 1][0]) return false;
  }
  return true;
};
