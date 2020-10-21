// https://leetcode.com/problems/construct-binary-tree-from-preorder-and-postorder-traversal/
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
 * @param {number[]} pre
 * @param {number[]} post
 * @return {TreeNode}
 */
var constructFromPrePost = function(pre, post) {
    if (pre.length == 0) {
        return null;
    }
    
    const root = new TreeNode(pre[0], null, null);
    if (pre.length == 1) {
        return root;
    }
    
    const leftPre = [];
    const leftPost = [];
    for (let i = post.indexOf(pre[1]), j = 1; i >= 0; i--, j++) {
        leftPre.push(pre[j]);
        leftPost.unshift(post[i]);
    }
    root.left = constructFromPrePost(leftPre, leftPost);
    
    const rightPre = pre.slice(leftPre.length + 1);
    const rightPost = post.slice(leftPost.length, post.length - 1);
    root.right = constructFromPrePost(rightPre, rightPost);
    
    return root;
    
};