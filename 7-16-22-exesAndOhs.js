/* Check to see if a string has the same amount of 'x's and 'o's. The method must return a boolean 
and be case insensitive. The string can contain any char.

Examples input/output:

XO("ooxx") => true
XO("xooxx") => false
XO("ooxXm") => true
XO("zpzpzpp") => true // when no 'x' and 'o' is present should return true
XO("zzoo") => false */


function XO(str) {
    let xCount = 0
    let yCount = 0
    for(let i = 0; i < str.length; i++){
      if(str[i] === 'x' || str[i] === 'X'){
        xCount ++
      }else if(str[i] === 'o' || str[i] === 'O'){
        yCount++
      }
    }
    return xCount === yCount
  }