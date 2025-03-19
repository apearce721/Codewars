/* Bob is a lazy man.

He needs you to create a method that can determine how many letters (both uppercase and lowercase ASCII letters) and digits are in a given string.

Example:

"hel2!lo" --> 6

"wicked .. !" --> 6

"!?..A" --> 1 */

function countLettersAndDigits(input) {
    let count = 0
    for(let char of input){
      let asciiValue = char.charCodeAt(0)
      if((asciiValue >= 65 && asciiValue <= 90) || (asciiValue >= 97 && asciiValue <= 122) || (asciiValue >= 48 && asciiValue <= 57)){
        count ++
      }
    }return count
  }