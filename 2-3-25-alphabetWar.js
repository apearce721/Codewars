/* There is a war and nobody knows - the alphabet war!
There are two groups of hostile letters. The tension between left side letters and right side letters was too high and the war began.

Task
Write a function that accepts fight string consists of only small letters and return who wins the fight. When the left side wins return Left side wins!, when the right side wins return Right side wins!, in other case return Let's fight again!.

The left side letters and their power:

 w - 4
 p - 3
 b - 2
 s - 1
The right side letters and their power:

 m - 4
 q - 3
 d - 2
 z - 1
The other letters don't have power and are only victims.

Example
alphabetWar("z");        //=> Right side wins!
alphabetWar("zdqmwpbs"); //=> Let's fight again!
alphabetWar("zzzzs");    //=> Right side wins!
alphabetWar("wwwwwwz");  //=> Left side wins! */


function alphabetWar(fight){
    let leftSide = 0
    let rightSide = 0
    for(let i = 0; i < fight.length; i++){
      if(fight[i] === 'w'){
        leftSide += 4
      }else if(fight[i] === 'p'){
        leftSide += 3
      }else if(fight[i] === 'b'){
        leftSide += 2
      }else if(fight[i] === 's'){
        leftSide += 1
      }else if(fight[i] === 'm'){
        rightSide += 4
      }else if(fight[i] === 'q'){
        rightSide += 3
      }else if(fight[i] === 'd'){
        rightSide += 2
      }else if(fight[i] === 'z'){
        rightSide += 1
      }
    }if(leftSide > rightSide){
      return 'Left side wins!'
    }else if(rightSide > leftSide){
      return 'Right side wins!'
    }else return "Let's fight again!"
  }