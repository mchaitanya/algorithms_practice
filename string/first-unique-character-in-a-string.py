# https://leetcode.com/problems/first-unique-character-in-a-string/
# tags - string
from collections import Counter
class Solution:
    def firstUniqChar(self, s: str) -> int:     
#         char_code_a = ord('a')
#         map = {chr(i + char_code_a): 0 for i in range(26)}
        
#         for char in s:
#             map[char] += 1
        
        map = Counter(s)
        for index, char in enumerate(s):
            if map[char] == 1:
                return index
        return -1