const { ListNode, getLinkedList } = require("../leetcode/list_node");
/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} val
 * @return {ListNode}
 */
var removeElements = function (head, val) {
  const _head = new ListNode(0);
  _head.next = head;
  let current = _head;

  while (current) {
    if (current.next && current.next.val === val) {
      const tmp = current.next.next;
      current.next = tmp;
    } else {
      current = current.next;
    }
  }
  return _head.next;
};

const l1 = new ListNode(1);
l1.add(2);
l1.add(6);
l1.add(3);
l1.add(4);
l1.add(5);
l1.add(6);

console.log(getLinkedList(removeElements(l1, 6)));
