// https://leetcode.com/problems/serialize-and-deserialize-binary-tree/
// tags - tree
/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */

/**
 * Encodes a tree to a single string.
 *
 * @param {TreeNode} root
 * @return {string}
 */
var serialize = function(root) {
    // traverse level-order, start with root
    // keep left & right children encoded as `parent_L_left_R_right`
    if (root == null) {
        return '';
    }
    
    let level = [root];
    const entries = [root.val];
    do {
        let nextLevel = [];
        for (let node of level) {
            if (node.left == null && node.right == null) {
                continue;
            }

            let entry = node.val + 'L';
            if (node.left) {
                nextLevel.push(node.left);
                entry += node.left.val;
            }

            entry += 'R';
            if (node.right) {
                nextLevel.push(node.right);
                entry += node.right.val;
            }

            entries.push(entry);

        }
        level = nextLevel;
        
    } while (level.length > 0)
        
    return entries.join(',');
    
};

/**
 * Decodes your encoded data to tree.
 *
 * @param {string} data
 * @return {TreeNode}
 */
var deserialize = function(data) {
    if (data === '') {
        return null;
    }
    
    const entries = data.split(',');
    const root = new TreeNode(Number(entries[0]));
    let i = 1; // start checking from entry index 1
    let level = [root];
    while (level.length > 0) {
        let nextLevel = [];
        let j = 0;
        while (j < level.length && i < entries.length) {
            const node = level[j];
            // split the entry to get the child nodes if any
            const [parentValue, leftValue, rightValue] = entries[i].split(/[L|R]/);
            
            if (node.val === Number(parentValue)) {
                if (leftValue !== '') {
                    node.left = new TreeNode(Number(leftValue));
                    nextLevel.push(node.left);
                }

                if (rightValue !== '') {
                    node.right = new TreeNode(Number(rightValue));
                    nextLevel.push(node.right);
                }
                
                i = i+1; // move on to the next entry
            }
            
            j = j+1; // move on to the next node on this level
            
        }
        level = nextLevel;
    }
    return root;
};

/**
 * Your functions will be called as such:
 * deserialize(serialize(root));
 */

function TreeNode(val) {
    this.val = val;
    this.left = this.right = null;
}

// run some tests here
const node1 = new TreeNode(-7);
const node2 = new TreeNode(-6);
const node3 = new TreeNode(-6);
const node4 = new TreeNode(5);
const node5 = new TreeNode(9);

// connect up the nodes
node1.left = node2;
node1.right = node3;
node2.left = node4;
node3.left = node5;

const serialized = serialize(node1);
console.log(serialized); // -7,-7L-6,-7R-6,-6L5,-6L9
// console.log(deserialize(serialized));
