// https://leetcode.com/problems/interval-list-intersections/
// tags - array, interval
/**
 * @param {number[][]} firstList
 * @param {number[][]} secondList
 * @return {number[][]}
 */
var intervalIntersection = function (firstList, secondList) {
  const result = [];
  for (let i = 0, j = 0; i < firstList.length && j < secondList.length; ) {
    const [s1, e1] = firstList[i];
    const [s2, e2] = secondList[j];
    if (s1 <= e2 && e1 >= s2) {
      result.push([Math.max(s1, s2), Math.min(e1, e2)]);
    }

    if (e1 < e2) {
      i++;
    } else {
      j++;
    }
  }

  return result;
};
