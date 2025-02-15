/* Given a string, capitalize the letters that occupy even indexes and odd indexes separately, and return as shown below. Index 0 will be considered even.

For example, capitalize("abcdef") = ['AbCdEf', 'aBcDeF']. See test cases for more examples.

The input will be a lowercase string with no spaces. */

function capitalize(s){
    const evenCap = s.split('').map((letter, index) => index % 2 === 0 ? letter.toUpperCase() : letter).join('')
    const oddCap = s.split('').map((letter, index) => index % 2 !== 0 ? letter.toUpperCase() : letter).join('')
    return [evenCap, oddCap]
  };