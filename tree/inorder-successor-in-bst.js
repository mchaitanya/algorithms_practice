// https://leetcode.com/problems/inorder-successor-in-bst/
// tags - tree
/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @param {TreeNode} p
 * @return {TreeNode}
 */
var inorderSuccessor = function(root, p) {
    // p is guaranteed to be in the BST
    if (root == null) {
        return null;
    }
    
    // traverse in-order
    function _findSuccessor(node) {
        if (node != null) {
            let left = _findSuccessor(node.left);
            if (left != null) {
                return left;
            }
            
            if (node.val > p.val) {
                return node;
            }
            
            return _findSuccessor(node.right);
            
        }
        
    };
    
    return _findSuccessor(root);
};