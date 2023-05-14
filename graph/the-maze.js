// https://leetcode.com/problems/the-maze/
// tags - graph
/**
 * @param {number[][]} maze
 * @param {number[]} start
 * @param {number[]} destination
 * @return {boolean}
 */
var hasPath = function (maze, start, destination) {
  const m = maze.length;
  const n = maze[0].length;
  const EMPTY = 0,
    WALL = 1;

  const dirs = [
    [-1, 0],
    [0, 1],
    [1, 0],
    [0, -1],
  ];
  function getNext(r, c) {
    const next = [];
    for (const [dr, dc] of dirs) {
      let rn = r + dr,
        cn = c + dc;
      while (rn >= 0 && rn < m && cn >= 0 && cn < n && maze[rn][cn] === EMPTY) {
        rn += dr;
        cn += dc;
      }
      next.push([rn - dr, cn - dc]);
    }
    return next;
  }

  const seen = new Set();
  function dfs(r, c) {
    if (r === destination[0] && c === destination[1]) return true;
    seen.add(r * n + c);
    for (const [rn, cn] of getNext(r, c)) {
      if (!seen.has(rn * n + cn) && dfs(rn, cn)) {
        return true;
      }
    }
    return false;
  }

  return dfs(start[0], start[1]);
};
