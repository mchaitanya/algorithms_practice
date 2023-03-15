// https://leetcode.com/problems/palindrome-linked-list/
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
 * @return {boolean}
 */
var isPalindrome = function (head) {
  // Find the middle node. Reverse the second half & compare with the first.
  // Given head not null.
  if (head.next == null) return true;
  let slow = head,
    fast = head.next;
  while (fast != null && fast.next != null) {
    slow = slow.next;
    fast = fast.next.next;
  }

  const mid = fast == null ? slow : slow.next;
  // Reverse the list starting from node 'mid'.
  let curr = mid,
    prev = null;
  while (curr != null) {
    const next = curr.next;
    curr.next = prev;
    prev = curr;
    curr = next;
  }
  // prev will be the head of the reversed list.

  let node1 = head,
    node2 = prev;
  while (node1 != null && node2 != null) {
    if (node1.val !== node2.val) return false;
    node1 = node1.next;
    node2 = node2.next;
  }
  return true;

  // const vals = [];
  // for  (let node = head; node != null; node = node.next) {
  //     vals.push(node.val);
  // }

  // for (let left = 0, right = vals.length-1; left < right; left++, right--) {
  //     if (vals[left] !== vals[right]) return false;
  // }
  // return true;
};
