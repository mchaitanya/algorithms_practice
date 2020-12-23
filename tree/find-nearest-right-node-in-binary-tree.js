// https://leetcode.com/problems/find-nearest-right-node-in-binary-tree/
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
 * @param {TreeNode} u
 * @return {TreeNode}
 */
var findNearestRightNode = function(root, u) {
    // traverse tree in level-order
    let level = [root];
    while (level.length > 0) {
        const nextLevel = [];
        for (let i = 0; i < level.length; i++) {
            let node = level[i];
            if (node.val === u.val) {
                return i < level.length-1 ? level[i+1] : null;
            }
            
            [node.left, node.right]
                .filter(n => n != null)
                .forEach(n => nextLevel.push(n));
            
        }
        
        level = nextLevel;
    }
    
    // shouldn't reach here - u is given to be a node in the tree
    return null;
    
};