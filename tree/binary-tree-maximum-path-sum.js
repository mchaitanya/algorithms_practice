// https://leetcode.com/problems/binary-tree-maximum-path-sum/
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
var maxPathSum = function(root) {
    if (root == null) {
        return 0;
    }
    
    let maxSum = root.val;
    (function postOrderTraversal(node) {
        // the base case is the leaf node
        if (node.left == null && node.right == null) {
            return node.val;
        } else {
            // check left child
            const leftValue = node.left == null ? 0 : postOrderTraversal(node.left);
            // check right child
            const rightValue = node.right == null ? 0 : postOrderTraversal(node.right);
            
            maxSum = Math.max(maxSum, node.val);
            if (node.val < 0) {
                maxSum = node.left == null ? maxSum : Math.max(maxSum, leftValue);
                maxSum = node.right == null ? maxSum : Math.max(maxSum, rightValue);
                return Math.max(node.val, node.val + leftValue, node.val + rightValue); 
            } else {
                maxSum = Math.max(maxSum, node.val + leftValue);
                maxSum = Math.max(maxSum, node.val + rightValue);
                maxSum = Math.max(maxSum, node.val + leftValue + rightValue);
                return node.val + Math.max(leftValue, rightValue, 0);
            }
            
        }
        
    })(root);
    
    return maxSum;
    
};