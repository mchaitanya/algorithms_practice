// https://leetcode.com/problems/keys-and-rooms/
// tags - graph
/**
 * @param {number[][]} rooms
 * @return {boolean}
 */
var canVisitAllRooms = function (rooms) {
  // Imagine a graph where there's an edge between 2 rooms if the first contains a key to the second.
  // Search the graph starting from room 0.
  const visited = new Set();
  function dfs(room) {
    visited.add(room);
    for (const nextRoom of rooms[room]) {
      if (!visited.has(nextRoom)) {
        dfs(nextRoom);
      }
    }
  }
  dfs(0);
  return visited.size === rooms.length;
};
