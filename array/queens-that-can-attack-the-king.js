// https://leetcode.com/problems/queens-that-can-attack-the-king/
// tags - array
/**
 * @param {number[][]} queens
 * @param {number[]} king
 * @return {number[][]}
 */
var queensAttacktheKing = function (queens, king) {
  // Convert the queens' locations from (r, c) => r*8 + c
  queens = new Set(queens.map(([r, c]) => r * 8 + c));

  const result = [];
  const [r, c] = king;
  // Scan in all 8 directions from the king's location.
  const offsets = [
    [-1, -1],
    [-1, 0],
    [-1, 1],
    [0, -1],
    [0, 1],
    [1, -1],
    [1, 0],
    [1, 1],
  ];
  for (const [dr, dc] of offsets) {
    let rn = r + dr,
      cn = c + dc;
    while (rn >= 0 && rn < 8 && cn >= 0 && cn < 8) {
      if (queens.has(rn * 8 + cn)) {
        result.push([rn, cn]);
        break;
      }
      rn += dr;
      cn += dc;
    }
  }
  return result;
};
