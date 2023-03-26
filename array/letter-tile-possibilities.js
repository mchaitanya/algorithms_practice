// https://leetcode.com/problems/letter-tile-possibilities/
// tags - array, backtracking
/**
 * @param {string} tiles
 * @return {number}
 */
var numTilePossibilities = function (tiles) {
  const map = new Map();
  for (const t of tiles) {
    const count = map.get(t) || 0;
    map.set(t, count + 1);
  }

  // Count permutations.
  let result = 0;
  function build(i) {
    if (i > 0 && i <= tiles.length) result++;
    if (i === tiles.length) return;

    for (const t of map.keys()) {
      const count = map.get(t);
      if (count === 0) continue;
      map.set(t, count - 1);
      build(i + 1);
      map.set(t, count);
    }
  }

  build(0);

  return result;
};
