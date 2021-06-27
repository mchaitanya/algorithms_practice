# https://leetcode.com/problems/add-digits/
# tags - number
class Solution:
    def addDigits(self, num: int) -> int:
        if (num < 10):
            return num
        return self.addDigits(sum(self.extractDigits(num)))
        
        
    def extractDigits(self, num):
        digits = []
        while (num > 0):
            digits.append(num % 10)
            num //= 10
        return digits