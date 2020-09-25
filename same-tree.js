// https://leetcode.com/problems/same-tree/
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
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {boolean}
 */
var isSameTree = function(p, q) {
    let pLevel = [p];
    let qLevel = [q]; // this'll always be of the same size as pLevel
    while (pLevel.length > 0) {
        // compare the values at this level
        for (let i = 0; i < pLevel.length; i++) {
            let pNodeValue = pLevel[i] && pLevel[i].val;
            let qNodeValue = qLevel[i] && qLevel[i].val;
            if (pNodeValue !== qNodeValue) {
                return false;
            }
        }
        
        let pNextLevel = [];
        let qNextLevel = [];
        for (let i = 0; i < pLevel.length; i++) {
            if (pLevel[i] != null) {
                pNextLevel.push(pLevel[i].left, pLevel[i].right);
            }
            if (qLevel[i] != null) {
                qNextLevel.push(qLevel[i].left, qLevel[i].right);
            }
        }
        
        pLevel = pNextLevel;
        qLevel = qNextLevel;
        
    }
    return true;
};