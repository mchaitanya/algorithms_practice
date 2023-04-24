// https://leetcode.com/problems/count-largest-group/
// tags - math
/**
 * @param {number} n
 * @return {number}
 */
var countLargestGroup = function (n) {
  let maxCount = 0;
  let numMaxCount = 0;
  let digitSum = 1;
  // Map each digit sum to its count.
  const map = new Map();
  for (let i = 1; i <= n; i++) {
    const count = (map.get(digitSum) || 0) + 1;
    map.set(digitSum, count);
    if (count > maxCount) {
      maxCount = count;
      numMaxCount = 1;
    } else if (count === maxCount) {
      numMaxCount++;
    }

    digitSum++;
    // let k = 4;
    // while (k > 0) {
    //     const divisor = 10 ** k;
    //     if (i % divisor === divisor-1) {
    //         digitSum -= k*9;
    //         break;
    //     }
    //     k--;
    // }
    if (i % 10000 === 9999) {
      digitSum -= 36;
    } else if (i % 1000 === 999) {
      digitSum -= 27;
    } else if (i % 100 === 99) {
      digitSum -= 18;
    } else if (i % 10 === 9) {
      digitSum -= 9;
    }
  }

  return numMaxCount;
};
