// https://leetcode.com/problems/binary-tree-level-order-traversal/
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
 * @return {number[][]}
 */
var levelOrder = function(root) {
    if (root == null) {
        return [];
    }
    
    const levelValues = [];
    let level = [root];
    while (level.length > 0) {
        const values = level.map(node => node.val);
        levelValues.push(values);
        
        const nextLevel = [];
        for (let node of level) {
            if (node.left != null) {
                nextLevel.push(node.left);
            }
            if (node.right != null) {
                nextLevel.push(node.right);
            }
        }
        level = nextLevel;
    }
    return levelValues;
};