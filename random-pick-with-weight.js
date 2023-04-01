// https://leetcode.com/problems/random-pick-with-weight/
// tags - probability
/**
 * @param {number[]} w
 */
var Solution = function (w) {
  this.prefixSums = new Array(w.length + 1);
  this.prefixSums[0] = 0;
  for (let i = 1; i <= w.length; i++) {
    this.prefixSums[i] = this.prefixSums[i - 1] + w[i - 1];
  }

  // this.runningWSum = w;
  // for (let i = 1; i < w.length; i++) {
  //     w[i] = w[i] + w[i-1];
  // }
};

/**
 * @return {number}
 */
Solution.prototype.pickIndex = function () {
  const n = this.prefixSums.length - 1;
  const val = Math.floor(Math.random() * this.prefixSums[n]);
  // Find i such that prefixSums[i-1] <= val < prefixSums[i]
  let left = 1,
    right = n;
  while (left <= right) {
    const mid = left + Math.floor((right - left) / 2);
    if (this.prefixSums[mid - 1] <= val && val < this.prefixSums[mid]) {
      return mid - 1;
    } else if (val === this.prefixSums[mid]) {
      return mid;
    } else if (val > this.prefixSums[mid]) {
      // Search the right half.
      left = mid + 1;
    } else {
      // Search the left half.
      right = mid - 1;
    }
  }
  // Shouldn't reach here.

  //   const totalW = this.runningWSum[this.runningWSum.length - 1];
  //   const rand = Math.floor(Math.random() * totalW); // random number between 0 & totalW (exclusive)
  //   for (let i = 0; i < this.runningWSum.length; i++) {
  //     if (rand < this.runningWSum[i]) {
  //       return i;
  //     }
  //   }
  //   return 0; // should never run
};

/**
 * Your Solution object will be instantiated and called as such:
 * var obj = new Solution(w)
 * var param_1 = obj.pickIndex()
 */
