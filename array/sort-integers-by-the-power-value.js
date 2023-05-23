// https://leetcode.com/problems/sort-integers-by-the-power-value/
// tags - array, sorting, heap
/**
 * @param {number} lo
 * @param {number} hi
 * @param {number} k
 * @return {number}
 */
var getKth = function (lo, hi, k) {
  const memo = new Map();
  function power(n) {
    if (n === 1) return 0;
    if (!memo.has(n)) {
      memo.set(n, n % 2 === 0 ? power(n / 2) + 1 : power(3 * n + 1) + 1);
    }
    return memo.get(n);
  }

  const nums = [];
  for (let i = lo; i <= hi; i++) {
    nums.push(i);
  }

  nums.sort((x, y) => {
    const powerX = power(x),
      powerY = power(y);
    return powerX !== powerY ? powerX - powerY : x - y;
  });
  return nums[k - 1];

  // // Build a max-heap.
  // function compare(x, y) {
  //     const powerX = power(x), powerY = power(y);
  //     if (powerX !== powerY) {
  //         return powerX > powerY ? -1 : 1;
  //     } else {
  //         return x > y ? -1 : 1;
  //     }
  // }

  // const heap = new PriorityQueue({compare});
  // for (let n = lo; n <= hi; n++) {
  //     if (heap.size() < k) {
  //         heap.enqueue(n);
  //     } else if (compare(heap.front(), n) < 0) {
  //         heap.dequeue();
  //         heap.enqueue(n);
  //     }
  // }
  // return heap.front();
};
