# https://leetcode.com/problems/happy-number/
# tags - number
class Solution:
    def isHappy(self, n: int) -> bool:
        def extractDigits(n):
            digits = []
            while n > 0:
                digits.append(n % 10)
                n = n // 10
            return digits
        
        seen = set()
        while (n != 1 and n not in seen):
            seen.add(n)
            n = sum([d*d for d in extractDigits(n)])
        return n == 1 
        