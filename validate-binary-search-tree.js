// https://leetcode.com/problems/validate-binary-search-tree/
// tags - tree, BST
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
 * @return {boolean}
 */
var isValidBST = function(root) {
    // Number.MIN_VALUE is not the smallest value possible, in face it is >= 0
    return (function _isValidBST(node, minPermitted = -Infinity, maxPermitted = +Infinity) {
        // check this node
        if (node == null) {
            return true;
        } 
        
        if (node.val <= minPermitted || node.val >= maxPermitted) {
            return false;
        }
        
        // recursively check child nodes
        return _isValidBST(node.left, minPermitted, node.val) && _isValidBST(node.right, node.val, maxPermitted);
        
        
    })(root);
    
};