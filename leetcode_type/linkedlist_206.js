/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */

const { ListNode, getLinkedList } = require("../leetcode/list_node");

/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var reverseList = function (head) {
  const _head = new ListNode(0);
  const list = [];
  let tmp = head;
  let tmp2 = _head;

  while (tmp) {
    list.push(tmp);
    tmp = tmp.next;
  }

  while (list.length) {
    const item = list.pop();
    item.next = null;
    tmp2.next = item;
    tmp2 = tmp2.next;
  }

  return _head.next;
};

const l1 = new ListNode(1);
l1.add(2);
l1.add(3);
l1.add(4);
l1.add(5);

console.log(reverseList(l1));

// console.log(getLinkedList(l1));
