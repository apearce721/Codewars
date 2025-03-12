/* Every now and then people in the office moves teams or departments. Depending what people are doing with their time they can become more or less boring. Time to assess the current team.
You will be provided with an object(staff) containing the staff names as keys, and the department they work in as values.

Each department has a different boredom assessment score, as follows:

accounts = 1
finance = 2
canteen = 10
regulation = 3
trading = 6
change = 6
IS = 8
retail = 5
cleaning = 4
pissing about = 25

Depending on the cumulative score of the team, return the appropriate sentiment:

<=80: 'kill me now'
< 100 & > 80: 'i can handle this'
100 or over: 'party time!!' */


function boredom(staff){
    let dept = Object.values(staff)
    let total = 0
    for(let i = 0; i < dept.length; i++){
      if(dept[i] === 'accounts') total += 1
      else if(dept[i] === 'finance') total += 2
      else if(dept[i] === 'canteen') total += 10
      else if(dept[i] === 'regulation') total += 3
      else if(dept[i] === 'trading') total += 6
      else if(dept[i] === 'change') total += 6
      else if(dept[i] === 'IS') total += 8
      else if(dept[i] === 'retail') total += 5
      else if(dept[i] === 'cleaning') total += 4
      else if(dept[i] === 'pissing about') total += 25
    }
    if(total <= 80) return 'kill me now'
    else if(total < 100 && total > 80) return 'i can handle this'
    else return 'party time!!'
  }