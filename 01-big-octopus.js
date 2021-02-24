function quadraticBiggestFish(fishes) {
  // Code goes here ...
  /*input:array of strings
  output: longest string
  steps:
  1. can iterate through array or using .sort method pass in callback that compare two elee and difference between ele.length*/
  let max = fishes[0]
  for (let i = 1; i < fishes.length; i++) {
    let fish = fishes[i]
    if (max.length < fish.length) {
      max = fish
    }
  }
  return max
}


function nlognBiggestFish(fishes) {
  // Code goes here ...
}


function linearBiggestFish(fishes) {
  // Code goes here ...
}


tilesArray = ["up", "right-up", "right", "right-down", "down", "left-down", "left", "left-up"]
function slowDance(direction, tilesArray) {
  // Code goes here ...
}


tilesObj = {
  "up": 0,
  "right-up": 1,
  "right": 2,
  "right-down": 3,
  "down": 4,
  "left-down": 5,
  "left": 6,
  "left-up": 7
}
function fastDance(direction, tilesObj) {
  // Code goes here ...
}
const fishies = ['fish', 'fiiish', 'fiiiiish', 'fiiiish', 'fffish',
  'ffiiiiisshh', 'fsh', 'fiiiissshhhhhh']

console.log(quadraticBiggestFish(fishies))