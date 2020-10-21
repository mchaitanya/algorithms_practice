// https://leetcode.com/problems/construct-binary-tree-from-preorder-and-inorder-traversal/
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
 * @param {number[]} preorder
 * @param {number[]} inorder
 * @return {TreeNode}
 */
var buildTree = function(preorder, inorder) {
    // 3, 9, 20, 15, 7
    // root = 3
    // left = 9
      // 9
    // right = 20, 15, 7
      // root = 20
      // left = 15
      // right = 7
    
    const map = new Map();
    for (let i = 0; i < inorder.length; i++) {
        map.set(inorder[i], i);
    }
    
    function _buildTree(preorder) {
        if (preorder.length == 0) {
            return null;
        }
        
        const root = new TreeNode(preorder[0], null, null);
        if (preorder.length == 1) {
            return root;
        }
        
        const leftPreorder = [];
        const rightPreorder = [];
        for (let i = 1; i < preorder.length; i++) {
            if (map.get(preorder[0]) > map.get(preorder[i])) {
                leftPreorder.push(preorder[i]);
            } else {
                rightPreorder.push(preorder[i]);
            }
        }
        
        root.left = _buildTree(leftPreorder);
        root.right = _buildTree(rightPreorder);
        
        return root;
        
    }
    
    return _buildTree(preorder);
    
};