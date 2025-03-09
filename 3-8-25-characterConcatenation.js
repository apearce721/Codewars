/* Given a string, you progressively need to concatenate the first character from the left and the first character from the right and "1", then the second character from the left and the second character from the right and "2", and so on.
If the string's length is odd drop the central element.

For example:

"abcdef"  --> "af1be2cd3"
"abc!def" --> "af1be2cd3" // same result */

function charConcat(string){
    let arr = string.split('')
    let newArr = []
    if(arr.length % 2 != 0){
      arr.splice(Math.floor(arr.length/2), 1)
    }for(let i = 0; i < arr.length/2; i++){
      newArr.push(arr[i], arr[arr.length - 1 - i], (i+1))
    }return newArr.join('')
  }