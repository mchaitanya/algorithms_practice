// https://leetcode.com/problems/synonymous-sentences/
// tags - string, union-find, backtracking
/**
 * @param {string[][]} synonyms
 * @param {string} text
 * @return {string[]}
 */
var generateSentences = function (synonyms, text) {
  const wordsSynonyms = new Map();
  for (const [s, t] of synonyms) {
    wordsSynonyms.set(s, s);
    wordsSynonyms.set(t, t);
  }

  // Apply union-find to connect all the synonyms.
  const uf = new UnionFind(wordsSynonyms);
  for (const [s, t] of synonyms) {
    uf.union(s, t);
  }

  // Map each root to its components.
  const component = new Map();
  const sorted = Array.from(wordsSynonyms.keys()).sort();
  for (const w of sorted) {
    const root = uf.find(w);
    if (!component.has(root)) component.set(root, []);
    component.get(root).push(w);
  }

  // Generate the sentences with backtracking.
  const sentences = [];
  const wordsText = text.split(" ");
  function build(wordsSentence) {
    const index = wordsSentence.length;
    if (index === wordsText.length) {
      sentences.push(wordsSentence.join(" "));
      return;
    }

    const word = wordsText[index];
    const synonyms = wordsSynonyms.has(word)
      ? component.get(uf.find(word))
      : [word];
    for (const syn of synonyms) {
      wordsSentence.push(syn);
      build(wordsSentence);
      wordsSentence.pop();
    }
  }

  build([]);

  return sentences;
};

class UnionFind {
  constructor(parent) {
    this.parent = parent;
  }

  find(x) {
    if (x === this.parent.get(x)) return x;
    const root = this.find(this.parent.get(x));
    this.parent.set(x, root); // Path compression.
    return root;
  }

  union(x, y) {
    const rootX = this.find(x);
    const rootY = this.find(y);
    if (rootX !== rootY) this.parent.set(rootY, rootX);
  }
}

// /**
//  * @param {string[][]} synonyms
//  * @param {string} text
//  * @return {string[]}
//  */
// var generateSentences = function (synonyms, text) {
//   const wordsText = text.split(" ");
//   const unique = new Set(wordsText);
//   for (const [s, t] of synonyms) {
//     unique.add(s).add(t); // Can chain adds to a set.
//   }

//   // Apply union-find to connect all the synonyms.
//   const words = Array.from(unique).sort();
//   const uf = new UnionFind(words.length);
//   for (const [s, t] of synonyms) {
//     uf.union(words.indexOf(s), words.indexOf(t));
//   }

//   // Map each root to its components.
//   const map = new Map();
//   for (let i = 0; i < words.length; i++) {
//     const root = uf.find(i);
//     if (!map.has(root)) map.set(root, []);
//     map.get(root).push(words[i]);
//   }

//   // Generate the sentences with backtracking.
//   const sentences = [];
//   function build(i, wordsSentence) {
//     if (i === wordsText.length) {
//       sentences.push(wordsSentence.join(" "));
//       return;
//     }

//     const root = uf.find(words.indexOf(wordsText[i]));
//     const synonyms = map.get(root);
//     for (const syn of synonyms) {
//       wordsSentence.push(syn);
//       build(i + 1, wordsSentence);
//       wordsSentence.pop();
//     }
//   }

//   build(0, []);

//   return sentences;
// };

// class UnionFind {
//   constructor(n) {
//     this.parent = new Array(n).fill(0).map((v, i) => i);
//   }

//   find(x) {
//     if (x === this.parent[x]) return x;
//     const root = this.find(this.parent[x]);
//     this.parent[x] = root; // Path compression.
//     return root;
//   }

//   union(x, y) {
//     const rootX = this.find(x);
//     const rootY = this.find(y);
//     if (rootX !== rootY) this.parent[rootY] = rootX;
//   }
// }
