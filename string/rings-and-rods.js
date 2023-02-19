// https://leetcode.com/problems/rings-and-rods
// tags - string
/**
 * @param {string} rings
 * @return {number}
 */
var countPoints = function (rings) {
  const numRods = 10;
  const hasR = new Array(numRods).fill(false);
  const hasG = new Array(numRods).fill(false);
  const hasB = new Array(numRods).fill(false);
  for (let i = 0; i < rings.length; i += 2) {
    const rod = Number(rings[i + 1]);
    switch (rings[i]) {
      case "R":
        hasR[rod] = true;
        break;
      case "G":
        hasG[rod] = true;
        break;
      case "B":
        hasB[rod] = true;
        break;
    }
  }

  let numAllColors = 0;
  for (let rod = 0; rod < numRods; rod++) {
    if (hasR[rod] && hasG[rod] && hasB[rod]) numAllColors++;
  }
  return numAllColors;
};
