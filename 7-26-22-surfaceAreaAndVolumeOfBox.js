/* Write a function that returns the total surface area and volume of a box as an array: 
[area, volume] */


function getSize(width, height, depth){
    let area = (2 * depth * width) + (2 * depth * height) + (2 * height * width)
    let volume = width * height * depth
    return [area, volume]
  }