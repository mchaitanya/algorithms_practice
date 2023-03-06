// https://leetcode.com/problems/group-the-people-given-the-group-size-they-belong-to/
// tags - array, greedy
/**
 * @param {number[]} groupSizes
 * @return {number[][]}
 */
var groupThePeople = function (groupSizes) {
  const groups = [];
  // Map each group size to an array of people.
  const map = new Map();
  for (let i = 0; i < groupSizes.length; i++) {
    const groupSize = groupSizes[i];
    if (!map.has(groupSize)) map.set(groupSize, []);
    const group = map.get(groupSize);
    group.push(i);
    if (group.length === groupSize) {
      groups.push(group);
      map.delete(groupSize);
    }
  }
  return groups;
};
