// https://leetcode.com/problems/two-sum-iv-input-is-a-bst/
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
 * @param {number} k
 * @return {boolean}
 */
var findTarget = function (root, k) {
  const sorted = [];
  (function dfs(node) {
    if (node == null) return;
    dfs(node.left);
    sorted.push(node.val);
    dfs(node.right);
  })(root);
  let start = 0,
    end = sorted.length - 1;
  while (start < end) {
    const sum = sorted[start] + sorted[end];
    if (sum === k) {
      return true;
    } else if (sum < k) {
      start++;
    } else {
      end--;
    }
  }
  return false;

  // const seen = new Set();
  // function dfs(node) {
  //     if (node == null) return false;
  //     if (dfs(node.left) || seen.has(k - node.val)) {
  //         return true;
  //     }
  //     seen.add(node.val);
  //     if (dfs(node.right)) return true;
  //     return false;
  // };
  // return dfs(root);
  //   function* inorder(node) {
  //     if (node != null) {
  //       yield* inorder(node.left);
  //       yield node.val;
  //       yield* inorder(node.right);
  //     }
  //   }
  //   const seen = new Set();
  //   for (const val of inorder(root)) {
  //     if (seen.has(k - val)) return true;
  //     seen.add(val);
  //   }
  //   return false;
};
