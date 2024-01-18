var MyQueue = function () {
  this.is = [];
  this.os = [];
};

/**
 * @param {number} x
 * @return {void}
 */
MyQueue.prototype.push = function (x) {
  this.is.push(x);
};

/**
 * @return {number}
 */
MyQueue.prototype.pop = function () {
  if (!this.os.length) {
    while (this.is.length) {
      this.os.push(this.is.pop());
    }
  }
  return this.os.pop();
};

/**
 * @return {number}
 */
MyQueue.prototype.peek = function () {
  if(this.os.length){
    return this.os[this.os.length - 1]
  }
  return this.is[0]
};

/**
 * @return {boolean}
 */
MyQueue.prototype.empty = function () {
  return this.is.length === 0 && this.os.length === 0;
};


const myQueue = new MyQueue();
myQueue.push(1); // queue is: [1]
myQueue.push(2); // queue is: [1, 2] (leftmost is front of the queue)
myQueue.peek(); // return 1
myQueue.pop(); // return 1, queue is [2]
myQueue.empty(); // return false