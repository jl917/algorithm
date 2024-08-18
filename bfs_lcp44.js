const { TreeNode } = require("./leetcode/tree_node");
/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
var numColor = function (root) {
  const queue = [root];
  const set = new Set();

  while (queue.length) {
    const length = queue.length;
    for (let i = 0; i < length; i++) {
      const current = queue.shift();
      current.left && queue.push(current.left);
      current.right && queue.push(current.right);
      set.add(current.val);
    }

  }
  return set.size;
};


/*
    1
   / \
  3   2
 /   /
1   2
*/
const t1 = new TreeNode(1);
const t2 = new TreeNode(2);
const t3 = new TreeNode(3);
const t4 = new TreeNode(1);
const t5 = new TreeNode(2);

t1.left = t3;
t3.left = t4;
t1.right = t2;
t2.left = t5;

console.log(numColor(t1));