function TreeNode(val, left, right) {
  this.val = val === undefined ? 0 : val;
  this.left = left === undefined ? null : left;
  this.right = right === undefined ? null : right;
}

function TreeNode2(val, children) {
  this.val = val === undefined ? 0 : val;
  this.children = children?.length ? children : null;
}

function TreeNode3(val, left, right) {
  this.val = val === undefined ? 0 : val;
  this.left = left === undefined ? null : left;
  this.right = right === undefined ? null : right;
  this.next = null;
}

module.exports = { TreeNode, TreeNode2, TreeNode3 };
