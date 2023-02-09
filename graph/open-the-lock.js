// https://leetcode.com/problems/open-the-lock/
// tags - graph
/**
 * @param {string[]} deadends
 * @param {string} target
 * @return {number}
 */
var openLock = function (deadends, target) {
  deadends = new Set(deadends);
  if (target === "0000") return 0;
  if (deadends.has("0000")) return -1;

  function getNextStates(state) {
    const nextStates = [];
    const vals = state.split("").map(Number);
    for (let w = 0; w < 4; w++) {
      const original = vals[w];
      // Turn the wheel forward.
      vals[w] = original === 9 ? 0 : original + 1;
      nextStates.push(vals.join(""));
      // Turn the wheel in reverse.
      vals[w] = original === 0 ? 9 : original - 1;
      nextStates.push(vals.join(""));
      // Restore the original value.
      vals[w] = original;
    }
    return nextStates;
  }

  // BFS the graph of possible states.
  let depth = 0;
  let curr = ["0000"];
  const seen = new Set(curr);
  while (curr.length > 0) {
    depth++;
    const next = [];
    for (const state of curr) {
      for (const nextState of getNextStates(state)) {
        if (nextState === target) return depth;
        if (!deadends.has(nextState) && !seen.has(nextState)) {
          seen.add(nextState);
          next.push(nextState);
        }
      }
    }
    curr = next;
  }
  return -1;
};
