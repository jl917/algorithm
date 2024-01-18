/**
 * @param {number[]} temperatures
 * @return {number[]}
 */
var dailyTemperatures = function (temperatures) {
  const stack = [];
  const result = new Array(temperatures.length).fill(0);

  for(let i =0; i<temperatures.length; i++){

    while(stack.length && temperatures[stack[stack.length - 1]] < temperatures[i]){
      const li = stack.pop();
      result[li] = i - li;
    }

    stack.push(i)
  }

  return result
};

console.log(dailyTemperatures([73, 74, 75, 71, 69, 72, 76, 73]));
console.log(dailyTemperatures([30, 40, 50, 60]));
console.log(dailyTemperatures([30, 60, 90]));
console.log(dailyTemperatures([73, 73, 73]));
console.log(dailyTemperatures([89,62,70,58,47,47,46,76,100,70]))