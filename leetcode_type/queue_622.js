/**
 * @param {number} k
 */
var MyCircularQueue = function (k) {
  this.max = k;
  this.queue = [];
};
MyCircularQueue.prototype.get = function () {
  console.log(this.queue);
};
/**
 * @param {number} value
 * @return {boolean}
 */
MyCircularQueue.prototype.enQueue = function (value) {
  if (this.queue.length < this.max) {
    this.queue.push(value);
    return true;
  }
  return false;
};

/**
 * @return {boolean}
 */
MyCircularQueue.prototype.deQueue = function () {
  if (this.queue.length) {
    this.queue.shift();
    return true;
  }
  return false;
};

/**
 * @return {number}
 */
MyCircularQueue.prototype.Front = function () {
  if (this.isEmpty()) {
    return -1;
  }
  return this.queue[0];
};

/**
 * @return {number}
 */
MyCircularQueue.prototype.Rear = function () {
  if (this.isEmpty()) {
    return -1;
  }
  return this.queue[this.queue.length - 1];
};

/**
 * @return {boolean}
 */
MyCircularQueue.prototype.isEmpty = function () {
  return this.queue.length === 0;
};

/**
 * @return {boolean}
 */
MyCircularQueue.prototype.isFull = function () {
  return this.queue.length === this.max;
};

/**
 * Your MyCircularQueue object will be instantiated and called as such:
 * var obj = new MyCircularQueue(k)
 * var param_1 = obj.enQueue(value)
 * var param_2 = obj.deQueue()
 * var param_3 = obj.Front()
 * var param_4 = obj.Rear()
 * var param_5 = obj.isEmpty()
 * var param_6 = obj.isFull()
 */

const obj = new MyCircularQueue(8);
console.log(obj.enQueue(3));
obj.get();
console.log(obj.enQueue(9));
obj.get();
console.log(obj.enQueue(5));
obj.get();
console.log(obj.enQueue(0));
obj.get();
console.log(obj.deQueue());
obj.get();
console.log(obj.deQueue());
obj.get();
console.log(obj.isEmpty());
console.log(obj.isEmpty());
console.log(obj.Rear());
console.log(obj.Rear());
console.log(obj.deQueue());
