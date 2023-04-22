// https://leetcode.com/problems/get-watched-videos-by-your-friends/
// tags - graph
/**
 * @param {string[][]} watchedVideos
 * @param {number[][]} friends
 * @param {number} id
 * @param {number} level
 * @return {string[]}
 */
var watchedVideosByFriends = function (watchedVideos, friends, id, level) {
  let curr = [id];
  const seen = new Set(curr);
  while (curr.length > 0 && level > 0) {
    const next = [];
    for (const pid of curr) {
      for (const fid of friends[pid]) {
        if (!seen.has(fid)) {
          seen.add(fid);
          next.push(fid);
        }
      }
    }
    curr = next;
    level--;
  }

  if (level > 0) return [];

  // Map each video to its frequency.
  const map = new Map();
  for (const pid of curr) {
    for (const vid of watchedVideos[pid]) {
      const count = map.get(vid) || 0;
      map.set(vid, count + 1);
    }
  }

  return Array.from(map.keys()).sort((vid1, vid2) => {
    if (map.get(vid1) === map.get(vid2)) {
      return vid1.localeCompare(vid2);
    } else {
      return map.get(vid1) - map.get(vid2);
    }
  });
};
