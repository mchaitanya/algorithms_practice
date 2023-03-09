// https://leetcode.com/problems/sliding-puzzle/
// tags - graph
/**
 * @param {number[][]} board
 * @return {number}
 */
var slidingPuzzle = function (board) {
  // Map each index to its 4-directional neighbours.
  const neighbours = new Map([
    [0, [1, 3]],
    [1, [0, 2, 4]],
    [2, [1, 5]],
    [3, [0, 4]],
    [4, [1, 3, 5]],
    [5, [2, 4]],
  ]);

  function getNextStates(state) {
    const nextStates = [];
    const arr = state.split("");
    const zeroIndex = arr.indexOf("0");
    for (const index of neighbours.get(zeroIndex)) {
      // Swap the digits at zeroIndex & index.
      [arr[zeroIndex], arr[index]] = [arr[index], arr[zeroIndex]];
      nextStates.push(arr.join(""));
      // Swap them back.
      [arr[zeroIndex], arr[index]] = [arr[index], arr[zeroIndex]];
    }
    return nextStates;
  }

  // BFS the graph of possible states.
  // Each state can be represented as a 6-digit string.
  END_STATE = "123450";

  let level = [board[0].join("") + board[1].join("")];
  const seen = new Set(level);
  let numMoves = 0;
  while (level.length > 0) {
    const nextLevel = [];
    for (const state of level) {
      if (state === END_STATE) return numMoves;
      for (const nextState of getNextStates(state)) {
        if (!seen.has(nextState)) {
          seen.add(nextState);
          nextLevel.push(nextState);
        }
      }
    }
    if (nextLevel.length > 0) numMoves++;
    level = nextLevel;
  }
  return -1;
};
