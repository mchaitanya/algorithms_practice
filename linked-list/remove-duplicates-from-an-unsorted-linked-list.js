// https://leetcode.com/problems/remove-duplicates-from-an-unsorted-linked-list/
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
var deleteDuplicatesUnsorted = function (head) {
  // Store the counts of each node value.
  const map = new Map();
  let node = head;
  while (node != null) {
    const count = map.get(node.val) || 0;
    map.set(node.val, count + 1);
    node = node.next;
  }

  // Iterative
  let prev = null,
    newHead = null;
  let curr = head;
  while (curr != null) {
    if (map.get(curr.val) > 1) {
      if (prev != null) prev.next = curr.next;
    } else {
      if (prev == null) newHead = curr;
      prev = curr;
    }
    curr = curr.next;
  }
  return newHead;

  // function deleteDuplicates(node) {
  //     if (node == null) return null;
  //     if (map.get(node.val) > 1) {
  //         return deleteDuplicates(node.next);
  //     } else {
  //         node.next = deleteDuplicates(node.next);
  //         return node;
  //     }
  // }

  // return deleteDuplicates(head);
};
