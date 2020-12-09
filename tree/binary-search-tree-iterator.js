// https://leetcode.com/problems/binary-search-tree-iterator/
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
 */
var BSTIterator = function(root) {
    // we'll create a generator here that yields the next node value
    function* _generate(node) {
        // traverse the tree in-order
        if (node != null) {
            yield* _generate(node.left);
            yield node.val;
            yield* _generate(node.right);
        }
    }
    
    // store the generator in the class - we'll call `next` on this to get the next value
    this._generator = _generate(root);
    
    // track current value
    this._currentValue = null;
    // track if `hasNext` was just called - so we don't invoke the generator again
    this._justCalledHasNext = null;
    
};

/**
 * @return {number}
 */
BSTIterator.prototype.next = function() {
    if (this._justCalledHasNext) {
        this._justCalledHasNext = false;
        return this._currentValue;
    }
    
    const {done, value} = this._generator.next();
    this._currentValue = value;
    if (!done) {
        return value;
    }
    
};

/**
 * @return {boolean}
 */
BSTIterator.prototype.hasNext = function() {
    if (this._justCalledHasNext) {
        return this._currentValue != undefined;
    }
    
    const {done, value} = this._generator.next();
    this._justCalledHasNext = true;
    this._currentValue = value;
    return !done;
    
};

/** 
 * Your BSTIterator object will be instantiated and called as such:
 * var obj = new BSTIterator(root)
 * var param_1 = obj.next()
 * var param_2 = obj.hasNext()
 */