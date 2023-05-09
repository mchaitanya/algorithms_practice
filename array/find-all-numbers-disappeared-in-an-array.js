// https://leetcode.com/problems/find-all-numbers-disappeared-in-an-array/
// tags - array
/**
 * @param {number[]} nums
 * @return {number[]}
 */
var findDisappearedNumbers = function (nums) {
  for (const num of nums) {
    const abs = Math.abs(num);
    if (nums[abs - 1] > 0) nums[abs - 1] *= -1;
  }

  const missing = [];
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] > 0) missing.push(i + 1);
  }
  return missing;

  // //     // some appear twice, some once, some not at all
  // //     const counts = Array(nums.length).fill(0);
  // //     for (let n of nums) {
  // //         counts[n-1]++;
  // //     }
  // //     return counts.reduce((result, count, i) => {
  // //         if (count === 0) {
  // //             return result.concat(i+1);
  // //         } else {
  // //             return result;
  // //         };
  // //     }, []);
  //     const isAbsent = Array(nums.length).fill(true);
  //     for (let n of nums) {
  //         isAbsent[n-1] = false;
  //     }
  //     return isAbsent.reduce((result, flag, i) => flag ? result.concat(i+1) : result, []);
};
