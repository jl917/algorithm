const { ListNode, getLinkedList } = require("./list_node");

/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var deleteDuplicates = function (head) {
  let tmp = head;

  while (tmp.next) {
    if (tmp.val === tmp.next.val) {
      tmp.next = tmp.next.next;
    } else {
      tmp = tmp.next;
    }
  }
  getLinkedList(head);
  return head;
};

const l1 = new ListNode(1);
l1.add(1);
l1.add(1);

deleteDuplicates(l1);
