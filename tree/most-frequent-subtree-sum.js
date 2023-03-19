// https://leetcode.com/problems/most-frequent-subtree-sum/
// tags - tree
/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[]}
 */
var findFrequentTreeSum = function (root) {
  let maxCount = 0;
  let mostFreqSums = [];
  // Map each subtree sum to its count.
  const map = new Map();
  function subtreeSum(node) {
    if (node == null) return 0;
    const sum = subtreeSum(node.left) + subtreeSum(node.right) + node.val;
    const count = (map.get(sum) || 0) + 1;
    map.set(sum, count);
    if (count > maxCount) {
      maxCount = count;
      mostFreqSums = [sum];
    } else if (count === maxCount) {
      mostFreqSums.push(sum);
    }
    return sum;
  }

  subtreeSum(root); // Given root not null.

  return mostFreqSums;

  // const result = [];
  // for (const [sum, count] of map.entries()) {
  //     if (count === maxCount) {
  //         result.push(sum);
  //     }
  // }
  // return result;
};
