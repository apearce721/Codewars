/* 
Color Ghost
Create a class Ghost

Ghost objects are instantiated without any arguments.

Ghost objects are given a random color attribute of "white" or "yellow" or "purple" or "red" when instantiated

ghost = new Ghost();
ghost.color //=> "white" or "yellow" or "purple" or "red" */


var Ghost = function() {
    let random = Math.random()
    if(random < .25){
      this.color = 'white'
    }else if(random < .5){
      this.color = 'yellow'
    }else if (random < .75){
      this.color = 'purple'
    }else{
      this.color = 'red'
    }
    return this.color
  };