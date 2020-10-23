// https://leetcode.com/problems/diameter-of-n-ary-tree/
// tags - tree
/**
 * // Definition for a Node.
 * function Node(val, children) {
 *    this.val = val === undefined ? 0 : val;
 *    this.children = children === undefined ? [] : children;
 * };
 */

/**
 * @param {Node} root
 * @return {number}
 */
var diameter = function(root) {
    let diam = 0;
    (function _getMaxNodesToLeaf(node) {
        if (node == null) {
            return 0;
        }
        
        let max = 0;
        let secondMax = 0;
        for (let c of node.children) {
            let n = _getMaxNodesToLeaf(c);
            if (n > max) {
                [max, secondMax] = [n, max];
            } else if (n > secondMax) {
                secondMax = n;
            }
        }
        
        // console.log('Checking ' + node.val + ': ' + max + ', ' + secondMax);
        
        // update the diameter
        if (max + secondMax > diam) {
            diam = max + secondMax;
        }
        
        return max + 1;
        
    })(root)
    
    return diam;
    
};