/* When provided with a letter, return its position in the alphabet.

Input :: "a"

Output :: "Position of alphabet: 1"

Note: Only lowercased English letters are tested */

function position(letter){
    const alphabet = [0, 'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z']
    let position = alphabet.indexOf(letter)
    return `Position of alphabet: ${position}`
  }