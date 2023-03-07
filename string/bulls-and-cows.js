// https://leetcode.com/problems/bulls-and-cows/
// tags -string
/**
 * @param {string} secret
 * @param {string} guess
 * @return {string}
 */
var getHint = function (secret, guess) {
  // Given secret.length === guess.length
  let numBulls = 0;
  const map1 = new Map(),
    map2 = new Map();
  for (let i = 0; i < secret.length; i++) {
    if (secret[i] === guess[i]) {
      numBulls++;
    } else {
      map1.set(secret[i], (map1.get(secret[i]) || 0) + 1);
      map2.set(guess[i], (map2.get(guess[i]) || 0) + 1);
    }
  }

  let numCows = 0;
  for (const digit of map1.keys()) {
    if (map2.has(digit)) {
      numCows += Math.min(map1.get(digit), map2.get(digit));
    }
  }

  return `${numBulls}A${numCows}B`;
};
