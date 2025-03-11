/* Task
Round the given number n to the nearest multiple of m.

If n is exactly in the middle of 2 multiples of m, return n instead.

Example
For n = 20, m = 3, the output should be 21.

For n = 19, m = 3, the output should be 18.

For n = 50, m = 100, the output should be 50.

Input/Output
[input] integer n
1 ≤ n < 10^9.

[input] integer m
3 ≤ m < 109.

[output] an integer */

function rounding(n, m) {
    //Find the largest multiple of m that is less than or equal to n
    const largestMultipleOfM = Math.floor(n / m) * m
    //Find the smallest multiple of m that is greater than n
    const smallestMultipleGreaterThanN = largestMultipleOfM + m;
    //Calculate the midpoint between these two multiples
    const midpoint = (largestMultipleOfM + smallestMultipleGreaterThanN) / 2
    //If n is exactly at this midpoint, return n
    if(n === midpoint) return n
    //If n is closer to the lower multiple, round down to that multiple
    //If n is closer to the higher multiple, round up to that multiple
    else if(Math.abs(smallestMultipleGreaterThanN - n) < Math.abs(largestMultipleOfM - n)){
      return smallestMultipleGreaterThanN
    }else return largestMultipleOfM
  }