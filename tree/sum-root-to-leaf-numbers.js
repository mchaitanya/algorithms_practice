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
    console.group(root.val);
    (function dfs(node, pathNumber = 0) {
        // we make sure node will never be null
        const newPathNumber = (10*pathNumber + node.val);
        // when you hit a leaf, update the overall sum
        if (node.left == null && node.right == null) {
            console.log('number = ' + newPathNumber);
            sum += newPathNumber;
            return;
        }
        
        if (node.left != null) {
            console.group(node.left.val)
            dfs(node.left, newPathNumber);
            console.groupEnd();
        }
        
        if (node.right != null) {
            console.group(node.right.val);
            dfs(node.right, newPathNumber);
            console.groupEnd();
        }
        
    })(root);
    console.groupEnd();
    
    return sum;
    
};