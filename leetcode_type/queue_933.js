var RecentCounter = function () {
  this.queue = [];
};

/**
 * @param {number} t
 * @return {number}
 */
RecentCounter.prototype.ping = function (t) {
  this.queue.push(t);
  let count = 0;
  for (let i = 0; i < this.queue.length; i++) {
    if (this.queue[i] >= t - 3000) {
      break;
    }
    count++;
  }
  if (count) {
    this.queue = this.queue.slice(count);
  }
  return this.queue.length;
};

/**
 * Your RecentCounter object will be instantiated and called as such:
 * var obj = new RecentCounter()
 * var param_1 = obj.ping(t)
 */

const obj = new RecentCounter();
obj.ping(1);
obj.ping(100);
obj.ping(3001);
obj.ping(3002);
