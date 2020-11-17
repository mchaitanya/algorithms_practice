// https://leetcode.com/problems/unique-email-addresses/
// tags - string
/**
 * @param {string[]} emails
 * @return {number}
 */
var numUniqueEmails = function(emails) {
    function _standardize(email) {
        const [local, domain] = email.split('@');
        // remove everything after the first +
        const maybePlusIx = local.indexOf('+');
        if (maybePlusIx >= 0) {
            local = local.substring(0, maybePlusIx);
        }
        // remove all periods
        local = local.split('.').join('');
        
        return  local + '@' + domain;

        // let cleaned = [];
        // for (let char of local) {
        //     // remove everything after the first +
        //     if (char === '+') {
        //         break;
        //     }
        //     // skip the periods
        //     if (char !== '.') {
        //         cleaned.push(char);
        //     }
        // }
        // return cleaned.join('') + '@' + domain;
    }
    
    const set = new Set();
    for (let email of emails) {
        set.add(_standardize(email));
    }
    
    return set.size;
};