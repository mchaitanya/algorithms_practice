// https://leetcode.com/problems/invalid-transactions/
// tags - string
/**
 * @param {string[]} transactions
 * @return {string[]}
 */
var invalidTransactions = function (transactions) {
  transactions = transactions.map((t) => new Transaction(t));
  // Sort the transactions by time.
  transactions.sort((t1, t2) => t1.time - t2.time);

  const invalid = [];
  scan: for (let i = 0; i < transactions.length; i++) {
    const curr = transactions[i];
    if (curr.amount > 1000) {
      invalid.push(curr);
      continue;
    }

    // Scan the previous transactions within 60 min.
    let p = i - 1;
    while (p >= 0) {
      const prev = transactions[p];
      if (curr.time - prev.time > 60) break;
      if (prev.name === curr.name && prev.city !== curr.city) {
        invalid.push(curr);
        continue scan;
      }
      p--;
    }

    // Scan the next transactions within 60 min.
    let n = i + 1;
    while (n < transactions.length) {
      const next = transactions[n];
      if (next.time - curr.time > 60) break;
      if (next.name === curr.name && next.city !== curr.city) {
        invalid.push(curr);
        continue scan;
      }
      n++;
    }
  }
  return invalid.map((t) => `${t.name},${t.time},${t.amount},${t.city}`);
};

class Transaction {
  constructor(str) {
    const [name, time, amount, city] = str.split(",");
    this.name = name;
    this.time = Number(time);
    this.amount = Number(amount);
    this.city = city;
  }
}
