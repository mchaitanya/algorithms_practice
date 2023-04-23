// https://leetcode.com/problems/course-schedule-iv/
// tags - graph
/**
 * @param {number} numCourses
 * @param {number[][]} prerequisites
 * @param {number[][]} queries
 * @return {boolean[]}
 */
var checkIfPrerequisite = function (numCourses, prerequisites, queries) {
  // Build up the adjacency list.
  const al = new Array(numCourses).fill(0).map(() => []);
  for (const [p, c] of prerequisites) {
    al[p].push(c);
  }

  const memo = new Array(numCourses);
  for (let i = 0; i < numCourses; i++) {
    memo[i] = new Array(numCourses).fill(null);
  }

  // Given the graph doesn't contain any cycles.
  function doesPathExist(u, v) {
    if (u === v) return true;
    if (memo[u][v] == null) {
      memo[u][v] = false;
      for (const un of al[u]) {
        if (doesPathExist(un, v)) {
          memo[u][v] = true;
          break;
        }
      }
    }
    return memo[u][v];
  }

  // If there's a path from u to v, then u is a prerequisite of v.
  const result = new Array(queries.length);
  for (let i = 0; i < queries.length; i++) {
    result[i] = doesPathExist(queries[i][0], queries[i][1]);
  }
  return result;
};
