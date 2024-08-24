const { TreeNode } = require("../leetcode/tree_node");
/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
var countNodes = function (root) {
  let count = 0;
  if (!root) {
    return count;
  }
  const queue = [root];

  while (queue.length) {
    const length = queue.length;

    for (let i = 0; i < length; i++) {
      const current = queue.shift();
      count++;

      current.left && queue.push(current.left);
      current.right && queue.push(current.right);
    }
  }

  return count;
};


/*
     1
    / \
   2    3
  / \  /
 4  5 6
*/
const t1 = new TreeNode(1);
const t2 = new TreeNode(2);
const t3 = new TreeNode(3);
const t4 = new TreeNode(4);
const t5 = new TreeNode(5);
const t6 = new TreeNode(6);

t1.left = t2;
t1.right = t3
t2.left = t4;
t2.right = t5;
t4.left = t6;

console.log(countNodes(t1));