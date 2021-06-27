# https://leetcode.com/problems/reverse-vowels-of-a-string/
# tags - string
class Solution:
    def reverseVowels(self, s: str) -> str:
        chars = list(s)
        vowels = set('aeiouAEIOU')
        vowel_indices = [i for i, c in enumerate(chars) if c in vowels]
        for i in range(len(vowel_indices) // 2):
            temp = chars[vowel_indices[i]]
            chars[vowel_indices[i]] = chars[vowel_indices[-i-1]]
            chars[vowel_indices[-i-1]] = temp
        return ''.join(chars)
        