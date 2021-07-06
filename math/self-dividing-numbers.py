# https://leetcode.com/problems/self-dividing-numbers/
# tags - number
class Solution:
    def selfDividingNumbers(self, left: int, right: int) -> List[int]:
        def isSelfDividing(num):
            for digit in extractDigits(num):
                if digit == 0 or num % digit != 0:
                    return False
            return True
        
        def extractDigits(num):
            digits = []
            while num > 0:
                digits.append(num % 10)
                num //= 10
            return digits
        
        return [x for x in range(left, right+1) if isSelfDividing(x)]