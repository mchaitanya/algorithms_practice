// https://leetcode.com/problems/maximize-distance-to-closest-person/
// tags - array
/**
 * @param {number[]} seats
 * @return {number}
 */
var maxDistToClosest = function (seats) {
  const distFromLeft = new Array(seats.length);
  for (let i = 0, distance = Infinity; i < seats.length; i++) {
    distance = seats[i] === 1 ? 0 : distance + 1;
    distFromLeft[i] = distance;
  }

  const distFromRight = new Array(seats.length);
  for (let i = seats.length - 1, distance = Infinity; i >= 0; i--) {
    distance = seats[i] === 1 ? 0 : distance + 1;
    distFromRight[i] = distance;
  }

  let result = 0;
  for (let i = 0; i < seats.length; i++) {
    // min can't be Infinity since there's at least one person sitting.
    const min = Math.min(distFromLeft[i], distFromRight[i]);
    if (min > result) result = min;
  }
  return result;
};
