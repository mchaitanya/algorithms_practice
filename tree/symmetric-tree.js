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
    // // solve with level-order traversal
    // let level = [root];
    // while (level.length > 0) {
    //     const left = [], right = [];
    //     for (let i = 0, j = level.length-1; i <= j; i++, j--) {
    //         let ns = level[i], ne = level[j];
    //         if (ns != null || ne != null) {
    //             if (ns?.val !== ne?.val) {
    //                 return false;
    //             }
                
    //             // they must both have the same value
    //             if (i <= j) {
    //                 left.push(ns.left, ns.right);
    //             }

    //             if (i < j) {
    //                 right.push(ne.right, ne.left);
    //             }
                
    //         }
    //         // both are null
            
    //     }
        
    //     level = [...left, ...(right.reverse())];
        
    // }
    
    // return true;

    // solve recursively
    if (root == null) {
        return true;
    }
    
    function _isMirror(left, right) {
        if (left != null || right != null) {
            if (left?.val !== right?.val) {
                return false;
            }
            
            // both values must equal
            return _isMirror(left.left, right.right) && _isMirror(left.right, right.left);
            
        }

        // both must be null
        return true;
    }
    
    return _isMirror(root.left, root.right);

};