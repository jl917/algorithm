/**
 * @param {number} k
 */
var MyCircularDeque = function (k) {
  this.max = k;
  this.arr = [];
};

/**
 * @param {number} value
 * @return {boolean}
 */
MyCircularDeque.prototype.insertFront = function (value) {
  if (this.isFull()) {
    return false;
  }
  this.arr.unshift(value);
  return true;
};

/**
 * @param {number} value
 * @return {boolean}
 */
MyCircularDeque.prototype.insertLast = function (value) {
  if (this.isFull()) {
    return false;
  }
  this.arr.push(value);
  return true;
};

/**
 * @return {boolean}
 */
MyCircularDeque.prototype.deleteFront = function () {
  if (this.isEmpty()) {
    return false;
  }
  this.arr.shift();
  return true;
};

/**
 * @return {boolean}
 */
MyCircularDeque.prototype.deleteLast = function () {
  if (this.isEmpty()) {
    return false;
  }
  this.arr.pop();
  return true;
};

/**
 * @return {number}
 */
MyCircularDeque.prototype.getFront = function () {
  return this.isEmpty() ? -1 : this.arr[0];
};

/**
 * @return {number}
 */
MyCircularDeque.prototype.getRear = function () {
  return this.isEmpty() ? -1 : this.arr[this.arr.length - 1];
};

/**
 * @return {boolean}
 */
MyCircularDeque.prototype.isEmpty = function () {
  return this.arr.length === 0;
};

/**
 * @return {boolean}
 */
MyCircularDeque.prototype.isFull = function () {
  return this.arr.length === this.max;
};

const circularDeque = new MycircularDeque(3); // 设置容量大小为3
circularDeque.insertLast(1); // 返回 true
circularDeque.insertLast(2); // 返回 true
circularDeque.insertFront(3); // 返回 true
circularDeque.insertFront(4); // 已经满了，返回 false
circularDeque.getRear(); // 返回 2
circularDeque.isFull(); // 返回 true
circularDeque.deleteLast(); // 返回 true
circularDeque.insertFront(4); // 返回 true
circularDeque.getFront(); // 返回 4
