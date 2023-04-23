// https://leetcode.com/problems/detonate-the-maximum-bombs/
// tags - graph
/**
 * @param {number[][]} bombs
 * @return {number}
 */
var maximumDetonation = function (bombs) {
  // Model the bombs as a directed graph.
  // There is an edge between bomb i & j if detonating i also detonates j.
  const al = new Array(bombs.length).fill(0).map(() => []);
  for (let i = 0; i < bombs.length; i++) {
    const [xi, yi, ri] = bombs[i];
    for (let j = i + 1; j < bombs.length; j++) {
      const [xj, yj, rj] = bombs[j];
      const dist = Math.sqrt((xi - xj) ** 2 + (yi - yj) ** 2);
      if (dist <= ri) al[i].push(j);
      if (dist <= rj) al[j].push(i);
    }
  }

  function detonate(v, detonated) {
    let result = 1;
    detonated.add(v);
    // console.group(v, detonated);
    for (const vn of al[v]) {
      if (!detonated.has(vn)) {
        result += detonate(vn, detonated);
      }
    }
    // console.groupEnd(v);
    return result;
  }

  let maxDetonate = 0;
  for (let i = 0; i < bombs.length; i++) {
    maxDetonate = Math.max(maxDetonate, detonate(i, new Set()));
  }
  return maxDetonate;
};
