// https://leetcode.com/problems/n-th-tribonacci-number/
// tags - array
/**
 * @param {number} n
 * @return {number}
 */
var tribonacci = function (n) {
  const queue = [0, 1, 1];
  if (n <= 2) return queue[n];
  let curr = 2; // 0 + 1 + 1
  for (let i = 3; i < n; i++) {
    queue.push(curr);
    curr += curr - queue.shift();
  }
  return curr;

  // const seq = new Array(Math.max(3, n+1));
  // seq[0] = 0;
  // seq[1] = 1;
  // seq[2] = 1;
  // for (let i = 3; i <= n; i++) {
  //     seq[i] = seq[i-1] + seq[i-2] + seq[i-3];
  // }
  // return seq[n];
};
