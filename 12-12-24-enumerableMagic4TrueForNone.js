/* Create a method none that accepts an array and a function, and returns true if the function returns true for none of the items in the array. An empty list should return true. */

function none(arr, fun){
    return !arr.some(fun)
  }