// https://leetcode.com/problems/merge-two-sorted-lists/
// tags - linked-list
/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var mergeTwoLists = function (l1, l2) {
  // Solve iteratively.
  let head = new ListNode();
  let curr = head,
    node1 = list1,
    node2 = list2;
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
  return head.next;

  // // Solve with recursion.
  // if (list1 == null) {
  //   return list2;
  // } else if (list2 == null) {
  //   return list1;
  // } else if (list1.val <= list2.val) {
  //   // list1 & list2 are both not null here.
  //   list1.next = mergeTwoLists(list1.next, list2);
  //   return list1;
  // } else {
  //   list2.next = mergeTwoLists(list1, list2.next);
  //   return list2;
  // }

  // let curr = null, merged = null;
  // let n1 = l1, n2 = l2;
  // while (n1 != null || n2 != null) {
  //     // there's at least one node left in either of the lists
  //     // -100 <= Node.val <= 100
  //     let val1 = n1?.val ?? 101;
  //     let val2 = n2?.val ?? 101;

  //     let smaller = null;
  //     if (val1 < val2) {
  //         // console.log([val1, val2], val1);
  //         smaller = n1;
  //         n1 = n1.next;
  //     } else {
  //         // console.log([val1, val2], val2);
  //         smaller = n2;
  //         n2 = n2.next;
  //     }

  //     if (merged == null) {
  //         merged = smaller;
  //     } else {
  //         curr.next = smaller;
  //     }

  //     curr = smaller;

  // }

  // return merged;
};
