// https://leetcode.com/problems/intersection-of-two-linked-lists/
// tags - linked-list
/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} headA
 * @param {ListNode} headB
 * @return {ListNode}
 */
var getIntersectionNode = function (headA, headB) {
  function getLength(node) {
    let length = 0;
    while (node != null) {
      node = node.next;
      length++;
    }
    return length;
  }

  function advance(node, count) {
    while (count > 0) {
      node = node.next;
      count--;
    }
    return node;
  }

  const lenA = getLength(headA);
  const lenB = getLength(headB);
  let nodeA = lenA < lenB ? headA : advance(headA, lenA - lenB);
  let nodeB = lenA < lenB ? advance(headB, lenB - lenA) : headB;
  while (nodeA != null && nodeB != null) {
    if (nodeA === nodeB) return nodeA;
    nodeA = nodeA.next;
    nodeB = nodeB.next;
  }
  return null;
};
