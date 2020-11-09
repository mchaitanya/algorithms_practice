// https://leetcode.com/problems/convert-binary-number-in-a-linked-list-to-integer/
// tags - linked-list, binary
/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {number}
 */
var getDecimalValue = function(head) {
    // head will not be null
    let dec = 0;
    let node = head;
    while (node != null) {
        // dec = dec*2 + node.val;
        dec = (dec << 1) | node.val;
        node = node.next;
    }
    return dec;
};