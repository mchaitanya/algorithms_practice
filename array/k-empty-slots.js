// https://leetcode.com/problems/k-empty-slots/
// tags - array
/**
 * @param {number[]} bulbs
 * @param {number} k
 * @return {number}
 */
var kEmptySlots = function (bulbs, k) {
  const isOn = new Array(bulbs.length);
  for (let day = 0; day < bulbs.length; day++) {
    const index = bulbs[day] - 1;
    isOn[index] = true;
    // Check to the left.
    for (
      let left = index - 1, count = 0;
      left >= 0 && count <= k;
      left--, count++
    ) {
      if (count < k && isOn[left]) {
        break;
      } else if (count === k && isOn[left]) {
        return day + 1;
      }
    }

    // Check to the right.
    for (
      let right = index + 1, count = 0;
      right < bulbs.length && count <= k;
      right++, count++
    ) {
      if (count < k && isOn[right]) {
        break;
      } else if (count === k && isOn[right]) {
        return day + 1;
      }
    }
  }
  return -1;
};
