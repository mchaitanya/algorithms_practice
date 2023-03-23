// https://leetcode.com/problems/reconstruct-itinerary/
// tags - graph, backtracking
/**
 * @param {string[][]} tickets
 * @return {string[]}
 */
var findItinerary = function (tickets) {
  // DFS starting from "JFK" using up all the edges/tickets.
  // Sort the tickets by destination.
  tickets.sort((t1, t2) => t1[1].localeCompare(t2[1]));

  // Map the airports to tickets for flights originating from them.
  const map = new Map();
  for (let i = 0; i < tickets.length; i++) {
    const from = tickets[i][0];
    if (!map.has(from)) map.set(from, []);
    map.get(from).push(i);
  }

  const used = new Array(tickets.length).fill(false);
  // Returns true when all the tickets are used up.
  function dfs(from, path) {
    path.push(from);
    if (path.length === tickets.length + 1) return true;
    for (const i of map.get(from) || []) {
      if (used[i]) continue;
      const to = tickets[i][1];
      // Attempt to use ticket i.
      used[i] = true;
      if (dfs(to, path)) return true;
      // Backtrack if that doesn't work.
      used[i] = false;
    }
    path.pop();
    return false;
  }

  const path = [];
  dfs("JFK", path);
  return path;
};
