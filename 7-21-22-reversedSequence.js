/* Build a function that returns an array of integers from n to 1 where n>0.

Example : n=5 --> [5,4,3,2,1] */


const reverseSeq = n => {
    let arr = []
    for(let i = 0; i <= n; i++){
      if(i > 0) arr.push(i)
    }
    return arr.sort((a, b) => b-a)
  };