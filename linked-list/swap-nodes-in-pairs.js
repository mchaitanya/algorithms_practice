// https://leetcode.com/problems/swap-nodes-in-pairs/
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
var swapPairs = function (head) {
  // Solve with recursion.
  if (head == null || head.next == null) return head;
  // head && head.next aren't null here.
  const subList = swapPairs(head.next.next);
  const newHead = head.next;
  newHead.next = head;
  head.next = subList;
  return newHead;
};
