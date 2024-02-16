const { ListNode, getLinkedList } = require("./list_node");
var getTotalList = function (head) {
  let i = 0;
  while (head.next) {
    head = head.next;
    i++;
  }
  return i + 1;
};
/**
 * @param {ListNode} headA
 * @param {ListNode} headB
 * @return {ListNode}
 */
var getIntersectionNode = function (headA, headB) {
  const aLength = getTotalList(headA);
  const bLength = getTotalList(headB);

  let tmpA = headA;
  let tmpB = headB;
  let gap = Math.abs(aLength - bLength);

  while (gap > 0) {
    if (aLength > bLength) {
      tmpA = tmpA.next;
    } else {
      tmpB = tmpB.next;
    }
    gap--;
  }

  if (tmpA === tmpB) {
    return tmpA;
  }

  while (tmpA) {
    if (tmpA === tmpB) {
      return tmpA;
    }

    tmpA = tmpA.next;
    tmpB = tmpB.next;
  }
  return null;
};

const l0 = new ListNode(8);
l0.add(4);
l0.add(5);

const l1 = new ListNode(4);
l1.add(1);

l1.next.next = l0;

const l2 = new ListNode(5);
l2.add(6);
l2.add(1);
l2.next.next.next = l0;

// const l0 = new ListNode(2);
// l0.add(4);

// const l1 = new ListNode(1);
// l1.add(9);
// l1.add(1);
// l1.next.next.next = l0;

// const l2 = new ListNode(3);
// l2.next = l0;
getIntersectionNode(l1, l2);
