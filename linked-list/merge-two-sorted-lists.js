// https://leetcode.com/problems/merge-two-sorted-lists/
// tags - linked-list
/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var mergeTwoLists = function(l1, l2) {
    let mergedHead = null;
    let currentNode = null;
    let currentNode1 = l1;
    let currentNode2 = l2;
    while (currentNode1 != null || currentNode2 != null) {
        let smallerNode = null;
        if (currentNode2 == null || (currentNode1 != null && (currentNode1.val <= currentNode2.val))) {
            smallerNode = currentNode1;
            currentNode1 = currentNode1.next;
        } else if (currentNode1 == null || (currentNode2 != null && (currentNode2.val <= currentNode1.val))) {
            smallerNode = currentNode2;
            currentNode2 = currentNode2.next;
        }
        
        if (mergedHead == null) {
            mergedHead = smallerNode;
        } else {
            currentNode.next = smallerNode;
        }
        
        currentNode = smallerNode;
        
    }
    
    return mergedHead;
    
};