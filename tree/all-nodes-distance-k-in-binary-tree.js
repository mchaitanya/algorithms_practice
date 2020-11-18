// https://leetcode.com/problems/all-nodes-distance-k-in-binary-tree/
// tags - tree, graph
/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @param {TreeNode} target
 * @param {number} K
 * @return {number[]}
 */
var distanceK = function(root, target, K) {
    function _print(level) {
        console.log(level.map(n => n.val));
    }
    
    // convert the tree to a graph - run bfs from given node
    const al = new Map(); // adjacency list
    function _addEdge(v1, v2) {
        if (!al.has(v1.val)) {
            al.set(v1.val, []);
        }
        al.get(v1.val).push(v2);
    }
    
    function _dfs(node) {
        // ensure node never null
        if (node.left != null) {
            _addEdge(node, node.left); // edge bidirectional
            _addEdge(node.left, node);
            _dfs(node.left);
        }
        
        if (node.right != null) {
            _addEdge(node, node.right);
            _addEdge(node.right, node);
            _dfs(node.right);
        }
    }
    
    // root not null - tree given non-empty
    _dfs(root);
    // adjacency list populated
    
    // run bfs from given node
    let depth = 0;
    let vals = [];
    let level = [target];
    const seen = new Set([target.val]);
    
    while (level.length > 0) {
        // _print(level);
        if (depth === K) {
            vals = level.map(n => n.val);
            break;
        }
        
        const nextLevel = [];
        for (let n of level) {
            for (let nb of al.get(n.val) || []) {
                if (seen.has(nb.val)) continue;
                seen.add(nb.val);
                nextLevel.push(nb);
            }
        }
        level = nextLevel;
        depth++;
    }
    
    return vals;
};