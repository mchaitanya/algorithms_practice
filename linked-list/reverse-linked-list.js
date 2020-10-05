// https://leetcode.com/problems/reverse-linked-list/
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
var reverseList = function(head) {
    // base case - 0/1 node
    if (head == null || head.next == null) {
        return head;
    }

    // iteratively reverse the linked list
    // do it in-place - point the next links back as you traverse
    let node = head;
    let previous = null;
    while (node != null) {
        const temp = node.next;
        node.next = previous;
        previous = node;
        node = temp;
    }
    return previous;

    // // recursively reverse the linked list
    // const reversedSubList = reverseList(head.next);
    // // append the head to reversed sub list
    // let node = reversedSubList;
    // // when the loop finishes, the node's next pointer will be null
    // // i.e. we'll be at the tail
    // while (node != null && node.next != null) {
    //     node = node.next;
    // }
    // node.next = head;
    // head.next = null;
    // return reversedSubList;
};