/* Numbers ending with zeros are boring.

They might be fun in your world, but not here.

Get rid of them. Only the ending ones.

1450 -> 145
960000 -> 96
1050 -> 105
-1050 -> -105
Zero alone is fine, don't worry about it. Poor guy anyway */

function noBoringZeros(n) {
    let str = n.toString()
    for(let i = str.length; i > 1; i--){
      if(str.endsWith(0)){
        str = str.slice(0, str.length-1)
      }
    }return Number(str)
  }