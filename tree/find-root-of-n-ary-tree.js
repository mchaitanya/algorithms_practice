// https://leetcode.com/problems/find-root-of-n-ary-tree/
// tags - tree
/**
 * // Definition for a Node.
 * function Node(val, children) {
 *    this.val = val === undefined ? 0 : val;
 *    this.children = children === undefined ? [] : children;
 * };
 */

/**
 * @param {Node[]} tree
 * @return {Node}
 */
var findRoot = function(tree) {
    // the root doesn't have any parent
    const set = new Set(tree);
    for (let node of tree) {
        for (let child of node.children) {
            set.delete(child);
        }
    }
    
    // there should be one node left in the set - the root
    return [...set][0];
    
};