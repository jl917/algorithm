const { TreeNode } = require("./tree_node");
/**
 * @param {TreeNode} root
 * @return {number[]}
 */

var preorderTraversal = function (root) {
  if (!root) {
    return [];
  }
  const result = [];
  const stack = [root];

  while (stack.length) {
    const currentItem = stack.pop();
    result.push(currentItem.val);
    currentItem.right && stack.push(currentItem.right);
    currentItem.left && stack.push(currentItem.left);
  }

  return result;
};

// const t1 = new TreeNode(1);
// const t2 = new TreeNode(2);
// const t3 = new TreeNode(3);

// t1.right = t2;
// t2.left = t3;

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

console.log(preorderTraversal(t5));
