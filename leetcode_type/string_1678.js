/**
 * @param {string} command
 * @return {string}
 */
var interpret = function (command) {
  const keys = [
    ["()", "o"],
    ["(al)", "al"],
  ];
  for (const [k, v] of keys) {
    command = command.replaceAll(k, v);
  }

  return command;
};

console.log(interpret("G()(al)"));
