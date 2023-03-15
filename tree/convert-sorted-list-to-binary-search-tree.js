// https://leetcode.com/problems/convert-sorted-list-to-binary-search-tree/
// tags - tree, linked-list
/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {ListNode} head
 * @return {TreeNode}
 */
var sortedListToBST = function (head) {
  // Find the length of the linked list.
  let length = 0;
  for (let node = head; node != null; node = node.next) {
    length++;
  }

  function convert(head, length) {
    if (head == null || length <= 0) return null;
    if (length === 1) return new TreeNode(head.val);
    const mid = Math.ceil(length / 2);
    // Traverse the linked list upto the (mid)th node
    let node = head;
    let i = mid - 1; // Go upto mid-1. Then node.next will be the middle node.
    while (i > 0) {
      node = node.next;
      i--;
    }
    // node is the middle node here.
    const leftBST = convert(head, mid - 1);
    const rightBST = convert(node.next, length - mid);
    return new TreeNode(node.val, leftBST, rightBST);
  }

  return convert(head, length);
};
