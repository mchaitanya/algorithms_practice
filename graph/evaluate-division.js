// https://leetcode.com/problems/evaluate-division/
// tags - graph
/**
 * @param {string[][]} equations
 * @param {number[]} values
 * @param {string[][]} queries
 * @return {number[]}
 */
var calcEquation = function (equations, values, queries) {
  // Model the variables as a directed graph. Edge between a & b has the weight a/b.
  const al = new Map();
  for (let i = 0; i < equations.length; i++) {
    const [u, v] = equations[i];
    if (!al.has(u)) al.set(u, []);
    al.get(u).push([v, values[i]]);
    if (!al.has(v)) al.set(v, []);
    al.get(v).push([u, 1 / values[i]]);
  }

  // Make sure to avoid cycles.
  const GRAY = 1,
    BLACK = 2;

  function dfs(s, t, product, state) {
    if (s === t) return product;
    state.set(s, GRAY);
    for (const [sn, w] of al.get(s)) {
      if (state.get(sn) === GRAY) continue; // This edge forms a cycle.
      const result = dfs(sn, t, w * product, state);
      if (result !== -1) return result;
    }
    state.set(s, BLACK);
    return -1;
  }

  const result = new Array(queries.length);
  for (let i = 0; i < queries.length; i++) {
    const [u, v] = queries[i];
    if (!al.has(u) || !al.has(v)) {
      result[i] = -1;
    } else {
      // Find a path from u to v. Multiply the weights along the way.
      result[i] = dfs(u, v, 1, new Map());
    }
  }
  return result;
};
