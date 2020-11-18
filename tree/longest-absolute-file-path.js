// https://leetcode.com/problems/longest-absolute-file-path/
// tags - tree, string
/**
 * @param {string} input
 * @return {number}
 */
var lengthLongestPath = function(input) {
    function _isFile(input) {
        if (input.indexOf('\n') >= 0) {
            return false;
        }
        return input.indexOf('.') >= 0;
    }
    
    function _getRoots(tree) {
        const roots = [];
        const lines = tree.split('\n');
        for (let i = 0, root = []; i < lines.length; i++) {
            root.push(lines[i]);
            if (i === lines.length-1 || lines[i+1][0] !== '\t') {
                roots.push(root);
                root = [];
            }
        }
        return roots;
    }
    
    // do dfs on the tree
    let maxPathLen = 0;
    function _dfs(tree, pathLen = 0) {
        for (let root of _getRoots(tree)) {
            if (_isFile(root[0])) {
                maxPathLen = Math.max(maxPathLen, pathLen + root[0].length);
                continue;
            }
            
            let subtree = '';
            for (let i = 1; i < root.length; i++) {
                subtree += root[i].slice(1); // skip the first \t
                if (i < root.length-1) {
                    subtree += '\n';
                }
            }
            
            // console.log(subtree);
            if (subtree !== '') {
                _dfs(subtree, pathLen + root[0].length + 1); //  + 1 for the path separator
            }
            
        }
    }
    
    _dfs(input);
    return maxPathLen;
};