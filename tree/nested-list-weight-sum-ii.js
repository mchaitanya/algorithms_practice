// https://leetcode.com/problems/nested-list-weight-sum-ii/
// tags - tree
/**
 * // This is the interface that allows for creating nested lists.
 * // You should not implement it, or speculate about its implementation
 * function NestedInteger() {
 *
 *     Return true if this NestedInteger holds a single integer, rather than a nested list.
 *     @return {boolean}
 *     this.isInteger = function() {
 *         ...
 *     };
 *
 *     Return the single integer that this NestedInteger holds, if it holds a single integer
 *     Return null if this NestedInteger holds a nested list
 *     @return {integer}
 *     this.getInteger = function() {
 *         ...
 *     };
 *
 *     Set this NestedInteger to hold a single integer equal to value.
 *     @return {void}
 *     this.setInteger = function(value) {
 *         ...
 *     };
 *
 *     Set this NestedInteger to hold a nested list and adds a nested integer elem to it.
 *     @return {void}
 *     this.add = function(elem) {
 *         ...
 *     };
 *
 *     Return the nested list that this NestedInteger holds, if it holds a nested list
 *     Return null if this NestedInteger holds a single integer
 *     @return {NestedInteger[]}
 *     this.getList = function() {
 *         ...
 *     };
 * };
 */
/**
 * @param {NestedInteger[]} nestedList
 * @return {number}
 */
var depthSumInverse = function(nestedList) {
    // nestedList is a NestedInteger[] - this is essentially an n-ary tree
    // isInteger, 
    // if true, we're at a leaf - `getInteger`
    // if false, get the childten - `getList`
    
    function _getMaxDepth(nestedList) {
        // make sure this is called only when the nestedList contains another list
        let max = 0;
        for (let c of nestedList) {
            let depth = c.isInteger() ? 1 : _getMaxDepth(c.getList());
            if (depth > max) {
                max = depth;
            }
        }
        return max+1;
        
    };
    
    const maxDepth = _getMaxDepth(nestedList);
    // console.log(maxDepth);
    // now just dfs the tree & calculate the sum along the way
    let sum = 0;
    function _dfs(nested, depth = 1) {
        if (nested.isInteger()) {
            sum += (nested.getInteger() * (maxDepth - depth))
        }
        
        for (let c of nested.getList()) {
            _dfs(c, depth+1);
        }
    }
    
    for (let nested of nestedList) {
        _dfs(nested);
    }
    
    return sum;
    
};