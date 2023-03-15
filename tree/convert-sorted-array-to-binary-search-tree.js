// https://leetcode.com/problems/convert-sorted-array-to-binary-search-tree/
// tags - bst
/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {number[]} nums
 * @return {TreeNode}
 */
var sortedArrayToBST = function (nums) {
  function convert(left, right) {
    if (left > right) return null;
    if (left === right) return new TreeNode(nums[left]);
    const mid = left + Math.ceil((right - left) / 2);
    const leftBST = convert(left, mid - 1);
    const rightBST = convert(mid + 1, right);
    return new TreeNode(nums[mid], leftBST, rightBST);
  }
  return convert(0, nums.length - 1);

  // if (nums.length == 0) {
  //     return null;
  // }

  // // solve recursively
  // const mid = Math.floor(nums.length / 2);
  // const root = new TreeNode(nums[mid], null, null);
  // if (mid > 0) {
  //     root.left = sortedArrayToBST(nums.slice(0, mid));
  // }

  // if (mid < nums.length-1) {
  //     root.right = sortedArrayToBST(nums.slice(mid+1));
  // }

  // return root;
};
