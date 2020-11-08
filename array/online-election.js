// https://leetcode.com/problems/online-election/
// tags - array
/**
 * @param {number[]} persons
 * @param {number[]} times
 */
var TopVotedCandidate = function(persons, times) {
    this.persons = persons;
    this.times = times;
};

/** 
 * @param {number} t
 * @return {number}
 */
TopVotedCandidate.prototype.q = function(t) {
    // map each candidate to their vote count
    let map = new Map();
    let max = 0, winner = 0;
    for (let i = 0; this.times[i] <= t; i++) {
        let person = this.persons[i];
        let count = map.get(person) || 0;
        map.set(person, count+1);
        if (count+1 >= max) {
            max = count+1;
            winner = person;
        }
    }
    return winner;
};

/** 
 * Your TopVotedCandidate object will be instantiated and called as such:
 * var obj = new TopVotedCandidate(persons, times)
 * var param_1 = obj.q(t)
 */