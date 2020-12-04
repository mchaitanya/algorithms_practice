// https://leetcode.com/problems/increasing-order-search-tree/
// https://leetcode.com/explore/challenge/card/december-leetcoding-challenge/569/week-1-december-1st-december-7th/3553
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
var increasingBST = function(root) {
    // traverse in-order - turn into a linked-list
    const nodes = [];
    (function _dfs(node) {
        if (node == null) {
            return;
        }
        
        _dfs(node.left);
        nodes.push(node);
        _dfs(node.right);
        
    })(root);
    
    // set node's right child to the next node in the array
    for (let i = 0; i <= nodes.length-1; i++) {
        nodes[i].left = null;
        nodes[i].right = (i === nodes.length-1 ? null : nodes[i+1]);
    }
    
    // tree not empty - number of nodes >= 1
    return nodes[0];
    
};