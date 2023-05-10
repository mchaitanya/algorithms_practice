// https://leetcode.com/problems/available-captures-for-rook/
// tags - array
/**
 * @param {character[][]} board
 * @return {number}
 */
var numRookCaptures = function (board) {
  const WROOK = "R",
    WBISHOP = "B",
    BPAWN = "p",
    EMPTY = ".";
  // Try all 4 directions from the rook.
  let rookr, rookc;
  rookScan: for (let r = 0; r < 8; r++) {
    for (let c = 0; c < 8; c++) {
      if (board[r][c] === WROOK) {
        rookr = r;
        rookc = c;
        break rookScan;
      }
    }
  }

  let numCaptures = 0;
  for (const [dr, dc] of [
    [-1, 0],
    [0, 1],
    [1, 0],
    [0, -1],
  ]) {
    let rn = rookr + dr,
      cn = rookc + dc;
    while (rn >= 0 && rn < 8 && cn >= 0 && cn < 8) {
      if (board[rn][cn] !== EMPTY) {
        if (board[rn][cn] === BPAWN) numCaptures++;
        break;
      }
      rn += dr;
      cn += dc;
    }
  }
  return numCaptures;
};
