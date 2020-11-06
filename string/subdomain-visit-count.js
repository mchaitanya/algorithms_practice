// https://leetcode.com/problems/subdomain-visit-count/
// tags - string, hash-table
/**
 * @param {string[]} cpdomains
 * @return {string[]}
 */
var subdomainVisits = function(cpdomains) {
    const map = new Map();
    for (let cpdomain of cpdomains) {
        const space = cpdomain.indexOf(' ');
        const domain = cpdomain.slice(space+1);
        const count = Number(cpdomain.slice(0, space))
        
        const parts = domain.split('.');
        for (let i = parts.length - 1, subdomain = ''; i >= 0; i--) {
            if (subdomain === '') {
                subdomain = parts[i];
            } else {
                subdomain = parts[i] + '.' + subdomain;
            }
            
            const countSoFar = map.get(subdomain) || 0;
            map.set(subdomain, countSoFar + count);
        }
        
    }
    
    return Array.from(map.entries()).map(e => e[1] + ' ' + e[0]);
    
};