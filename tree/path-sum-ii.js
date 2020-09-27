// https://leetcode.com/problems/path-sum-ii/
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
 * @param {number} sum
 * @return {number[][]}
 */
var pathSum = function(root, sum) {
    if (root == null) {
        return [];
    }
    
    const paths = [];
    (function dfs(node, sumSoFar = 0, pathSoFar = []) {
        const newSum = sumSoFar + node.val;
        const newPath = pathSoFar.concat(node.val);
        
        // base case - hit the leaf
        if (node.left == null && node.right == null) {
            if (newSum == sum) {
                paths.push(newPath);
            }
        } else {
            if (node.left) {
                dfs(node.left, newSum, newPath);
            }
            
            if (node.right) {
                dfs(node.right, newSum, newPath);
            }
        }
    })(root);
    
    return paths;
    
};