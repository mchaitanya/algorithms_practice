// https://leetcode.com/problems/longest-univalue-path/
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
var longestUnivaluePath = function(root) {
    // do DFS postorder - keep track of max path length along the way
    let maxNodes = 0;
    function _dfs(node) {
        if (node == null) {
            return 0;
        }
        
        const maxCandidates = [1];
        const returnCandidates = [1];
        
        const leftLen = _dfs(node.left);
        if (node.val === node.left?.val) {
            returnCandidates.push(leftLen + 1);
            maxCandidates.push(leftLen + 1);
        }
        
        const rightLen = _dfs(node.right);
        if (node.val === node.right?.val) {
            returnCandidates.push(rightLen + 1);
            maxCandidates.push(rightLen + 1);
        }

        if (node.val === node.left?.val && node.val === node.right?.val) {
            maxCandidates.push(leftLen + rightLen + 1);
        }
        
        maxNodes = Math.max(maxNodes, ...maxCandidates);
        return Math.max(...returnCandidates);
    }
    
    _dfs(root);
    return (maxNodes > 0 ? maxNodes-1 : 0); // #edges = #nodes - 1

};