function firstAnagram(str1, str2) {
  // Code goes here ....
  /*
  iterate over first string
  find index of that letter in second string
  hint:use array.indexof and delete that index
  look char in first string to second string
  delete char from word
  if at end of iteration second string.length ===0 return true
  else return false
  iterative approach
  maybe do recursive next time
  */
  let arr2 = str2.split("")
  for (let i = 0; i < str1.length; i++) {
    const char = str1[i];
    if (arr2.indexOf(char) > -1) {
      let j = arr2.indexOf(char)
      arr2.splice(j, 1)
    }
  }
  return arr2.length === 0
}
// console.log(firstAnagram("gizmo", "sally"))
// console.log(firstAnagram("elvis", "lives"))

function secondAnagram(str1, str2) {
  /*
  sort list alphabetically
  nested for loop
  sort sting 1 in the first loop
  sort string 2 in the second loop
  while where' in the 2nd loop
  if (sting1 === string 2) return true
  else return false
  time : worse than the previous function (Time: O(n^2))
  [1,3,4]
.sort() Space: O(n)
  */
  let arr1 = str1.split("") // Space: O(n)
  arr1.sort()  // Space: O(n)
  let arr2 = str2.split("")
  arr2.sort()  // Space: O(n)
  // console.log(arr1.join("") , arr2.join(""))
  return arr1.join("") == arr2.join("")

}
// console.log(secondAnagram("gizmo", "sally"))
// console.log(secondAnagram("elvis", "lives"))

function thirdAnagram(str1, str2) {
  // Code goes here ....
  /* 
  store letters into objects
  assuming char as keys
  frequent as value
  call these obj as obj1 obj2
  compare resulting objs
  use method object.getkeys
  compare 
  for in loop
  A LOT OF STEPS
  for in loop for each key in obj if key doesn't === same name of key in second it will return t/f
  */
  let obj1 = {}
  let obj2 = {}
  for (let i = 0; i < str1.length; i++) {
    let char1 = str1[i]
    if (obj1[char1] === undefined){
      obj1[char1] = 1
    } else {
      obj1[char1]++
    }
    
  }
  for (let j = 0; j < str2.length; j++) {
    let char2 = str2[j]
    if (obj2[char2] === undefined){
      obj2[char2] = 1
    } else {
      obj2[char2]++
    }
  }
  for(let key in obj1){
    if(obj1[key] !== obj2[key]) return false
  }
  return true
  // console.log(obj1,obj2)
}
console.log(thirdAnagram("gizmo", "sally"))
console.log(thirdAnagram("elvis", "lives"))

function fourthAnagram(str1, str2) {
  // Code goes here ....
}
