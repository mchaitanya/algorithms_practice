// https://leetcode.com/problems/friends-of-appropriate-ages/
// tags - array
/**
 * @param {number[]} ages
 * @return {number}
 */
var numFriendRequests = function (ages) {
  // Given 1 <= ages[i] <= 120.
  const MAX_AGE = 120;

  // Count the number of people for each age.
  const count = new Array(MAX_AGE + 1).fill(0);
  for (const age of ages) {
    count[age]++;
  }

  // Calculate prefix sums. Now count[i] is the number of people whose age <= i.
  for (let i = 1; i <= MAX_AGE; i++) {
    count[i] += count[i - 1];
  }

  let numRequests = 0;
  for (const age of ages) {
    const limit = Math.floor(age / 2) + 7;
    if (limit < age) {
      // Take away 1 because a person won't send a request to him/herself.
      numRequests += count[age] - count[limit] - 1;
    }
  }
  return numRequests;
};
