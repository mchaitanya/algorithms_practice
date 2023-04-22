// https://leetcode.com/problems/minimum-cuts-to-divide-a-circle/
// tags - math
/**
 * @param {number} n
 * @return {number}
 */
var numberOfCuts = function (n) {
  if (n === 1) {
    return 0;
  } else if (n % 2 === 0) {
    return n / 2;
  } else {
    return n;
  }

  // let numCuts = 0;
  // for (let i = 0; i < n; i++) {
  //     // Idea:
  //     // Current angle = i*360/n
  //     // If we take away 180 from it, is it still a multiple of 360/n
  //     // Is this an integer: (i*360/n - 180) * n/360
  //     const x = i - n/2;
  //     if (x < 0 || x !== Math.floor(x)) numCuts++;
  // }
  // return numCuts;

  // const angle = 360/n;
  // const set = new Set();
  // let curr = 0;
  // while (curr < 360) {
  //     if (!set.has(curr - 180)) set.add(curr);
  //     curr += angle;
  // }
  // return set.size;
};
