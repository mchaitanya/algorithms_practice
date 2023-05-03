// https://leetcode.com/problems/zigzag-iterator/
// tags - array
/**
 * @constructor
 * @param {Integer[]} v1
 * @param {Integer[]} v1
 */
var ZigzagIterator = function ZigzagIterator(v1, v2) {
  this.v1 = v1;
  this.i1 = 0;
  this.v2 = v2;
  this.i2 = 0;
  this.curr = v1.length > 0 ? v1 : v2;
};

/**
 * @this ZigzagIterator
 * @returns {boolean}
 */
ZigzagIterator.prototype.hasNext = function hasNext() {
  return this.i1 < this.v1.length || this.i2 < this.v2.length;
};

/**
 * @this ZigzagIterator
 * @returns {integer}
 */
ZigzagIterator.prototype.next = function next() {
  if (this.curr === this.v1) {
    if (this.i2 < this.v2.length) this.curr = this.v2;
    return this.v1[this.i1++];
  } else if (this.curr === this.v2) {
    if (this.i1 < this.v1.length) this.curr = this.v1;
    return this.v2[this.i2++];
  }
};

/**
 * Your ZigzagIterator will be called like this:
 * var i = new ZigzagIterator(v1, v2), a = [];
 * while (i.hasNext()) a.push(i.next());
 */
