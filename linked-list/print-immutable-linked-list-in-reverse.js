// https://leetcode.com/problems/print-immutable-linked-list-in-reverse/
// tags - linked-list
/**
 * // This is the ImmutableListNode's API interface.
 * // You should not implement it, or speculate about its implementation.
 * function ImmutableListNode() {
 *    @ return {void}
 *    this.printValue = function() { // print the value of this node.
 *       ...
 *    };
 *
 *    @return {ImmutableListNode}
 *    this.getNext = function() { // return the next node.
 *       ...
 *    };
 * };
 */

/**
 * @param {ImmutableListNode} head
 * @return {void}
 */
var printLinkedListInReverse = function (head) {
  const next = head.getNext();
  if (next != null) {
    printLinkedListInReverse(next);
  }
  head.printValue();

  //   let node = head;
  //   const nodes = [];
  //   while (node != null) {
  //     nodes.push(node);
  //     node = node.getNext();
  //   }

  //   for (let i = nodes.length - 1; i >= 0; i--) {
  //     nodes[i].printValue();
  //   }
};
