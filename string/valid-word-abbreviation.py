# https://leetcode.com/problems/valid-word-abbreviation/
# tags - string
class Solution:
    def validWordAbbreviation(self, word: str, abbr: str) -> bool:
        len_expanded = 0
        letter_count = ''
        for i, char in enumerate(abbr):
            if not char.isdigit():
                if len_expanded >= len(word) or word[len_expanded] != char:
                    return False
                len_expanded += 1
            else:
                if not letter_count and char == '0':
                    return False
                letter_count += char
                if i+1 == len(abbr) or not abbr[i+1].isdigit():
                    len_expanded += int(letter_count)
                    letter_count = ''
        return len_expanded == len(word)
                