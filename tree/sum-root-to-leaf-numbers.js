// https://leetcode.com/problems/sum-root-to-leaf-numbers/
// tags - tree, dfs
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
var sumNumbers = function(root) {
    // do DFS, process the digits along the path, then update sum at leaf
    if (root == null) {
        return 0;
    }
    
    let sum = 0;
    (function dfs(node, pathSum = 0) {
        // we make sure node will never be null
        const newPathSum = (10*pathSum + node.val);
        // when you hit a leaf, update the overall sum
        if (node.left == null && node.right == null) {
            sum += newPathSum;
            return;
        }
        
        if (node.left != null) {
            dfs(node.left, newPathSum);
        }
        
        if (node.right != null) {
            dfs(node.right, newPathSum);
        }
        
    })(root);
    
    return sum;
    
};