// https://leetcode.com/problems/time-needed-to-buy-tickets/
// tags - array
/**
 * @param {number[]} tickets
 * @param {number} k
 * @return {number}
 */
var timeRequiredToBuy = function (tickets, k) {
  // Let's say the person at position k is buying n tickets.
  // Everyone ahead of the person will have bought min(their tickets, n) before him.
  // Everyone behind him will have bought min(their tickets, n-1) before him.
  let time = 0;
  for (let i = 0; i < tickets.length; i++) {
    if (i <= k) {
      time += Math.min(tickets[i], tickets[k]);
    } else {
      time += Math.min(tickets[i], tickets[k] - 1);
    }
  }
  return time;
};
