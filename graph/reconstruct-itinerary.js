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
  const path = ["JFK"];
  // Returns true when all the tickets are used up.
  function dfs(from) {
    for (const i of map.get(from) || []) {
      if (used[i]) continue;
      const to = tickets[i][1];
      // Attempt to use ticket i.
      used[i] = true;
      path.push(to);
      if (path.length === tickets.length + 1 || dfs(to)) return true;
      // Backtrack if that doesn't work.
      path.pop(to);
      used[i] = false;
    }
    return false;
  }
  dfs("JFK");
  return path;
};
