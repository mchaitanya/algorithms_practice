// https://leetcode.com/problems/lowest-common-ancestor-of-a-binary-search-tree/
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
 * @param {TreeNode} q
 * @return {TreeNode}
 */
var lowestCommonAncestor = function(root, p, q) {
    // make sure p is smaller than/equal to q
    if (p.val > q.val) {
        [p, q] = [q, p];
    }
    
    // dfs, at each node check if it's ancestor of p & q, pick one with max depth
    // root will not be null - there are at least 2 nodes
    const lca = (function _findLCA(node) {
        // we never let node be null
        if (node.val < p.val && node.right != null) {
            // check right subtree
            return _findLCA(node.right);
        } 
        
        if (node.val > q.val && node.left != null) {
            // check left subtree
            return _findLCA(node.left);
        }
        
        // otherwise
        // node.val === p.val
        // node.val > p.val && node.val < q.val
        // node.val === q.val
        return node;
        
    })(root);
    
    return lca;
    
};