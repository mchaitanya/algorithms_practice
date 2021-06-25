// https://leetcode.com/problems/decompress-run-length-encoded-list/
// tags - array
/**
 * @param {number[]} nums
 * @return {number[]}
 */
var decompressRLElist = function (nums) {
  // return nums.reduce((decompressed, freq, i, arr) => {
  //     if (i % 2 === 0) {
  //         const run = Array(freq).fill(arr[i+1]);
  //         return decompressed.concat(run);
  //     } else {
  //         return decompressed;
  //     }
  // }, []);

  // const decompressed = [];
  // for (let i = 0; i+1 < nums.length; i += 2) {
  //     for (let j = 0; j < nums[i]; j++) {
  //         decompressed.push(nums[i+1]);
  //     }
  // }
  // return decompressed;

  const decompressed = [];
  for (let i = 0; i + 1 < nums.length; i += 2) {
    const run = Array(nums[i]).fill(nums[i + 1]);
    decompressed.push(...run);
  }
  return decompressed;
};
