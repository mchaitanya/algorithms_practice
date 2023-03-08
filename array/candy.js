// https://leetcode.com/problems/candy/
// tags - array
/**
 * @param {number[]} ratings
 * @return {number}
 */
var candy = function (ratings) {
  const numChildren = ratings.length;
  // From LC - Two scans
  const leftToRight = new Array(numChildren).fill(1);
  for (let i = 1; i < numChildren; i++) {
    if (ratings[i] > ratings[i - 1]) {
      leftToRight[i] = leftToRight[i - 1] + 1;
    }
  }

  const rightToLeft = new Array(numChildren).fill(1);
  for (let i = numChildren - 1; i >= 0; i--) {
    if (ratings[i] > ratings[i + 1]) {
      rightToLeft[i] = rightToLeft[i + 1] + 1;
    }
  }

  let numCandies = 0;
  for (let i = 0; i < numChildren; i++) {
    numCandies += Math.max(leftToRight[i], rightToLeft[i]);
  }
  return numCandies;

  // // From LC - Brute force
  // const candies = new Array(ratings.length).fill(1);
  // let updated = true;
  // while (updated) {
  //     updated = false;
  //     for (let i = 0; i < numChildren; i++) {
  //         if (i > 0 && ratings[i] > ratings[i-1] && candies[i] <= candies[i-1]) {
  //             candies[i] = candies[i-1] + 1;
  //             updated = true;
  //         }
  //         if (i < numChildren-1 && ratings[i] > ratings[i+1] && candies[i] <= candies[i+1]) {
  //             candies[i] = candies[i+1] + 1;
  //             updated = true;
  //         }
  //     }
  // }

  // let numCandies = 0;
  // for (const c of candies) {
  //     numCandies += c;
  // }
  // return numCandies;
};
