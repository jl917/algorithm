const { ListNode, getLinkedList } = require("./list_node");

/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var swapPairs = function (head) {
  const _head = new ListNode(0);
  _head.next = head;

  let temp = _head;

  while (temp.next && temp.next.next) {
    const node1 = temp.next;
    const node2 = temp.next.next;

    temp.next = node2;
    node1.next = node2.next;
    node2.next = node1;

    temp = node1;
  }
  return _head.next;
};

const l1 = new ListNode(1);
l1.add(2);
l1.add(3);
l1.add(4);
swapPairs(l1);
