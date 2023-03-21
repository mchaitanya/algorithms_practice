// https://leetcode.com/problems/read-n-characters-given-read4/
// tags - string
/**
 * Definition for read4()
 *
 * @param {character[]} buf4 Destination buffer
 * @return {number} The number of actual characters read
 * read4 = function(buf4) {
 *     ...
 * };
 */

/**
 * @param {function} read4()
 * @return {function}
 */
var solution = function (read4) {
  /**
   * @param {character[]} buf Destination buffer
   * @param {number} n Number of characters to read
   * @return {number} The number of actual characters read
   */
  return function (buf, n) {
    let i = 0; // Index into buf.
    const buf4 = new Array(4);
    let numRead = read4(buf4);
    while (i < n && numRead > 0) {
      let j = 0;
      while (i < n && j < numRead) {
        buf[i] = buf4[j];
        j++;
        i++;
      }
      numRead = read4(buf4);
    }
    return i;
  };
};
