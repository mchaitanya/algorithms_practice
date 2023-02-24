// https://leetcode.com/problems/excel-sheet-column-number/
// tags - string
/**
 * @param {string} columnTitle
 * @return {number}
 */
var titleToNumber = function (columnTitle) {
  // const AToZ = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
  // const mapping = new Map();
  // for (let i = 0; i < AToZ.length; i++) {
  //     mapping.set(AToZ[i], i+1);
  // }

  let number = 0;
  const codeA = "A".charCodeAt(0);
  for (let i = columnTitle.length - 1, mul = 1; i >= 0; i--, mul *= 26) {
    number += mul * (columnTitle.charCodeAt(i) - codeA + 1);
    // number += (mapping.get(columnTitle[i]) * mul);
  }
  return number;
};
