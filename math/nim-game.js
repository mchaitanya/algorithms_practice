// https://leetcode.com/problems/nim-game/
// tags - math
/**
 * @param {number} n
 * @return {boolean}
 */
var canWinNim = function (n) {
  return n % 4 !== 0;
};

/*
1 - true
2 - true
3 - true
4 - false
5 - true
6 - true
7 - true
8 - false
... every 4th value should be false.
*/
