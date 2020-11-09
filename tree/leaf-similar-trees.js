// https://leetcode.com/problems/leaf-similar-trees/
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
 * @param {TreeNode} root1
 * @param {TreeNode} root2
 * @return {boolean}
 */
var leafSimilar = function(root1, root2) {
    // get both the leaf seqs and compare
    
    function _getLeafSeq(node) {
        // can solve recursively
        if (node == null) {
            return [];
        } else if (node.left == null && node.right == null) {
            return [node.val];
        }
        
        return _getLeafSeq(node.left).concat(_getLeafSeq(node.right));
    }
    
    const leafSeq1 = _getLeafSeq(root1);
    // console.log(leafSeq1);
    const leafSeq2 = _getLeafSeq(root2);
    // console.log(leafSeq2);
    
    if (leafSeq1.length !== leafSeq2.length) {
        return false;
    }
    
    // sure that lengths are equal
    for (let i = 0; i < leafSeq1.length; i++) {
        if (leafSeq1[i] !== leafSeq2[i]) {
            return false;
        }
    }
    
    return true;
    
};