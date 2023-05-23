// https://leetcode.com/problems/find-score-of-an-array-after-marking-all-elements/
// tags - heap
/**
 * @param {number[]} nums
 * @return {number}
 */
var findScore = function (nums) {
  // Mark a value by setting it to 0.
  function tryMark(index) {
    if (index >= 0 && index < nums.length && nums[index] > 0) {
      nums[index] = 0;
      return true;
    }
    return false;
  }

  // Store both the value & index as a tuple in the min-heap.
  const heap = new PriorityQueue({
    compare: (p, c) => {
      // Compare values first.
      if (p[0] < c[0]) {
        return -1;
      } else if (p[0] > c[0]) {
        return 1;
      } else {
        // If the values are equal, compare the indexes.
        return p[1] < c[1] ? -1 : 1;
      }
    },
  });

  for (let i = 0; i < nums.length; i++) {
    heap.enqueue([nums[i], i]);
  }

  let score = 0;
  let numMarked = 0;
  while (numMarked < nums.length) {
    const [val, index] = heap.dequeue();
    if (tryMark(index)) {
      score += val;
      numMarked++;
      if (tryMark(index - 1)) numMarked++;
      if (tryMark(index + 1)) numMarked++;
    }
  }
  return score;
};
