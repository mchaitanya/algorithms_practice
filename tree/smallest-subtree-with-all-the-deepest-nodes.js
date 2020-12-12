// https://leetcode.com/problems/smallest-subtree-with-all-the-deepest-nodes/
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
 * @return {TreeNode}
 */
var subtreeWithAllDeepest = function(root) {
    // solve recursively
    function _findLCADeepest(node, depth=0) {
        // return candidate LCA & its depth
        // don't call with null
        if (node.left == null && node.right == null) {
            return [node, depth];
        } else if (node.left == null) {
            return _findLCADeepest(node.right, depth+1);
        } else if (node.right == null) {
            return _findLCADeepest(node.left, depth+1);
        }
        
        const [leftLCA, leftDepth] = _findLCADeepest(node.left, depth+1);
        const [rightLCA, rightDepth] = _findLCADeepest(node.right, depth+1);
        if (leftDepth === rightDepth) {
            return [node, leftDepth];
        } else if (leftDepth > rightDepth) {
            return [leftLCA, leftDepth];
        } else {
            return [rightLCA, rightDepth];
        }
        
    }
    
    // root not null - at least 1 node in the tree
    const [lca, _] = _findLCADeepest(root);
    return lca;
    
};
