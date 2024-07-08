const { TreeNode3 } = require("./tree_node");
/**
 * @param {TreeNode3} root
 * @return {number[]}
 */

/**
 * // Definition for a _Node.
 * function _Node(val, left, right, next) {
 *    this.val = val === undefined ? null : val;
 *    this.left = left === undefined ? null : left;
 *    this.right = right === undefined ? null : right;
 *    this.next = next === undefined ? null : next;
 * };
 */

/**
 * @param {_Node} root
 * @return {_Node}
 */
var connect = function (root) {
  if (!root) {
    return root;
  }

  const queue = [root];

  while (queue.length) {
    const length = queue.length;
    const dep = [];

    for (let i = 0; i < length; i++) {
      const currentItem = queue.pop();

      if (i !== 0) {
        currentItem.next = dep[0];
      }

      dep.unshift(currentItem);

      currentItem.right && queue.unshift(currentItem.right);
      currentItem.left && queue.unshift(currentItem.left);
    }
  }
  return root;
};

/*
    5
   / \
  4   6
 / \ / \
1  2 7  8
*/
const t5 = new TreeNode3(5);
const t4 = new TreeNode3(4);
const t6 = new TreeNode3(6);
const t1 = new TreeNode3(1);
const t2 = new TreeNode3(2);
const t7 = new TreeNode3(7);
const t8 = new TreeNode3(8);

t5.left = t4;
t5.right = t6;
t4.left = t1;
t4.right = t2;
t6.left = t7;
t6.right = t8;

// [ [ 5 ], [ 4, 6 ], [ 1, 2, 7, 8 ] ]
console.log(connect(t5));
