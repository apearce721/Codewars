/* In this Kata, you will be given a string and your task will be to return a list of ints detailing the count of uppercase letters, lowercase, numbers and special characters (everything else), as follows.

The order is: uppercase letters, lowercase letters, numbers and special characters.

"*'&ABCDabcde12345" --> [ 4, 5, 5, 3 ]
More examples in the test cases.

Good luck! */

function solve(s){
    let upperLetterCount = 0
    let lowerLetterCount = 0
    let numCount = 0
    let specialCharCount = 0
    
    for(let char of s){
      if(char >= 'A' && char <= 'Z'){
        upperLetterCount++
      } else if(char >= 'a' && char <= 'z'){
        lowerLetterCount++
      } else if(char >= '0' && char <= '9'){
        numCount++
      } else {
        specialCharCount++
      }
    }  
    return [upperLetterCount, lowerLetterCount, numCount, specialCharCount]
  }