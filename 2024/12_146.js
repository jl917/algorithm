/**
 * @param {number} capacity
 */
var LRUCache = function (capacity) {
  this.max = capacity;
  this.map = new Map();
};

/**
 * @param {number} key
 * @return {number}
 */
LRUCache.prototype.get = function (key) {
  if (this.map.has(key)) {
    const value = this.map.get(key);
    this.map.delete(key);
    this.map.set(key, value);
    return value;
  }
  return -1;
};

/**
 * @param {number} key
 * @param {number} value
 * @return {void}
 */
LRUCache.prototype.put = function (key, value) {
  if (this.map.has(key)) {
    this.map.delete(key);
  }

  if (this.map.size >= this.max) {
    this.map.delete(this.map.keys().next().value);
  }

  this.map.set(key, value);
};

LRUCache.prototype.all = function (){
  console.log(this.map);
}

/**
 * Your LRUCache object will be instantiated and called as such:
 * var obj = new LRUCache(capacity)
 * var param_1 = obj.get(key)
 * obj.put(key,value)
 */

const l = new LRUCache(2);
l.put(1, 0); // 缓存是 {1=1}
l.put(2, 2); // 缓存是 {1=1, 2=2}
l.get(1); // 返回 1
console.log(l.all())

l.put(3, 3); // 该操作会使得关键字 2 作废，缓存是 {1=1, 3=3}
l.get(2); 

l.put(4, 4); // 该操作会使得关键字 1 作废，缓存是 {4=4, 3=3}
l.get(1); // 返回 -1 (未找到)
l.get(3); // 返回 3
l.get(4); // 返回 4
