// https://leetcode.com/problems/maximum-population-year/
// tags - array
/**
 * @param {number[][]} logs
 * @return {number}
 */
var maximumPopulation = function (logs) {
  const population = new Array(101).fill(0);
  for (const [birth, death] of logs) {
    for (let year = birth; year < death; year++) {
      population[year - 1950]++;
    }
  }

  let maxYear = 1950;
  let maxPopulation = 0;
  for (let i = 0; i < 101; i++) {
    if (population[i] > maxPopulation) {
      maxPopulation = population[i];
      maxYear = 1950 + i;
    }
  }
  return maxYear;
};
