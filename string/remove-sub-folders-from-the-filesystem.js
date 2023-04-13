// https://leetcode.com/problems/remove-sub-folders-from-the-filesystem/
// tags - string, tree
/**
 * @param {string[]} folder
 * @return {string[]}
 */
var removeSubfolders = function (folder) {
  // // Sort folder lexicographically.
  // folder.sort((p1, p2) => p2.localeCompare(p1));
  // console.log(folder);

  // const result = [];
  // while (folder.length > 0) {
  //     const path = folder.pop();
  //     while (folder.length > 0) {
  //         const top = folder[folder.length-1];
  //         if (!top.startsWith(path) || top[path.length] !== '/') break;
  //         folder.pop();
  //     }
  //     result.push(path);
  // }
  // return result;

  // Build a prefix tree.
  const root = new Node("", false);
  scan: for (const path of folder) {
    let i = 1;
    let node = root;
    const segments = path.split("/");
    traversal: while (i < segments.length) {
      if (node.terminal) continue scan;
      const segment = segments[i++];
      const children = node.children;
      for (const child of children) {
        if (child.val === segment) {
          node = child;
          continue traversal;
        }
      }
      node = new Node(segment, false);
      children.push(node);
    }
    node.terminal = true;
  }

  // function viz(node) {
  //     console.group(node.val, (node.terminal ? '*' : ''));
  //     for (const child of node.children) {
  //         viz(child);
  //     }
  //     console.groupEnd();
  // }
  // viz(root);

  const result = [];
  function dfs(node, path) {
    if (node.terminal) {
      result.push([...path, node.val].join("/"));
      return;
    }
    path.push(node.val);
    for (const child of node.children) {
      dfs(child, path);
    }
    path.pop();
  }
  dfs(root, []);
  return result;
};

class Node {
  constructor(val, terminal, children) {
    this.val = val;
    this.terminal = terminal;
    this.children = children || [];
  }
}
