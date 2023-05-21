// https://leetcode.com/problems/complex-number-multiplication/
// tags - math
/**
 * @param {string} num1
 * @param {string} num2
 * @return {string}
 */
var complexNumberMultiply = function (num1, num2) {
  function parse(complex) {
    const plusIndex = complex.indexOf("+");
    const real = Number(complex.slice(0, plusIndex));
    const imaginary = Number(complex.slice(plusIndex + 1, complex.length - 1));
    return [real, imaginary];
  }

  const [real1, imaginary1] = parse(num1);
  const [real2, imaginary2] = parse(num2);
  const productReal = real1 * real2 - imaginary1 * imaginary2;
  const productImaginary = real1 * imaginary2 + real2 * imaginary1;
  return `${productReal}+${productImaginary}i`;
};
