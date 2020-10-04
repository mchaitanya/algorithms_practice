// https://leetcode.com/problems/integer-to-english-words/
// tags - math, string, implementation
/**
 * @param {number} num
 * @return {string}
 */
var numberToWords = function(num) {
    // input & output, both are strings
    function _convertUptoThreeDigitSegment(num) {
        if (num.length == 1) {
            return _wordMap.get(num);
        } else if (num.length == 2) {
            if (num === '00') {
                return '';
            } else if (num[0] === '0') {
                return _wordMap.get(num[1]);
            } else if (num[0] === '1' || num[1] === '0') {
                // handles 10 <= num < 20 & nums like 20, 30, ...., 90
                return _wordMap.get(num);
            } else {
                return _wordMap.get(num[0] + '0') + ' ' + _wordMap.get(num[1]);
            }
        } else {
            if (num[0] === '0') {
                return _convertUptoThreeDigitSegment(num.slice(1));
            } else {
                const temp = _convertUptoThreeDigitSegment(num.slice(1));
                return _wordMap.get(num[0]) + ' Hundred' + 
                    (temp === '' ? '' : ' ' + temp);
            }
        }
    }
    
    // we can stop at 'Billion', the max number i.e. 2^31 - 1 is 2 billion something
    // note the space to the left - takes care of the space when concatenating
    const _placeValues = ['', ' Thousand', ' Million', ' Billion'];
    
    const _wordMap = new Map([
        ['0', 'Zero'], 
        ['1', 'One'], 
        ['2', 'Two'], 
        ['3', 'Three'], 
        ['4', 'Four'], 
        ['5', 'Five'], 
        ['6', 'Six'], 
        ['7', 'Seven'], 
        ['8', 'Eight'], 
        ['9', 'Nine'], 
        ['10', 'Ten'], 
        ['11', 'Eleven'], 
        ['12', 'Twelve'], 
        ['13', 'Thirteen'], 
        ['14', 'Fourteen'], 
        ['15', 'Fifteen'], 
        ['16', 'Sixteen'], 
        ['17', 'Seventeen'], 
        ['18', 'Eighteen'], 
        ['19', 'Nineteen'], 
        ['20', 'Twenty'], 
        ['30', 'Thirty'], 
        ['40', 'Forty'], 
        ['50', 'Fifty'], 
        ['60', 'Sixty'], 
        ['70', 'Seventy'], 
        ['80', 'Eighty'], 
        ['90', 'Ninety'], 
        ['100', 'Hundred']
    ]);
    
    // first turn the number into a string
    let numAsStr = String(num);
    let placeValueCounter = 0;
    const segments = [];
    do {
        // process from the right in 3-char chunks
        const chunkEnd = numAsStr.length;
        const chunkStart = (chunkEnd - 3 >= 0 ? chunkEnd - 3 : 0);
        const chunk = numAsStr.slice(chunkStart, chunkEnd);
        
        const converted = _convertUptoThreeDigitSegment(chunk);
        if (converted !== '') {
            segments.push(converted + _placeValues[placeValueCounter]);
        }
        
        numAsStr = numAsStr.slice(0, chunkStart);
        placeValueCounter++;
        
    } while (numAsStr.length > 0)
    
    return segments.reverse().join(' ');
    
};