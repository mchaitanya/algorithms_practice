// https://leetcode.com/problems/unique-email-addresses/
// tags - string
/**
 * @param {string[]} emails
 * @return {number}
 */
var numUniqueEmails = function(emails) {
    function _standardize(email) {
        const [local, domain] = email.split('@');
        let cleaned = [];
        for (let char of local) {
            // remove everything after the first +
            if (char === '+') {
                break;
            }
            // skip the periods
            if (char !== '.') {
                cleaned.push(char);
            }
        }
        return cleaned.join('') + '@' + domain;
    }
    
    const set = new Set();
    for (let email of emails) {
        set.add(_standardize(email));
    }
    
    return set.size;
};