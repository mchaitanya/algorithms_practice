// https://leetcode.com/problems/number-of-laser-beams-in-a-bank/
// tags - array, string
/**
 * @param {string[]} bank
 * @return {number}
 */
var numberOfBeams = function (bank) {
  const m = bank.length;
  const n = bank[0].length;

  let numBeams = 0;
  let numPrevDevices = 0;
  for (let r = 0; r < m; r++) {
    let numCurrDevices = 0;
    for (let c = 0; c < n; c++) {
      if (bank[r][c] === "1") numCurrDevices++;
    }
    if (numCurrDevices > 0) {
      numBeams += numCurrDevices * numPrevDevices;
      numPrevDevices = numCurrDevices;
    }
  }
  return numBeams;
};
