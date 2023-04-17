// https://leetcode.com/problems/find-duplicate-file-in-system/
// tags - string
/**
 * @param {string[]} paths
 * @return {string[][]}
 */
var findDuplicate = function (paths) {
  // Map the content to the paths of files that contain it.
  const map = new Map();
  for (const str of paths) {
    const [dir, ...files] = str.split(" ");
    for (const file of files) {
      const bracketIndex = file.indexOf("(");
      const name = file.slice(0, bracketIndex);
      const content = file.slice(bracketIndex, file.length - 1);
      if (!map.has(content)) map.set(content, []);
      map.get(content).push(dir + "/" + name);
    }
  }
  return Array.from(map.values()).filter((files) => files.length > 1);
};
