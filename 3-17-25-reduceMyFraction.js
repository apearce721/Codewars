/* Write a function which reduces fractions to their simplest form! Fractions will be presented as an array/tuple (depending on the language) of strictly positive integers, and the reduced fraction must be returned as an array/tuple:

input:   [numerator, denominator]
output:  [reduced numerator, reduced denominator]
example: [45, 120] --> [3, 8]
All numerators and denominators will be positive integers. */

function reduceFraction(fraction){
    let gcd = 1
    for (let i = 1; i <= Math.min(fraction[0], fraction[1]); i++){
      if (fraction[0] % i === 0 && fraction[1] % i === 0 && i > gcd){
        gcd = i
      }
    }
    return [Math.floor(fraction[0] / gcd), Math.floor(fraction[1] / gcd)];
  }