// https://leetcode.com/problems/fraction-to-recurring-decimal/
// tags - math
/**
 * @param {number} numerator
 * @param {number} denominator
 * @return {string}
 */
var fractionToDecimal = function (numerator, denominator) {
  const resultNegative =
    (numerator > 0 && denominator < 0) || (numerator < 0 && denominator > 0);
  numerator = Math.abs(numerator);
  denominator = Math.abs(denominator);

  let result =
    (resultNegative ? "-" : "") + Math.floor(numerator / denominator);
  numerator %= denominator;
  if (numerator === 0) return result;

  result += ".";

  const map = new Map();
  while (numerator > 0) {
    if (map.has(numerator)) break;
    map.set(numerator, result.length);

    let times = 0;
    while (numerator < denominator) {
      numerator *= 10;
      times++;
    }

    result += "0".repeat(times - 1) + Math.floor(numerator / denominator);
    numerator %= denominator;
  }

  if (numerator > 0) {
    const index = map.get(numerator);
    const fixed = result.slice(0, index);
    const repeating = result.slice(index);
    return `${fixed}(${repeating})`;
  } else {
    return result;
  }
};
