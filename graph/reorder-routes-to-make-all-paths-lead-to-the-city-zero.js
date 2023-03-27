// https://leetcode.com/problems/reorder-routes-to-make-all-paths-lead-to-the-city-zero/
// tags - graph
/**
 * @param {number} n
 * @param {number[][]} connections
 * @return {number}
 */
var minReorder = function (n, connections) {
  const outgoing = new Array(n).fill(0).map(() => []);
  const incoming = new Array(n).fill(0).map(() => []);
  for (const [c1, c2] of connections) {
    outgoing[c1].push(c2); // There's a road from c1 to c2.
    incoming[c2].push(c1);
  }

  let numFlipped = 0;

  // Do BFS from city 0. Consider both outgoing & incoming edges.
  const seen = new Array(n).fill(false);
  const queue = [0];
  while (queue.length > 0) {
    const v = queue.shift();
    seen[v] = true;
    // Incoming edges.
    for (const vn of incoming[v]) {
      if (!seen[vn]) {
        queue.push(vn);
      }
    }
    // Flip the outgoing edges.
    for (const vn of outgoing[v]) {
      if (!seen[vn]) {
        numFlipped++;
        queue.push(vn);
      }
    }
  }

  return numFlipped;
};
