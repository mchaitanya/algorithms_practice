# https://leetcode.com/problems/decrypt-string-from-alphabet-to-integer-mapping/
# tags - string
class Solution:
    def freqAlphabets(self, s: str) -> str:
        map = {}
        # ASCII code of 'a' = 97
        for i in range(26):
            key = str(i+1) if i < 9 else f'{i+1}#'
            map[key] = chr(i + 97)
        
        i = 0
        decoded = []
        while i < len(s):
            span = 1
            if i+2 < len(s) and s[i+2] == '#':
                span = 3
            decoded.append(map[s[i:i+span]])
            i += span
        return ''.join(decoded)