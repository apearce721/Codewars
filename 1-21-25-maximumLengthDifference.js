/* You are given two arrays a1 and a2 of strings. Each string is composed with letters from a to z. Let x be any string in the first array and y be any string in the second array.

Find max(abs(length(x) − length(y)))

If a1 and/or a2 are empty return -1 in each language except in Haskell (F#) where you will return Nothing (None).

Example:
a1 = ["hoqq", "bbllkw", "oox", "ejjuyyy", "plmiis", "xxxzgpsssa", "xxwwkktt", "znnnnfqknaz", "qqquuhii", "dvvvwz"]
a2 = ["cccooommaaqqoxii", "gggqaffhhh", "tttoowwwmmww"]
mxdiflg(a1, a2) --> 13
Bash note:
input : 2 strings with substrings separated by ,
output: number as a string */

function mxdiflg(a1, a2) {
    if (a1.length === 0 || a2.length === 0) {
      return -1;
    }
    
    let a1Lengths = a1.map(str => str.length);
    let a2Lengths = a2.map(str => str.length);
    
    let a1Longest = Math.max(...a1Lengths);
    let a1Shortest = Math.min(...a1Lengths);
    let a2Longest = Math.max(...a2Lengths);
    let a2Shortest = Math.min(...a2Lengths);
    
    return Math.max(
      Math.abs(a1Longest - a2Shortest),
      Math.abs(a2Longest - a1Shortest)
    )
  }