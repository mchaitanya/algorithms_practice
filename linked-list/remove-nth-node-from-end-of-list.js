// https://leetcode.com/problems/remove-nth-node-from-end-of-list/
// tags - linked-list
/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */
var removeNthFromEnd = function(head, n) {
    // two-pointer approach
    let slow = head;
    let fast = head;
    // see constraints: 1 <= n <= size
    // the fast pointer is n places ahead
    for (let i = 0; i < n; i++) {
        fast = fast.next;
    }
    
    // this is the case where the head has to be deleted
    if (fast == null) { 
        return head.next;
    }
    
    while (fast.next != null) {
        slow = slow.next;
        fast = fast.next;
    }
    slow.next = slow.next.next;
    return head;

    // // two-pass approach
    // // first pass - count how many nodes there are
    // let count = 0;
    // let node = head;
    // while (node != null) {
    //     count++;
    //     node = node.next;
    // }
    
    // // deleting the head is a special case
    // if (n === count) {
    //     return head.next;
    // }
    
    // // second pass - remove the node n places from the end
    // let i = 0;
    // node = head;
    // while (node != null) {
    //     i++;
    //     if (i === count - n) {
    //         node.next = node.next.next;
    //         break;
    //     }
    //     node = node.next;
    // }
    // return head;
    
};