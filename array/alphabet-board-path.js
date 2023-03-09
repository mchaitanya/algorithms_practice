// https://leetcode.com/problems/alphabet-board-path/
// tags - array
/**
 * @param {string} target
 * @return {string}
 */
var alphabetBoardPath = function (target) {
  // r - Current row
  // c - Current column
  // i - Current index into target - we want to reach target[i]
  const codeA = "a".charCodeAt(0);
  function moves(r, c, i) {
    if (i === target.length) return "";

    const offset = target.charCodeAt(i) - codeA;
    const rn = Math.floor(offset / 5);
    const cn = offset % 5;

    const vertical = rn > r ? "D".repeat(rn - r) : "U".repeat(r - rn);
    const horizontal = cn > c ? "R".repeat(cn - c) : "L".repeat(c - cn);
    // If we're trying to reach 'z', we should move horizontally first to stay inside the board.
    if (rn === 5) {
      return horizontal + vertical + "!" + moves(rn, cn, i + 1);
    } else {
      return vertical + horizontal + "!" + moves(rn, cn, i + 1);
    }
  }

  return moves(0, 0, 0);
};
