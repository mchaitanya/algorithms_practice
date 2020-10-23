// https://leetcode.com/problems/binary-tree-right-side-view/
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
var rightSideView = function(root) {
    // traverse level-order, pick the right-most node
    if (root == null) {
        return [];
    }
    
    let level = [root];
    let rightSideValues = [];
    while (level.length > 0) {
        rightSideValues.push(level[level.length - 1].val);
        
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
    
    return rightSideValues;
    
};