const { ListNode, getLinkedList } = require("./list_node");
// https://leetcode.cn/problems/merge-two-sorted-lists/
/**
 * @param {ListNode} list1
 * @param {ListNode} list2
 * @return {ListNode}
 */
var mergeTwoLists = function (list1, list2) {
  const _head = new ListNode(0);
  let tmp = _head;

  while (list1 !== null && list2 !== null) {
    if (list1.val > list2.val) {
      tmp.next = list2;
      list2 = list2.next;
    } else {
      tmp.next = list1;
      list1 = list1.next;
    }
    tmp = tmp.next;
  }
  tmp.next = list1 === null ? list2 : list1;
  getLinkedList(_head.next);
  return _head.next;
};

const l1 = new ListNode(1);
l1.add(2);
l1.add(4);

const l2 = new ListNode(1);
l2.add(3);
l2.add(4);

mergeTwoLists(l1, l2);
