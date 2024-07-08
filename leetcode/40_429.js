const { TreeNode2 } = require("./tree_node");
/**
 * // Definition for a _Node.
 * function _Node(val,children) {
 *    this.val = val;
 *    this.children = children;
 * };
 */

/**
 * @param {_Node|null} root
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
      const currentItem = queue.shift();

      currentItem && dep.push(currentItem.val);
      currentItem?.children && queue.push(...currentItem.children);
    }

    result.push(dep);
  }
  return result;
};

/*
    1
   / \
  3   2    4
 / \
5  6
*/
const t1 = new TreeNode2(1);
const t3 = new TreeNode2(3);
const t2 = new TreeNode2(2);
const t4 = new TreeNode2(4);
const t5 = new TreeNode2(5);
const t6 = new TreeNode2(6);

t1.children = [t3, t2, t4];
t3.children = [t5, t6];
// [ [ 1 ], [ 3, 2, 4 ], [ 5, 6 ] ]
console.log(levelOrder(t1));
