// https://leetcode.com/problems/serialize-and-deserialize-binary-tree/
// tags - tree
/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */

/**
 * Encodes a tree to a single string.
 *
 * @param {TreeNode} root
 * @return {string}
 */
var serialize = function (root) {
  // Level by level
  if (root == null) return "";
  const result = [];
  let curr = [root];
  while (true) {
    if (curr.every((node) => node == null)) break;
    const next = [];
    for (const node of curr) {
      result.push(node?.val ?? "-");
      next.push(node?.left);
      next.push(node?.right);
    }
    curr = next;
  }
  return result.join(",");
};

/**
 * Decodes your encoded data to tree.
 *
 * @param {string} data
 * @return {TreeNode}
 */
var deserialize = function (data) {
  if (data === "") return null;
  const nodes = data
    .split(",")
    .map((val) => (val === "-" ? null : new TreeNode(val)));
  for (let count = 1; ; count *= 2) {
    const currStart = count - 1;
    const nextStart = 2 * count - 1;
    if (nextStart >= nodes.length) break;
    for (let i = currStart, j = nextStart; i < nextStart; i++, j += 2) {
      const node = nodes[i];
      if (node != null) {
        node.left = nodes[j];
        node.right = nodes[j + 1];
      }
    }
  }
  return nodes[0];
};

/**
 * Your functions will be called as such:
 * deserialize(serialize(root));
 */
