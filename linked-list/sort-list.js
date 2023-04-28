// https://leetcode.com/problems/sort-list/
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
var sortList = function (head) {
  // Merge sort the list.
  if (head == null || head.next == null) return head;

  // There are at least 2 nodes. Find the middle.
  let slow = head,
    fast = head.next;
  while (fast != null && fast.next != null) {
    slow = slow.next;
    fast = fast.next.next;
  }
  // slow is the middle node of the list now.

  const list1 = head,
    list2 = slow.next;
  slow.next = null;

  // Merge the sorted lists.
  let merged = new ListNode();
  let curr = merged,
    node1 = sortList(list1),
    node2 = sortList(list2);
  while (node1 != null || node2 != null) {
    const val1 = node1?.val ?? Infinity;
    const val2 = node2?.val ?? Infinity;
    if (val1 < val2) {
      curr.next = node1;
      node1 = node1.next;
    } else {
      curr.next = node2;
      node2 = node2.next;
    }
    curr = curr.next;
  }
  return merged.next;
};
