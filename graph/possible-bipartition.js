// https://leetcode.com/problems/possible-bipartition/
// tags - graph
/**
 * @param {number} n
 * @param {number[][]} dislikes
 * @return {boolean}
 */
var possibleBipartition = function (n, dislikes) {
  const al = new Array(n + 1).fill(0).map(() => []);
  for (const [a, b] of dislikes) {
    al[a].push(b);
    al[b].push(a);
  }

  const colors = new Array(n + 1).fill(null);
  function tryColor(v, color = 0) {
    colors[v] = color;
    for (const vn of al[v]) {
      if (
        colors[vn] === color ||
        (colors[vn] == null && !tryColor(vn, 1 - color))
      ) {
        return false;
      }
    }
    return true;
  }

  for (let v = 1; v <= n; v++) {
    if (colors[v] == null && !tryColor(v)) return false;
  }
  return true;
};
