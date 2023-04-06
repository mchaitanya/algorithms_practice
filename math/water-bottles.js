// https://leetcode.com/problems/water-bottles/
// tags - math
/**
 * @param {number} numBottles
 * @param {number} numExchange
 * @return {number}
 */
var numWaterBottles = function (numBottles, numExchange) {
  let numDrunk = numBottles;
  let numEmpty = numBottles;
  while (numEmpty >= numExchange) {
    numBottles = Math.floor(numEmpty / numExchange);
    numDrunk += numBottles;
    numEmpty = (numEmpty % numExchange) + numBottles;
  }
  return numDrunk;
};
