// Write a function called sameFrequency. 
// Given two positive integers, find out if the two numbers have the same frequency of digits.
// Your solution MUST have the following complexities:
// Time: O(N)
// Sample Input:
  // sameFrequency(182, 281) // true
  // sameFrequency(34, 14) // false
  // sameFrequency(3589578, 5879385) //true
  // sameFrequency(22, 222) //false

  function sameFrequency(str1, str2) {
    let num1 = str1.toString();
    let num2 = str2.toString();

    if (str1.length !== str2.length) {
      return false;
    }
   
    let frequencyCounter1 = {};
    let frequencyCounter2 = {};

    for (let val of num1) {
          frequencyCounter1[val] = (frequencyCounter1[val] || 0) + 1;
    }

    for (let val of num2) {
          frequencyCounter2[val] = (frequencyCounter2[val] || 0) + 1;
    }

    for (let key in frequencyCounter1) {
          if(!key in frequencyCounter2) {
              return false;
          }
          if(frequencyCounter2[key] !== frequencyCounter1[key]) {
              return false;
          }
          
    }
    console.log(frequencyCounter1);
    console.log(frequencyCounter2);
    return true;
}

console.log(sameFrequency(182, 281));
