// https://leetcode.com/problems/delete-node-in-a-linked-list/
// tags - linked-list
/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} node
 * @return {void} Do not return anything, modify node in-place instead.
 */
var deleteNode = function(node) {
    // do it in-place
    // we're given the node to be deleted - how do we fix the previous node??
    
    // okay copy the values leftward
    let prev = null;
    let curr = node;
    while (curr.next != null) {
        curr.val = curr.next.val;
        prev = curr;
        curr = curr.next;
    }
    // when we exit the loop, curr will be the tail, prev one before it
    prev.next = null;
    
};