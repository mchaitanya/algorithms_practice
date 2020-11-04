// https://leetcode.com/problems/add-two-numbers-ii/
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
var addTwoNumbers = function(l1, l2) {
    function _convertToNumber(list) {
        let str = '';
        let node = list;
        while (node != null) {
            str += node.val;
            node = node.next;
        }
        return BigInt(str);
    }
    
    function _convertToList(num) {
        const digits = String(num).split('');
        const head = new ListNode();
        let node = head;
        for (let i = 0; i < digits.length; i++) {
            node.val = Number(digits[i]);
            if (i !== digits.length - 1) {
                node.next = new ListNode();
                node = node.next;
            }
        }
        return head;
    }
    
    const n1 = _convertToNumber(l1);
    const n2 = _convertToNumber(l2);
    // console.log(n1, n2);
    
    return _convertToList(n1+n2);
    // return null;
    
};