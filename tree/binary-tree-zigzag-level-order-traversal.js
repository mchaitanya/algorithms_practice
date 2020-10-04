// https://leetcode.com/problems/binary-tree-zigzag-level-order-traversal/
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
 * @return {number[][]}
 */
var zigzagLevelOrder = function(root) {
    if (root == null) {
        return [];
    }
    
    const zigzagLevelValues = [];
    let levelNum = 1;
    let level = [root];
    while (level.length > 0) {
        const values = level.map(node => node.val);
        if (levelNum % 2 === 1) {
            zigzagLevelValues.push(values);
        } else {
            zigzagLevelValues.push(values.reverse());
        }
        
        let nextLevel = [];
        for (let node of level) {
            if (node.left) {
                nextLevel.push(node.left);
            }
            
            if (node.right) {
                nextLevel.push(node.right);
            }
        }
        
        level = nextLevel;
        levelNum++;
    }
    
    return zigzagLevelValues;
};