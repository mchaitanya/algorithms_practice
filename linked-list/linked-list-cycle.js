// https://leetcode.com/problems/linked-list-cycle/
// tags - linked-list
/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} head
 * @return {boolean}
 */
var hasCycle = function(head) {
    // two pointer method
    // base - 0/1 node
    if (head == null || head.next == null) {
        return false;
    }
    
    let slow = head;
    let fast = head.next.next;
    while (fast != null && fast.next != null) {
        if (slow === fast) {
            return true;
        }
        slow = slow.next;
        fast = fast.next.next;
    }   
    return false;
    
//     // most obvious way - maintain a set of seen nodes - O(n) space
//     const seen = new Set();
//     let node = head;
//     while (node != null) {
//         if (seen.has(node)) {
//             return true;
//         }
//         seen.add(node);
//         node = node.next;
//     }    
//     return false;
    
};