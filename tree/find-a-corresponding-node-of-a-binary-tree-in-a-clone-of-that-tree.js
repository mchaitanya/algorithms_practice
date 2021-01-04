// https://leetcode.com/problems/find-a-corresponding-node-of-a-binary-tree-in-a-clone-of-that-tree/
// tags - tree
/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} original
 * @param {TreeNode} cloned
 * @param {TreeNode} target
 * @return {TreeNode}
 */

var getTargetCopy = function(original, cloned, target) {
    // traverse the cloned tree - return the node if the value matches
    const queue = [cloned];
    while (queue.length > 0) {
        const node = queue.shift();
        if (node.val === target.val) {
            return node;
        }
        
        [node.left, node.right]
            .filter(n => n != null)
            .forEach(n => queue.push(n));
    }
    return null;
};