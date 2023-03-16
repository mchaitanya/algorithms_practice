// https://leetcode.com/problems/image-smoother/
// tags - array
/**
 * @param {number[][]} img
 * @return {number[][]}
 */
var imageSmoother = function (img) {
  // Given both m, n >= 1.
  const m = img.length;
  const n = img[0].length;

  const smoothed = new Array(m);
  for (let r = 0; r < m; r++) {
    smoothed[r] = new Array(n);
    for (let c = 0; c < n; c++) {
      let pixelSum = 0,
        pixelCount = 0;
      for (const dr of [-1, 0, 1]) {
        for (const dc of [-1, 0, 1]) {
          const rn = r + dr,
            cn = c + dc;
          if (rn >= 0 && rn < m && cn >= 0 && cn < n) {
            pixelSum += img[rn][cn];
            pixelCount++;
          }
        }
      }
      smoothed[r][c] = Math.floor(pixelSum / pixelCount);
    }
  }
  return smoothed;
};
