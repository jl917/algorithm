/**
 * @param {string[]} tokens
 * @return {number}
 */
var evalRPN = function (tokens) {
  const oprator = "+-*/";
  const stack = [];
  for (const e of tokens) {
    if (oprator.includes(e)) {
      const after = stack.pop();
      const before = stack.pop();

      if (e === "+") {
        stack.push(before + after);
      } else if (e === "-") {
        stack.push(before - after);
      } else if (e === "*") {
        stack.push(before * after);
      } else {
        stack.push(parseInt(before / after, 10));
      }
    } else {
      stack.push(parseInt(e, 10));
    }
  }

  return stack[0];
};

console.log(evalRPN(["2","1","+","3","*"]));
console.log(evalRPN(["4","13","5","/","+"]));
console.log(evalRPN(["10","6","9","3","+","-11","*","/","*","17","+","5","+"]));