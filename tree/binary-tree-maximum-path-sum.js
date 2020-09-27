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
    (function traversePostOrder(node) {
        // collect all possible candidates for the `maxSum`
        const maxSumCandidates = [node.val];
        // and the value returned from this node as we construct the path from here on up
        const returnValueCandidates = [node.val];

        // check left path
        let leftPathValue = 0;
        if (node.left != null) {
            leftPathValue = node.val + traversePostOrder(node.left);
            maxSumCandidates.push(leftPathValue);
            returnValueCandidates.push(leftPathValue);
        }
        
        // check right path
        let rightPathValue = 0;
        if (node.right != null) {
            rightPathValue = node.val + traversePostOrder(node.right);
            maxSumCandidates.push(rightPathValue);
            returnValueCandidates.push(rightPathValue);
        }

        if (node.left != null && node.right != null) {
            // take away the node value since it's counted twice, once in each path
            maxSumCandidates.push(leftPathValue + rightPathValue - node.val);
        }

        // update the `maxSum` - we have to check for leaf nodes too
        maxSum = Math.max(maxSum, ...maxSumCandidates);
        
        // when we hit a leaf node, we just end up returning its value
        return Math.max(...returnValueCandidates);
        
    })(root);
    
    return maxSum;
    
};