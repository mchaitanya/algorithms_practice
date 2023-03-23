// https://leetcode.com/problems/find-center-of-star-graph/
// tags - graph
/**
 * @param {number[][]} edges
 * @return {number}
 */
var findCenter = function (edges) {
  // Each edge connects the center to a different node. Find the repeated vertex in the edge list.
  // const [u1, v1] = edges[0]; // Given there are >= 2 edges.
  // const [u2, v2] = edges[1];
  // return u1 === u2 || u1 === v2 ? u1 : v1;
  return edges[0][0] === edges[1][0] || edges[0][0] === edges[1][1]
    ? edges[0][0]
    : edges[0][1];
};
