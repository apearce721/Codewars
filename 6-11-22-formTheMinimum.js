/* Given a list of digits, return the smallest number that could be formed from these digits, 
using the digits only once (ignore duplicates). */


function minValue(values){
    let newArr = values.filter((value, index) => values.indexOf(value) === index)
    let sorted = newArr.sort((a,b) => a-b)
    return Number(sorted.join(''))
  }