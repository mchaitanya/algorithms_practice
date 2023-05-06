// https://leetcode.com/problems/apply-discount-to-prices/
// tags - string
/**
 * @param {string} sentence
 * @param {number} discount
 * @return {string}
 */
var discountPrices = function (sentence, discount) {
  const CODE0 = "0".charCodeAt(0),
    CODE9 = "9".charCodeAt(0);
  function isPrice(w) {
    if (w[0] !== "$" || w.length === 1) return false;
    for (let i = 1; i < w.length; i++) {
      const code = w.charCodeAt(i);
      if (code < CODE0 || code > CODE9) return false;
    }
    return true;
  }

  const discounted = (100 - discount) / 100;
  const words = sentence.split(" ");
  for (let i = 0; i < words.length; i++) {
    if (isPrice(words[i])) {
      const price = Number(words[i].slice(1));
      words[i] = `$${(discounted * price).toFixed(2)}`;
    }
  }
  return words.join(" ");
};
