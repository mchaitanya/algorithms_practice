// https://leetcode.com/problems/nearest-exit-from-entrance-in-maze/
// tags - graph
/**
 * @param {character[][]} maze
 * @param {number[]} entrance
 * @return {number}
 */
var nearestExit = function (maze, entrance) {
  // Given both m, n >= 1.
  const m = maze.length;
  const n = maze[0].length;
  const WALL = "+",
    EMPTY = ".",
    SEEN = "0";

  function getNeighbours(r, c) {
    return [
      [-1, 0],
      [0, 1],
      [1, 0],
      [0, -1],
    ]
      .map(([dr, dc]) => [r + dr, c + dc])
      .filter(([rn, cn]) => rn >= 0 && rn < m && cn >= 0 && cn < n);
  }

  // BFS from the entrance cell till we hit a border.
  let numSteps = 0;
  let curr = [entrance];
  maze[entrance[0]][entrance[1]] = SEEN;
  while (curr.length > 0) {
    numSteps++;
    const next = [];
    for (const [r, c] of curr) {
      for (const [rn, cn] of getNeighbours(r, c)) {
        if (maze[rn][cn] === EMPTY) {
          if (rn === 0 || rn === m - 1 || cn === 0 || cn === n - 1) {
            return numSteps;
          }
          maze[rn][cn] = SEEN;
          next.push([rn, cn]);
        }
      }
    }
    curr = next;
  }
  return -1;
};
