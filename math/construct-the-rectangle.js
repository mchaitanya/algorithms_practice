// https://leetcode.com/problems/construct-the-rectangle/
// tags - math
/**
 * @param {number} area
 * @return {number[]}
 */
var constructRectangle = function (area) {
  for (let i = Math.floor(Math.sqrt(area)); i > 1; i--) {
    if (area % i === 0) {
      return [area / i, i];
    }
  }
  return [area, 1];
};
