const { ListNode, getLinkedList } = require("./list_node");

// https://leetcode.cn/problems/reverse-linked-list/description/
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var reverseList = function (head) {
  let cur = head;
  let prev = null;
  let tmp = null;

  while (cur !== null) {
    tmp = cur.next;
    cur.next = prev;
    prev = cur;
    cur = tmp;
  }

  getLinkedList(prev);
};

const l1 = new ListNode(1);
l1.add(2);
l1.add(3);
l1.add(4);
l1.add(5);

reverseList(l1);
