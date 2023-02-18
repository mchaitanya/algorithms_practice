// https://leetcode.com/problems/simplify-path/
// tags -stack
/**
 * @param {string} path
 * @return {string}
 */
var simplifyPath = function (path) {
  // Solve with a stack.
  const stack = [];
  const segments = path.split("/");
  for (const s of segments) {
    if (s === "" || s === ".") {
      continue; // Empty segments can be created from consecutive slashes.
    } else if (s === "..") {
      stack.pop(); // In JS, it's okay to pop from an empty array.
    } else {
      stack.push(s);
    }
  }
  return "/" + stack.join("/");
};
