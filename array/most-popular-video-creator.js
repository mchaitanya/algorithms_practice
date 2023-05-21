// https://leetcode.com/problems/most-popular-video-creator/
// tags - array
/**
 * @param {string[]} creators
 * @param {string[]} ids
 * @param {number[]} views
 * @return {string[][]}
 */
var mostPopularCreator = function (creators, ids, views) {
  let maxPopularity = 0;
  const map1 = new Map(),
    map2 = new Map();
  for (let i = 0; i < creators.length; i++) {
    const creator = creators[i];
    // Map each creator to their popularity.
    const popularity = (map1.get(creator) || 0) + views[i];
    maxPopularity = Math.max(maxPopularity, popularity);
    map1.set(creator, popularity);
    // Map each creator to the index of their most popular video.
    const index = map2.get(creator);
    if (
      index == null ||
      views[i] > views[index] ||
      (views[i] === views[index] && ids[i] < ids[index])
    ) {
      map2.set(creator, i);
    }
  }

  const result = [];
  for (const [creator, popularity] of map1.entries()) {
    if (popularity === maxPopularity) {
      result.push([creator, ids[map2.get(creator)]]);
    }
  }
  return result;
};
