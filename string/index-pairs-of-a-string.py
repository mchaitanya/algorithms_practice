# https://leetcode.com/problems/index-pairs-of-a-string/
# tags - string
class Solution:
    def indexPairs(self, text: str, words: List[str]) -> List[List[int]]:
        # word_set = set(words)
        # pairs = []
        # for i in range(len(text)):
        #     for j in range(i, len(text)):
        #         if text[i:j+1] in word_set:
        #             pairs.append([i, j])
        # return pairs
        
        pairs = []
        for word in words:
            word_len = len(word)
            for i in range(0, len(text) - word_len + 1):
                if text[i:i+word_len] == word:
                    pairs.append([i, i + word_len - 1])
        pairs.sort(key=lambda p: p[0]*100+p[1])
        return pairs