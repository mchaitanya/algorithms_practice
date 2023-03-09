// https://leetcode.com/problems/24-game/
// tags - backtracking
/**
 * @param {number[]} cards
 * @return {boolean}
 */
var judgePoint24 = function (cards) {
  // We're gonna backtrack Jack.
  const operators = ["+", "-", "*", "/"];

  function combine(left, right, operator) {
    const result = [];
    switch (operator) {
      case "+":
        result.push(left[0] * right[1] + right[0] * left[1]); // Numerator
        result.push(left[1] * right[1]); // Denominator
        break;
      case "-":
        result.push(left[0] * right[1] - right[0] * left[1]);
        result.push(left[1] * right[1]);
        break;
      case "*":
        result.push(left[0] * right[0]);
        result.push(left[1] * right[1]);
        break;
      case "/":
        result.push(left[0] * right[1]);
        result.push(left[1] * right[0]);
    }
    return result;
  }

  function make24(fractions) {
    if (fractions.length === 1) {
      return fractions[0][0] / fractions[0][1] === 24;
    }

    for (let i = 0; i < fractions.length; i++) {
      for (let j = 0; j < fractions.length; j++) {
        if (i === j) continue;
        const remaining = fractions.filter((f, k) => k !== i && k !== j);
        for (const operator of operators) {
          const result = combine(fractions[i], fractions[j], operator);
          remaining.push(result);
          if (make24(remaining)) return true;
          remaining.pop();
        }
      }
    }
    return false;
  }

  // Represent each number with the tuple - [numerator, denominator].
  const fractions = new Array(cards.length);
  for (let i = 0; i < cards.length; i++) {
    fractions[i] = [cards[i], 1];
  }

  return make24(fractions);
};
