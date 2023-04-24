// https://leetcode.com/problems/check-if-word-can-be-placed-in-crossword/
// tags - array
/**
 * @param {character[][]} board
 * @param {string} word
 * @return {boolean}
 */
var placeWordInCrossword = function (board, word) {
  const m = board.length;
  const n = board[0].length;
  const EMPTY = " ",
    BLOCKED = "#";

  // Scan the board L-R.
  for (let r = 0; r < m; r++) {
    for (let c = 0, i = 0; c < n; c++) {
      if (board[r][c] === BLOCKED) {
        i = 0;
      } else if (board[r][c] === EMPTY || board[r][c] === word[i]) {
        i++;
        if (i === word.length && (c + 1 === n || board[r][c + 1] === BLOCKED)) {
          return true;
        }
      } else {
        while (c + 1 < n && board[r][c + 1] !== BLOCKED) c++;
      }
    }
  }

  // Scan the board R-L.
  for (let r = 0; r < m; r++) {
    for (let c = n - 1, i = 0; c >= 0; c--) {
      if (board[r][c] === BLOCKED) {
        i = 0;
      } else if (board[r][c] === EMPTY || board[r][c] === word[i]) {
        i++;
        if (i === word.length && (c === 0 || board[r][c - 1] === BLOCKED)) {
          return true;
        }
      } else {
        while (c - 1 >= 0 && board[r][c - 1] !== BLOCKED) c--;
      }
    }
  }

  // Scan the board T-B.
  for (let c = 0; c < n; c++) {
    for (let r = 0, i = 0; r < m; r++) {
      if (board[r][c] === BLOCKED) {
        i = 0;
      } else if (board[r][c] === EMPTY || board[r][c] === word[i]) {
        i++;
        if (i === word.length && (r + 1 === m || board[r + 1][c] === BLOCKED)) {
          return true;
        }
      } else {
        while (r + 1 < m && board[r + 1][c] !== BLOCKED) r++;
      }
    }
  }

  // Scan the board B-T.
  for (let c = 0; c < n; c++) {
    for (let r = m - 1, i = 0; r >= 0; r--) {
      if (board[r][c] === BLOCKED) {
        i = 0;
      } else if (board[r][c] === EMPTY || board[r][c] === word[i]) {
        i++;
        if (i === word.length && (r === 0 || board[r - 1][c] === BLOCKED)) {
          return true;
        }
      } else {
        while (r - 1 >= 0 && board[r - 1][c] !== BLOCKED) r--;
      }
    }
  }

  return false;
};
