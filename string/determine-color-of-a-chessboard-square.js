// https://leetcode.com/problems/determine-color-of-a-chessboard-square/
// tags - string
/**
 * @param {string} coordinates
 * @return {boolean}
 */
var squareIsWhite = function (coordinates) {
  const row = Number(coordinates[1]);
  const col = coordinates.charCodeAt(0) - "a".charCodeAt(0) + 1;
  return (row + col) % 2 === 1;
};
