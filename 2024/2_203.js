const { ListNode, getLinkedList } = require("./list_node");

/**
 * @param {ListNode} head
 * @param {number} val
 * @return {ListNode}
 */
var removeElements = function (head, val) {
  const _head = new ListNode(0);
  _head.next = head;
  let tmpHead = _head;

  while (tmpHead.next) {
    const node = tmpHead.next;

    if (node.val === val) {
      tmpHead.next = tmpHead.next.next;
    } else {
      tmpHead = tmpHead.next;
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
removeElements(l1, 6);
