// https://leetcode.com/problems/goal-parser-interpretation/
// tags - string
/**
 * @param {string} command
 * @return {string}
 */
var interpret = function (command) {
  let result = "";
  for (let i = 0; i < command.length; ) {
    if (command[i] === "G") {
      result += "G";
      i++;
    } else if (command[i] === "(" && command[i + 1] === ")") {
      // Given command is valid. Okay to access i+1.
      result += "o";
      i += 2;
    } else {
      result += "al";
      i += 4;
    }
  }
  return result;

  // const mapping = new Map([
  //     ['G', 'G'],
  //     ['()', 'o'],
  //     ['(al)', 'al'],
  // ]);

  // let result = '';
  // for (let i = 0, chunk = ''; i < command.length; i++) {
  //     chunk += command[i];
  //     if (mapping.has(chunk)) {
  //         result += mapping.get(chunk);
  //         chunk = '';
  //     }
  // }
  // return result;
};
