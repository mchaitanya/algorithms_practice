// https://leetcode.com/problems/cut-off-trees-for-golf-event/
// tags - graph
/**
 * @param {number[][]} forest
 * @return {number}
 */
var cutOffTree = function (forest) {
  // Given both m, n >= 1.
  const m = forest.length;
  const n = forest[0].length;

  // Map each tree's height to its location.
  const map = new Map();
  for (let r = 0; r < m; r++) {
    for (let c = 0; c < n; c++) {
      if (forest[r][c] > 1) {
        map.set(forest[r][c], [r, c]);
      }
    }
  }

  // Return number of steps / -1 if not possible to reach the target.
  function bfs(rs, cs, rt, ct) {
    let level = [[rs, cs]];
    const seen = new Set([rs * n + cs]);
    let numSteps = 0;
    while (level.length > 0) {
      const nextLevel = [];
      for (const [r, c] of level) {
        if (r === rt && c === ct) return numSteps;
        for (const [dr, dc] of [
          [-1, 0],
          [0, 1],
          [1, 0],
          [0, -1],
        ]) {
          const rn = r + dr,
            cn = c + dc;
          if (rn >= 0 && rn < m && cn >= 0 && cn < n) {
            if (forest[rn][cn] > 0 && !seen.has(rn * n + cn)) {
              nextLevel.push([rn, cn]);
              seen.add(rn * n + cn);
            }
          }
        }
      }
      level = nextLevel;
      numSteps++;
    }
    return -1;
  }

  let totalSteps = 0;
  const locations = Array.from(map.keys())
    .sort((h1, h2) => h1 - h2)
    .map((h) => map.get(h));
  for (let i = 0, rs = 0, cs = 0; i < locations.length; i++) {
    const [rt, ct] = locations[i];
    const steps = bfs(rs, cs, rt, ct);
    if (steps === -1) return -1;
    totalSteps += steps;
    rs = rt;
    cs = ct;
  }
  return totalSteps;
};
