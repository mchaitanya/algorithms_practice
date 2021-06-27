# https://leetcode.com/problems/remove-vowels-from-a-string/
# tags - string
class Solution:
    def removeVowels(self, s: str) -> str:
        result = ''
        for char in s:
            if char not in {'a', 'e', 'i', 'o', 'u'}:
                result += char
        return result
        
        # vowels = {'a', 'e', 'i', 'o', 'u'}
        # chars = [c for c in s if c not in vowels]
        # return ''.join(chars)