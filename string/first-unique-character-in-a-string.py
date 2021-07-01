# https://leetcode.com/problems/first-unique-character-in-a-string/
# tags - string
class Solution:
    def firstUniqChar(self, s: str) -> int:     
        map = {}
        char_code_a = ord('a')
        for i in range(26):
            map[chr(i + char_code_a)] = 0
        
        for char in s:
            map[char] += 1
        
        for index, char in enumerate(s):
            if map[char] == 1:
                return index
        return -1