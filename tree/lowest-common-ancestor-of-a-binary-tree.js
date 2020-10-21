// https://leetcode.com/problems/lowest-common-ancestor-of-a-binary-tree/
// tags - tree
/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
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
    // console.log(p);
    // console.log(q);
    
//     // APPROACH 1
//     // find path to p & q
//     let pathp = [], pathq = [];
//     // dfs to find the paths
//     (function dfs(node, pathSoFar = []) {
//         if (node == null) {
//             return;
//         }
        
//         const newPath = [ ...pathSoFar, node];
//         if (node.val === p.val) {
//             pathp = newPath;
//         } else if (node.val === q.val) {
//             pathq = newPath;
//         }
        
//         if (pathp.length === 0 || pathq.length === 0) {
//             dfs(node.left, newPath);
//             dfs(node.right, newPath);
//         }
        
//     })(root);
    
//     // console.log(pathp);
//     // console.log(pathq);
    
//     // check where the paths intersect
//     for (let i = Math.min(pathp.length, pathq.length) - 1; i >= 0; i--) {
//         if (pathp[i] === pathq[i]) {
//             return pathp[i];
//         }
//     }
    
//     return root;
    
    
    // APPROACH 2 - RECURSION
    // for each node ask if the subtree rooted at that node contains p & q 
    // the one with the max depth will be the answer
    let lca = undefined;
    // returns a tuple of 2 booleans
    function _treeContainsPAndQ(node) {
        if (node == null) {
            return [false, false];
        }
        
        const [leftSubtreeContainsP, leftSubtreeContainsQ] = _treeContainsPAndQ(node.left);
        if (leftSubtreeContainsP && leftSubtreeContainsQ) {
            return [true, true];
        }
        
        const [rightSubtreeContainsP, rightSubtreeContainsQ] = _treeContainsPAndQ(node.right);
        if (rightSubtreeContainsP && rightSubtreeContainsQ) {
            return [true, true];
        }
        
        // const pInLeft = 'p in left - ' + leftSubtreeContainsP;
        // const qInLeft = 'q in left - ' + leftSubtreeContainsQ;
        // const pInRight = 'p in right - ' + rightSubtreeContainsP;
        // const qInRight = 'q in right - ' + rightSubtreeContainsQ;
        // console.log(node.val + ' ' + pInLeft + ', ' + qInLeft + ', ' + pInRight + ', ' + qInRight);
        
        // since we traverse post-order
        // the first time any of the conditions below matches, we'll have hit the the lowest common ancestor
        if (node.val === p.val) {
            if (leftSubtreeContainsQ || rightSubtreeContainsQ) {
                lca = (lca === undefined ? node : lca);
                return [true, true];
            } else {
                return [true, false];
            }
        }
        
        if (node.val === q.val) {
            if (leftSubtreeContainsP || rightSubtreeContainsP) {
                lca = (lca === undefined ? node : lca);
                return [true, true];
            } else {
                return [false, true];
            }
        }
        
        if ((leftSubtreeContainsP && rightSubtreeContainsQ) || (leftSubtreeContainsQ && rightSubtreeContainsP)) {
            lca = (lca === undefined ? node : lca);
            return [true, true];
        }
        
        return [leftSubtreeContainsP || rightSubtreeContainsP, leftSubtreeContainsQ || rightSubtreeContainsQ];
        
    }
    
    _treeContainsPAndQ(root);
    
    return lca;
    
};