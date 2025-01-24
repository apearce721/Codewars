/* Oh, no! The number has been mixed up with the text. Your goal is to retrieve the number from the text, can you return the number back to its original state?
Task
Your task is to return a number from a string.

Details
You will be given a string of numbers and letters mixed up, you have to return all the numbers in that string in the order they occur. */


function filterString(value) {
    let arr = value.split('')
    let nums = '1234567890'.split('')
    let numsOnly = []
    for(let i = 0; i <= arr.length; i++){
      if(nums.includes(arr[i])){
        numsOnly.push(arr[i])
      }
    }return Number(numsOnly.join(''))
  }