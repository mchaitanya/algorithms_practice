// https://leetcode.com/problems/find-unique-binary-string/
// tags - binary, string
/**
 * @param {string[]} nums
 * @return {string}
 */
var findDifferentBinaryString = function (nums) {
  let result = "";
  for (let i = 0; i < nums.length; i++) {
    result += nums[i][i] === "1" ? "0" : "1";
  }
  return result;

  // nums = new Set(nums);
  // function convert(num) {
  //     return num.toString(2).padStart(nums.size, '0');
  // }

  // let i = 0;
  // let str = convert(i);
  // while (nums.has(str)) str = convert(++i);
  // return str;
};
