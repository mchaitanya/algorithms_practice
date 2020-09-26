// https://leetcode.com/problems/kth-smallest-element-in-a-bst/
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
 * @param {number} k
 * @return {number}
 */
var kthSmallest = function(root, k) {
    // traverse the tree in-order, return the kth element encountered
    let nodesSeen = 0;
    let _kthSmallest = 0;
    (function traverseInOrder(node) {        
        if (node.left != null && nodesSeen < k) {
            traverseInOrder(node.left);
        }
        
        nodesSeen++;
        if (nodesSeen === k) {
            _kthSmallest = node.val;
        }
        
        if (node.right != null && nodesSeen < k) {
            traverseInOrder(node.right);
        }
        
        
    })(root);
    
    return _kthSmallest;
};