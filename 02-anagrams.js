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
 let arr2 = str2.slice()
 for (let i = 0; i < str1.length; i++) {
   const char = str1[i];
   if(arr2.indexOf(char)>-1){
     let j = arr2.indexOf(char)
    //  arr2 = arr2.slice(0,j) + arr2.slice(j)
    arr2.splice(j, 1)
     console.log(arr2)
     
   }
  }
  
  // return newString2.length === 0
}
// console.log(firstAnagram("gizmo", "sally"))
console.log(firstAnagram("elvis", "lives"))

function secondAnagram(str1, str2) {
  // Code goes here ....
}


function thirdAnagram(str1, str2) {
  // Code goes here ....
}


function fourthAnagram(str1, str2) {
  // Code goes here ....
}
