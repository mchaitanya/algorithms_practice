// https://leetcode.com/problems/distinct-prime-factors-of-product-of-array/
// tags - math
/**
 * @param {number[]} nums
 * @return {number}
 */
var distinctPrimeFactors = function (nums) {
  let count = 0;
  const primes = [];
  const max = Math.max(...nums);
  scan: for (let i = 2; i <= max; i++) {
    for (const p of primes) {
      if (i % p === 0) continue scan;
    }
    // i is a prime number.
    primes.push(i);

    for (const num of nums) {
      if (num % i === 0) {
        count++;
        break;
      }
    }
  }
  return count;
};
