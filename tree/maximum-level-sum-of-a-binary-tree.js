// https://leetcode.com/problems/maximum-level-sum-of-a-binary-tree/
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
 * @return {number}
 */
var maxLevelSum = function(root) {
    // number of nodes >= 1, root can't be null
    // traverse level order, keep track of sum
    let depth = 0;
    let level = [root]; // make sure level never contains nulls
    let max = -Infinity, maxDepth = 0;
    while (level.length > 0) {
        depth++;
        let sum = 0;
        const nextLevel = [];
        for (let node of level) {
            sum += node.val;
            if (node.left != null) {
                nextLevel.push(node.left);
            }
            
            if (node.right != null) {
                nextLevel.push(node.right);
            }
        }
        
        level = nextLevel;
        if (sum > max) {
            max = sum;
            maxDepth = depth;
        }
    }
    
    return maxDepth;
};