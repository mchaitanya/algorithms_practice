// https://leetcode.com/problems/filling-bookcase-shelves/
// tags - dynamic-programming
/**
 * @param {number[][]} books
 * @param {number} shelfWidth
 * @return {number}
 */
var minHeightShelves = function (books, shelfWidth) {
  // Apply dynamic programming.
  // For each book we must decide whether to place it on the current shelf or the next one.

  // const maxBookHeight = Math.max(...books.map((b) => b[1]));
  // const memo = new Array(books.length);
  // for (let b = 0; b < books.length; b++) {
  //     memo[b] = new Array(maxBookHeight + 1);
  //     for (let h = 0; h <= maxBookHeight; h++) {
  //         memo[b][h] = new Array(shelfWidth+1).fill(null);
  //     }
  // }
  const memo = new Map();

  // State
  // b - Current book
  // shelfHeight - Current height of the shelf
  // shelfSpace - Space remaining on the current shelf
  // Return the minimum height required from book b on
  function dp(b, shelfHeight, shelfSpace) {
    if (b === books.length) return shelfHeight;
    const key = `${b}|${shelfHeight}|${shelfSpace}`;
    if (memo.has(key)) return memo.get(key);
    // if (memo[b][shelfHeight][shelfSpace] != null) return memo[b][shelfHeight][shelfSpace];

    const [bookThickness, bookHeight] = books[b];
    let minHeight = Infinity;
    if (shelfHeight === 0) {
      // There's no other book on this shelf, we must place the current book here.
      minHeight = dp(b + 1, bookHeight, shelfSpace - bookThickness);
    } else {
      // We can always skip the current shelf.
      minHeight = Math.min(minHeight, shelfHeight + dp(b, 0, shelfWidth));
      if (shelfSpace >= bookThickness) {
        // There's enough space for the current book. Try putting it on this shelf.
        minHeight = Math.min(
          minHeight,
          dp(
            b + 1,
            Math.max(bookHeight, shelfHeight),
            shelfSpace - bookThickness
          )
        );
      }
    }

    memo.set(key, minHeight);
    // memo[b][shelfHeight][shelfSpace] = minHeight;
    return minHeight;
  }

  return dp(0, 0, shelfWidth);
};
