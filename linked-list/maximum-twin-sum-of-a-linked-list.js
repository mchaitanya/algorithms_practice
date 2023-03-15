// https://leetcode.com/problems/maximum-twin-sum-of-a-linked-list/
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
 * @return {number}
 */
var pairSum = function (head) {
  // Find the middle. Reverse the second half. Then iterate over the 2 halves.
  // Given there are >= 2 nodes in the linked list.
  let slow = head,
    fast = head.next;
  while (fast != null && fast.next != null) {
    slow = slow.next;
    fast = fast.next.next;
  }

  // Reverse the list starting from 'slow.next'.
  let curr = slow.next,
    prev = null;
  while (curr != null) {
    const next = curr.next;
    curr.next = prev;
    prev = curr;
    curr = next;
  }
  // prev will be the head of the reversed list.

  let maxTwinSum = 0;
  let node1 = head,
    node2 = prev;
  while (node1 != null && node2 != null) {
    const twinSum = node1.val + node2.val;
    if (twinSum > maxTwinSum) {
      maxTwinSum = twinSum;
    }
    node1 = node1.next;
    node2 = node2.next;
  }
  return maxTwinSum;
};
