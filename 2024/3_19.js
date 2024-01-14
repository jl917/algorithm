const { ListNode, getLinkedList } = require("./list_node");

var getTotalList = function (head) {
  let i = 0;
  while (head.next) {
    head = head.next;
    i++;
  }
  return i;
};

/**
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */
var removeNthFromEnd = function (head, n) {
  const _head = new ListNode(0);
  _head.next = head;

  let tmp = _head;
  const total = getTotalList(_head);
  let i = 0;
  while (total - n > i) {
    tmp = tmp.next;
    i++;
  }
  tmp.next = tmp.next.next;

  return _head.next;
};

const l1 = new ListNode(1);
l1.add(2);
l1.add(3);
l1.add(4);
l1.add(5);

removeNthFromEnd(l1, 2);
