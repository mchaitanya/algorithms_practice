// https://leetcode.com/problems/two-sum-bsts/
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
 * @param {TreeNode} root1
 * @param {TreeNode} root2
 * @param {number} target
 * @return {boolean}
 */
var twoSumBSTs = function (root1, root2, target) {
  function dfs(node, vals) {
    if (node == null) return;
    dfs(node.left, vals);
    vals.push(node.val);
    dfs(node.right, vals);
  }

  const vals1 = [],
    vals2 = [];
  dfs(root1, vals1);
  dfs(root2, vals2);

  // Both vals1 & vals2 contain at least 1 number.
  for (let i = 0, j = vals2.length - 1; i < vals1.length && j >= 0; ) {
    const sum = vals1[i] + vals2[j];
    if (sum === target) {
      return true;
    } else if (sum < target) {
      i++;
    } else {
      j--;
    }
  }
  return false;

  // if (root1 == null || root2 == null) return false;
  // const sum = root1.val + root2.val;
  // if (sum === target) {
  //     return true;
  // } else if (sum < target) {
  //     return twoSumBSTs(root1.right, root2, target) || twoSumBSTs(root1, root2.right, target);
  // } else {
  //     return twoSumBSTs(root1.left, root2, target) || twoSumBSTs(root1, root2.left, target);
  // }

  // function dfs1(node, vals) {
  //     if (node == null) return;
  //     dfs1(node.left, vals);
  //     vals.add(node.val);
  //     dfs1(node.right, vals);
  // };

  // const vals = new Set();
  // dfs1(root1, vals);

  // function dfs2(node) {
  //     if (node == null) return false;
  //     if (vals.has(target - node.val) || dfs2(node.left) || dfs2(node.right)) {
  //         return true;
  //     }
  //     return false;
  // }
  // return dfs2(root2);
};
