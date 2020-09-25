// https://leetcode.com/problems/maximum-depth-of-binary-tree/
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
var maxDepth = function(root) {
    // SIMPLE RECURSION
    if (root == null) {
        return 0;
    } else {
        return Math.max(maxDepth(root.left), maxDepth(root.right)) + 1;
    }


    // TRAVERSE DEPTH-FIRST
    // let max = 0;
    // (function dfs(node, depth = 0) {
    //     if (node == null) {
    //         if (depth > max) {
    //             max = depth;
    //         }
    //         // implicit return
    //     } else {
    //         dfs(node.left, depth+1);
    //         dfs(node.right, depth+1);
    //     }
    // })(root);
    // return max;


    // TRAVERSE BREADTH-FIRST
    // if (root == null) {
    //     return 0;
    // }
    
    // let depth = 0;
    // const levels = [[root]];
    // while (levels.length > 0) {
    //     depth++;
    //     const level = levels.pop();
    //     const nextLevel = [];
    //     for (const node of level) {
    //         if (node.left != null) {
    //             nextLevel.push(node.left);
    //         }
    //         if (node.right != null) {
    //             nextLevel.push(node.right);
    //         }
    //     }
        
    //     if (nextLevel.length > 0) {
    //         levels.push(nextLevel);
    //     }
        
    // }
    // return depth;
};