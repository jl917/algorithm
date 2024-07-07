const { TreeNode } = require("./tree_node");
/**
 * @param {TreeNode} root
 * @return {number[]}
 */

var postorderTraversal = function (root) {
  const result = [];

  const traversal = function (node) {
    if (node === null) {
      return "";
    }

    traversal(node.left);
    traversal(node.right);
    result.push(node.val);
  };
  traversal(root);
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

// 1247865
console.log(postorderTraversal(t5));
