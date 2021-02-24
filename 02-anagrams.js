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
   if(arr2.indexOf(char)>-1){
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
}


function fourthAnagram(str1, str2) {
  // Code goes here ....
}
