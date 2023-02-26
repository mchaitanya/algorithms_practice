// https://leetcode.com/problems/the-k-weakest-rows-in-a-matrix/
// tags - array
/**
 * @param {number[][]} mat
 * @param {number} k
 * @return {number[]}
 */
var kWeakestRows = function (mat, k) {
  // Given m, n >= 2
  const m = mat.length;
  const n = mat[0].length;
  const SOLDIER = 1,
    CIVILIAN = 0;

  const result = new Array(k);
  const soldiersSeen = new Array(m).fill(false);
  for (let c = 0, i = 0; c < n + 1; c++) {
    for (let r = 0; r < m; r++) {
      if (soldiersSeen[r]) continue;
      if (c === n || mat[r][c] === CIVILIAN) {
        result[i++] = r;
        soldiersSeen[r] = true;
        if (i === k) return result;
      }
    }
  }

  // const counts = new Array(n+1).fill(0).map(() => []);
  // for (let r = 0; r < m; r++) {
  //     let count = 0;
  //     for (let c = 0; c < n; c++) {
  //         if (mat[r][c] === 0) break;
  //         count++;
  //     }
  //     counts[count].push(r);
  // }

  // const result = new Array(k);
  // for (let i = 0, j = 0; i <= n; i++) {
  //     for (let r of counts[i]) {
  //         result[j++] = r;
  //         if (j === k) return result;
  //     }
  // }
  // // Shouldn't reach here since k <= m.

  // const counts = new Array(m);
  // for (let r = 0; r < m; r++) {
  //     let count = 0;
  //     for (let c = 0; c < n; c++) {
  //         if (mat[r][c] === 0) break;
  //         count++;
  //     }
  //     counts[r] = [r, count];
  // }

  // return counts.sort((arr1, arr2) => arr1[1] != arr2[1] ? arr1[1]-arr2[1] : arr1[0]-arr2[0])
  //     .map((arr) => arr[0])
  //     .slice(0, k);
};
