Array.prototype.groupBy = function (fn) {
  const result = {};
  for (let i = 0; i < this.length; i++) {
    const prop = fn.call({}, this[i], i, this);
    if (result[prop]) {
      result[prop].push(this[i]);
    } else {
      result[prop] = [this[i]];
    }
  }
  return result;
};


