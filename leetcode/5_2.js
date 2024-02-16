const { ListNode, getLinkedList } = require("./list_node");

/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */

var addTwoNumbers = function (l1, l2) {
  const _head = new ListNode(0);

  let tmp = _head;
  let rest = 0;
  while (rest || l1 || l2) {
    const val1 = l1 ? l1.val : 0;
    const val2 = l2 ? l2.val : 0;

    const total = val1 + val2 + rest;
    rest = total >= 10 ? 1 : 0;

    tmp.next = new ListNode(total % 10);
    tmp = tmp.next;
    l1 = l1 ? l1.next : null;
    l2 = l2 ? l2.next : null;
  }

  return _head.next;
};

const l1 = new ListNode(2);
l1.add(4);
l1.add(3);

const l2 = new ListNode(5);
l2.add(6);
l2.add(4);

addTwoNumbers(l1, l2);
