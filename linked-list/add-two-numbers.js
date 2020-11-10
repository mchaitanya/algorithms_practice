// https://leetcode.com/problems/add-two-numbers/
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
var addTwoNumbers = function(l1, l2) {
    let prev = null;
    let curr = new ListNode(0), head = curr;
    
    let n1 = l1, n2 = l2;
    while (n1 != null || n2 != null) { // exit when both become null
        let val1 = (n1 == null ? 0 : n1.val);
        let val2 = (n2 == null ? 0 : n2.val);
        let sum = val1 + val2 + curr.val;
        
        curr.val = sum % 10;
        curr.next = new ListNode(Math.floor(sum/10)); // holds the carry
        prev = curr;
        curr = curr.next;
        
        n1 = (n1 == null ? null : n1.next);
        n2 = (n2 == null ? null : n2.next);
        
    }
    
    // take off leading zero
    if (curr.val === 0) {
        prev.next = null;
    }
    
    return head;
    
};