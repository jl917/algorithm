const { TreeNode } = require("./tree_node");
/**
 * @param {TreeNode} root
 * @return {number[]}
 */

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
 * @return {number[][]}
 */
var levelOrder = function (root) {
  if (!root) {
    return [];
  }

  const result = [];
  const queue = [root];

  while (queue.length) {
    const length = queue.length;
    const dep = [];
    for (let i = 0; i < length; i++) {
      const current = queue.shift();
      dep.push(current.val);

      current.left && queue.push(current.left);
      current.right && queue.push(current.right);
    }
    result.push(dep);
  }
  return result;
};

/*
    5
   / \
  4   6
 / \ / \
1  2 7  8
*/
const t5 = new TreeNode(5);
const t4 = new TreeNode(4);
const t6 = new TreeNode(6);
const t1 = new TreeNode(1);
const t2 = new TreeNode(2);
const t7 = new TreeNode(7);
const t8 = new TreeNode(8);

t5.left = t4;
t5.right = t6;
t4.left = t1;
t4.right = t2;
t6.left = t7;
t6.right = t8;

// [ [ 5 ], [ 4, 6 ], [ 1, 2, 7, 8 ] ]
console.log(levelOrder(t5));
