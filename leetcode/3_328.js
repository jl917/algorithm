const { ListNode, getLinkedList } = require("./list_node");

// https://leetcode.cn/problems/odd-even-linked-list/description/
/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var oddEvenList = function (head) {
  if (!head) {
    return null;
  }

  const evenHead = head.next;
  let odd = head;
  let even = head.next;

  while (even && even.next) {
    odd.next = even.next;
    odd = odd.next;
    even.next = odd.next;
    even = even.next;
  }
  odd.next = evenHead;
  return head;
};

const l1 = new ListNode(1);
l1.add(2);
l1.add(3);
l1.add(4);
l1.add(5);

oddEvenList(l1);
