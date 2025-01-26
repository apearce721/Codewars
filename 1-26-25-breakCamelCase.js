/* Complete the solution so that the function will break up camel casing, using a space between words.

Example
"camelCasing"  =>  "camel Casing"
"identifier"   =>  "identifier"
""             =>  "" */


function solution(string) {
    let camelCase = []
    for(let i = 0; i < string.length; i++){
      if(string[i] === string[i].toLowerCase()){
        camelCase.push(string[i])
      }else if(string[i] === string[i].toUpperCase()){
        camelCase.push(' ')
        camelCase.push(string[i])
      }
    }return camelCase.join('')
  }