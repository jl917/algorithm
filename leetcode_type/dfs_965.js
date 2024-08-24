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
  const stack = [root];
  const base = root.val;

  while (stack.length) {
    const length = stack.length;

    for (let i = 0; i < stack.length; i++) {
      const current = stack.pop();

      if (current.val !== base) {
        return false;
      }

      current.right && stack.push(current.right);
      current.left && stack.push(current.left);
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