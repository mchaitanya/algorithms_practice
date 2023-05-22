// https://leetcode.com/problems/remove-stones-to-minimize-the-total/
// tags - heap
/**
 * @param {number[]} piles
 * @param {number} k
 * @return {number}
 */
var minStoneSum = function (piles, k) {
  // Given piles.length >= 1.
  let total = 0;
  // Use the priority-queue library LC auto-imports.
  const mpq = new MaxPriorityQueue();
  for (const val of piles) {
    mpq.enqueue(val);
    total += val;
  }

  while (k > 0) {
    const { element: val } = mpq.dequeue();
    if (val === 1) break;
    const removed = Math.floor(val / 2);
    mpq.enqueue(val - removed);
    total -= removed;
    k--;
  }
  return total;
};
