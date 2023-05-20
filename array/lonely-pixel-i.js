// https://leetcode.com/problems/lonely-pixel-i/
// tags - array
/**
 * @param {character[][]} picture
 * @return {number}
 */
var findLonelyPixel = function (picture) {
  const m = picture.length;
  const n = picture[0].length;

  const rowCount = new Array(m).fill(0);
  const colCount = new Array(n).fill(0);
  for (let r = 0; r < m; r++) {
    for (let c = 0; c < n; c++) {
      if (picture[r][c] === "B") {
        rowCount[r]++;
        colCount[c]++;
      }
    }
  }

  let numLonely = 0;
  for (let r = 0; r < m; r++) {
    for (let c = 0; c < n; c++) {
      if (picture[r][c] === "B" && rowCount[r] === 1 && colCount[c] === 1) {
        numLonely++;
      }
    }
  }
  return numLonely;
};
