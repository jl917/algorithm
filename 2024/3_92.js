const { ListNode, getLinkedList } = require("./list_node");

var reverse = function (head) {
  const _head = new ListNode(0);
  _head.next = head;
  let tmp = _head.next;
  let prev = null;
  let tmp2 = null;

  while (tmp) {
    tmp2 = tmp.next;
    tmp.next = prev;
    prev = tmp;
    tmp = tmp2;
  }

  return { node: prev, lastNode: _head.next };
};

// https://leetcode.cn/problems/reverse-linked-list-ii/description/
/**
 * @param {ListNode} head
 * @param {number} left
 * @param {number} right
 * @return {ListNode}
 */
var reverseBetween = function (head, left, right) {
  const _head = new ListNode(0);
  _head.next = head;
  let prevNode = _head;
  let cur = 1;

  while (cur < left) {
    cur++;
    prevNode = prevNode.next;
  }
  let currentNode = prevNode.next;
  prevNode.next = null;

  let tmpCurrent = currentNode;

  while (cur < right) {
    cur++;
    tmpCurrent = tmpCurrent.next;
  }
  let nextNode = tmpCurrent.next;
  tmpCurrent.next = null;

  const { node, lastNode } = reverse(currentNode);
  prevNode.next = node;
  lastNode.next = nextNode;

  return _head.next;
};

const l1 = new ListNode(1);
l1.add(2);
l1.add(3);
l1.add(4);
l1.add(5);

reverseBetween(l1, 2, 4);
