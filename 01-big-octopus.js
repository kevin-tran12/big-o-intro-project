function quadraticBiggestFish(fishes) {
  // Code goes here ...
  /*input:array of strings
  output: longest string
  steps:
  1. can iterate through array or using .sort method pass in callback that compare two elee and difference between ele.length
  compare fishes.length to otherFishes.length
  Time: O(n^2) - Quadratic
  Space:
  */
 let currentBiggest;
 for (let i = 0; i < fishes.length;i++) {
   for (let j = 0; j < fishes.length; j++){
     if (fishes[i] > fishes[j]) {
       currentBiggest = fishes[i];
     }
   }
  }
  return currentBiggest;
}


function nlognBiggestFish(fishes) {
  /*
  use the built in sort method, b/c it runs in O(log(n))
  */
 fishes.sort((a,b) =>  b.length -a.length)
 return fishes[0]
}

function linearBiggestFish(fishes) {
  /*
  loop through the array with a for loop
  declare & set it to fishes[0]
  compare to the nextOne
  if(nextOne > LongestOne)
  longest =
  Time: O(n) - Linear
  Space:
  */
 let max = fishes[0]
  for (let i = 1; i < fishes.length; i++) {
    let fish = fishes[i]
    if (max.length < fish.length) {
      max = fish
    }
  }
  return max

}


tilesArray = ["up", "right-up", "right", "right-down", "down", "left-down", "left", "left-up"]
function slowDance(direction, tilesArray) {
  // Code goes here ...
  /*
  linear time
  iterate through array check if ele === direction
  return direction
  return -1
  */
 for(let i =0;i<tilesArray.length;i++){
   let tile = tilesArray[i]
   if(tile=== direction){
     return i
   }
 }
}
console.log(slowDance('up',tilesArray))

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
  /*
  Time: O(1) - Constant
  return the value of key in the object

  fastDance("left-up", tilesObj) -> 7
  key === direction
  tilesObj[key] = value
  tilesObj[direction] = value
  */
 return tilesObj[direction]
}
const fishies = ['fish', 'fiiish', 'fiiiiish', 'fiiiish', 'fffish',
'ffiiiiisshh', 'fsh', 'fiiiissshhhhhh']

// console.log(quadraticBiggestFish(fishies))

// console.log(nlognBiggestFish(fishies));
// console.log()
