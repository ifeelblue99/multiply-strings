/*
Given two non-negative integers num1 and num2 represented as strings, 
return the product of num1 and num2, also represented as a string.

Note: You must not use any built-in BigInteger library or convert the inputs to integer directly.

Example 1:

Input: num1 = "2", num2 = "3"
Output: "6"

*/

function multiplyStrings(str1, str2){
  
  let num1 = 2*str1-str1
  let num2 = 2*str2-str2

  return num1*num2
}


console.log(multiplyStrings("20", "8"));
