// https://leetcode.com/problems/bulls-and-cows/
// tags -string
/**
 * @param {string} secret
 * @param {string} guess
 * @return {string}
 */
var getHint = function (secret, guess) {
  const secretCounts = new Array(10).fill(0);
  const guessCounts = new Array(10).fill(0);

  let numBulls = 0;
  for (let i = 0; i < secret.length; i++) {
    if (secret[i] === guess[i]) {
      numBulls++;
    } else {
      secretCounts[Number(secret[i])]++;
      guessCounts[Number(guess[i])]++;
    }
  }

  let numCows = 0;
  for (let i = 0; i < 10; i++) {
    numCows += Math.min(secretCounts[i], guessCounts[i]);
  }

  return `${numBulls}A${numCows}B`;
};
