// https://leetcode.com/problems/next-greater-node-in-linked-list/
// tags - stack, linked-list
/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {number[]}
 */
var nextLargerNodes = function (head) {
  // Solve with a monotonic stack.
  const result = [];
  let i = 0;
  let node = head;
  const stack = []; // Store the index & the value in the stack.
  while (node != null) {
    result.push(0);
    while (stack.length > 0) {
      const [topIdx, topVal] = stack[stack.length - 1];
      if (topVal >= node.val) break;
      result[topIdx] = node.val;
      stack.pop();
    }
    stack.push([i, node.val]);
    node = node.next;
    i++;
  }
  return result;
};
