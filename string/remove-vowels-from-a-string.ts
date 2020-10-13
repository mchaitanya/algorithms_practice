// https://leetcode.com/problems/remove-vowels-from-a-string/
// tags - string
function removeVowels(S: string): string {
    let result = '';
    const vowels = ['a', 'e', 'i','o', 'u'];
    for (let char of S) {
        if (!vowels.includes(char)) {
            result += char;
        }
    }
    return result;
};