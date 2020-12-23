// https://leetcode.com/problems/balanced-binary-tree/
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
 * @return {boolean}
 */
var isBalanced = function(root) {    
    // the left & right subtree of every node differ in height by no more than 1
    function _checkBalance(node) {
        // returns tuple [isBalanced, height]
        if (node == null) {
            return [true, 0];
        }
        
        const [isLeftBalanced, leftHeight] = _checkBalance(node.left);
        const [isRightBalanced, rightHeight] = _checkBalance(node.right);
        return [
            isLeftBalanced && isRightBalanced && Math.abs(leftHeight-rightHeight) <= 1, 
            Math.max(leftHeight, rightHeight) + 1
        ];
        
    }
    
    return _checkBalance(root)[0];
    
};
