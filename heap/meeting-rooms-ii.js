// https://leetcode.com/problems/meeting-rooms-ii/
// tags - heap
/**
 * @param {number[][]} intervals
 * @return {number}
 */
var minMeetingRooms = function (intervals) {
  // Sort the meetings by start time.
  intervals.sort((i1, i2) => i1[0] - i2[0]);

  // Min-heap that contains rooms with the times when they'll become free.
  const heap = new Heap((p, c) => p <= c);
  for (const [start, end] of intervals) {
    // Remove a room if its meeting ended before the current one. Add it back with the new end time.
    // If no room has become free, allocate a new one.
    if (heap.vals.length > 0 && heap.vals[0] <= start) {
      heap.remove();
    }
    heap.add(end);
  }
  return heap.vals.length;
};

class Heap {
  constructor(cmpFn) {
    this.vals = [];
    this.cmp = cmpFn;
  }

  add(val) {
    this.vals.push(val);
    this.bubble(this.vals.length - 1, "up");
  }

  remove() {
    const top = this.vals.shift();
    if (this.vals.length > 1) {
      this.vals.unshift(this.vals.pop());
      this.bubble(0, "down");
    }
    return top;
  }

  bubble(i, dir) {
    const pi = dir === "down" ? i : Math.floor((i - 1) / 2);
    if (pi < 0) return;
    const len = this.vals.length;
    const li = 2 * pi + 1,
      ri = 2 * pi + 2;
    if (li >= len) return;
    const pval = this.vals[pi],
      lval = this.vals[li],
      rval = this.vals[ri];
    if (!this.cmp(pval, lval) || (ri < len && !this.cmp(pval, rval))) {
      if (ri < len && this.cmp(rval, lval)) {
        this.swap(pi, ri, dir);
      } else {
        this.swap(pi, li, dir);
      }
    }
  }

  swap(pi, ci, dir) {
    [this.vals[pi], this.vals[ci]] = [this.vals[ci], this.vals[pi]];
    const i = dir === "up" ? pi : ci;
    this.bubble(i, dir);
  }
}
