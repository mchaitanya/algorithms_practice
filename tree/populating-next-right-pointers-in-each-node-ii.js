// https://leetcode.com/problems/populating-next-right-pointers-in-each-node-ii/
// tags - tree
/**
 * // Definition for a Node.
 * function Node(val, left, right, next) {
 *    this.val = val === undefined ? null : val;
 *    this.left = left === undefined ? null : left;
 *    this.right = right === undefined ? null : right;
 *    this.next = next === undefined ? null : next;
 * };
 */

/**
 * @param {Node} root
 * @return {Node}
 */
var connect = function(root) {
    // level order traversal seems the most natural way to do this
    if (root == null) {
        return null;
    }
    
    let level = [root];
    while (level.length > 0) {
        const nextLevel = [];
        for (let i = 0; i < level.length; i++) {
            // set the next pointer
            level[i].next = (i < level.length-1 ? level[i+1] : null);
            // populate the next level
            if (level[i].left != null) {
                nextLevel.push(level[i].left);
            }
            
            if (level[i].right != null) {
                nextLevel.push(level[i].right);
            }
            
        }
        level = nextLevel;
    }
    
    return root;
};