/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */

function ListNode(val, next) {
  this.val = val === undefined ? 0 : val;
  this.next = next === undefined ? null : next;
}

ListNode.prototype.add = function (value) {
  let head = this;

  while (head.next) {
    head = head.next;
  }

  head.next = new ListNode(value);
};

function getLinkedList(head) {
  let result = head.val;
  while (head.next) {
    result += ` => ${head.next.val}`;
    head = head.next;
  }
  console.log(result);
}

module.exports = { ListNode, getLinkedList };
