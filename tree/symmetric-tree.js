// https://leetcode.com/problems/symmetric-tree/
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
 * @return {boolean}
 */
var isSymmetric = function(root) {
    // solve with level-order traversal
    let level = [root];
    while (level.length > 0) {
        // console.log(level);
        for (let i = 0, j = level.length-1; i < j; i++, j--) {
            const left = level[i], right = level[j];
            if (left != null && right != null) {
                if (left.val !== right.val) {
                    return false;
                } else {
                    continue;
                }
            }
            
            if (left !== right) {
                return false;
            }
        }
        
        let nextLevel = [];
        for (let i = 0; i < level.length; i++) {
            if (level[i] != null) {
                nextLevel.push(level[i].left, level[i].right);
            }
        }
        level = nextLevel;
    }
    
    return true;
    
};