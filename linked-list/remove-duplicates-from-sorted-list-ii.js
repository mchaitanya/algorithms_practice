// https://leetcode.com/problems/remove-duplicates-from-sorted-list-ii/
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
 * @return {ListNode}
 */
var deleteDuplicates = function(head) {
    if (head == null) {
        return null;
    }
    
    // solve recursively - process one number at a time
    let count = 1;
    let node = head.next;
    while (node != null && node.val === head.val) {
        node = node.next;
        count++;
    }
    
    if (count === 1) { // head value is unique
        head.next = deleteDuplicates(node);
        return head;
    } else {
        return deleteDuplicates(node);
    }
    
};