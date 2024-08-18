const { TreeNode } = require("./leetcode/tree_node");
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
var sumOfLeftLeaves = function (root) {

  const queue = [root];
  let total = 0;
  while (queue.length) {
    const current = queue.shift();

    if (current.left) {
      queue.push(current.left)
      if (!current.left.left && !current.left.right) {
        total += current.left.val;
      }
    }
    if (current.right) {
      queue.push(current.right)
    }
  }
  return total;
};


/*
    1
   / \
  9   20
     / \
   15   7
*/
const t1 = new TreeNode(3);
const t2 = new TreeNode(9);
const t3 = new TreeNode(20);
const t4 = new TreeNode(15);
const t5 = new TreeNode(7);

t1.left = t2;
t1.right = t3
t3.left = t4;
t3.right = t5;

console.log(sumOfLeftLeaves(t1));