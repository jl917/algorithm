/**
 * initialize your data structure here.
 */
var MinStack = function () {
  this.stack = [];
  this.min = [];
};

/**
 * @param {number} x
 * @return {void}
 */
MinStack.prototype.push = function (x) {
  this.stack.push(x);
  if (this.min.length === 0) {
    this.min.push(x);
  } else {
    this.min.push(Math.min(this.min[this.min.length - 1], x));
  }
};

/**
 * @return {void}
 */
MinStack.prototype.pop = function () {
  if (this.stack.length > 0) {
    this.stack.pop();
    this.min.pop();
  }
};

/**
 * @return {number}
 */
MinStack.prototype.top = function () {
  return this.stack[this.stack.length - (this.stack.length ? 1 : 0)];
};

/**
 * @return {number}
 */
MinStack.prototype.getMin = function () {
  return this.min[this.min.length - (this.min.length ? 1 : 0)];
};

/**
 * Your MinStack object will be instantiated and called as such:
 * var obj = new MinStack()
 * obj.push(x)
 * obj.pop()
 * var param_3 = obj.top()
 * var param_4 = obj.getMin()
 */

const minStack = new MinStack();
minStack.push(-2);
minStack.push(0);
minStack.push(-3);
console.log(minStack.getMin());
minStack.pop();
console.log(minStack.top());
console.log(minStack.getMin());
