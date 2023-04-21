// https://leetcode.com/problems/sort-the-people/
// tags - array
/**
 * @param {string[]} names
 * @param {number[]} heights
 * @return {string[]}
 */
var sortPeople = function (names, heights) {
  const map = new Map();
  for (let i = 0; i < heights.length; i++) {
    map.set(heights[i], names[i]);
  }

  return heights.sort((h1, h2) => h2 - h1).map((h) => map.get(h));
};
