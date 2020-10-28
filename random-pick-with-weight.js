// https://leetcode.com/problems/random-pick-with-weight/
// tags - probability
/**
 * @param {number[]} w
 */
var Solution = function(w) {
    this.runningWSum = w;
    for (let i = 1; i < w.length; i++) {
        w[i] = w[i] + w[i-1];
    }
};

/**
 * @return {number}
 */
Solution.prototype.pickIndex = function() {
    const totalW = this.runningWSum[this.runningWSum.length - 1];
    const rand = Math.floor((Math.random() * totalW)); // random number between 0 & totalW (exclusive)
    for (let i = 0; i < this.runningWSum.length; i++) {
        if (rand < this.runningWSum[i]) {
            return i;
        }
    }
    return 0; // should never run
    
};

/** 
 * Your Solution object will be instantiated and called as such:
 * var obj = new Solution(w)
 * var param_1 = obj.pickIndex()
 */