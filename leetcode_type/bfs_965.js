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
 * @return {boolean}
 */
var isUnivalTree = function (root) {
  const queue = [root];
  const base = root.val;

  while (queue.length) {
    const length = queue.length;

    for (let i = 0; i < length; i++) {
      const current = queue.shift();

      if (current.val !== base) {
        return false;
      }

      current.left && queue.push(current.left);
      current.right && queue.push(current.right);
    }
  }

  return true;

};

const t1 = new TreeNode(1);
const t2 = new TreeNode(1);
const t3 = new TreeNode(1);
const t4 = new TreeNode(1);
const t5 = new TreeNode(1);
const t6 = new TreeNode(1);

t1.left = t2;
t1.right = t3;
t2.left = t4
t2.right = t5;
t3.left = t6


console.log(isUnivalTree(t1));