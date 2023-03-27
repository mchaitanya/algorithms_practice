// https://leetcode.com/problems/my-calendar-i/
// tags - array, interval
var MyCalendar = function () {
  this.events = [];
};

/**
 * @param {number} start
 * @param {number} end
 * @return {boolean}
 */
MyCalendar.prototype.book = function (start, end) {
  // If there's any overlap with prior events, return false.
  for (const [startE, endE] of this.events) {
    if (start < endE && end > startE) return false;
  }
  this.events.push([start, end]);
  return true;
};

/**
 * Your MyCalendar object will be instantiated and called as such:
 * var obj = new MyCalendar()
 * var param_1 = obj.book(start,end)
 */
