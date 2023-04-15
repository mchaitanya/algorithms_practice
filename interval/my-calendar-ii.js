// https://leetcode.com/problems/my-calendar-ii/
// tags - array, interval

var MyCalendarTwo = function () {
  this.events = [];
  this.overlaps = []; // Contain intervals that map to 2 bookings.
};

/**
 * @param {number} start
 * @param {number} end
 * @return {boolean}
 */
MyCalendarTwo.prototype.book = function (start, end) {
  // Approach 1 from LC
  for (const [startO, endO] of this.overlaps) {
    if (areOverlapping(start, end, startO, endO)) return false;
  }

  for (const [startE, endE] of this.events) {
    if (areOverlapping(start, end, startE, endE)) {
      this.overlaps.push([Math.max(start, startE), Math.min(end, endE)]);
    }
  }

  this.events.push([start, end]);
  return true;
};

function areOverlapping(s1, e1, s2, e2) {
  // if (e1 <= s2 || s1 >= e2) return false;
  // return true;
  return e1 > s2 && s1 < e2;
}

/**
 * Your MyCalendarTwo object will be instantiated and called as such:
 * var obj = new MyCalendarTwo()
 * var param_1 = obj.book(start,end)
 */
