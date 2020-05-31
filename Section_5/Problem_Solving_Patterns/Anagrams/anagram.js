// Given two strings, write a function to determine if the 
// second string is an anagram of the first. An anagram is a word, 
// phrase, or name formed by rearranging the letters of another, 
// such as cinema, formed from iceman.

// validAnagram('', '') // true
// validAnagram('aaz', 'zza') // false
// validAnagram('anagram', 'nagaram') // true
// validAnagram("rat","car") // false) // false
// validAnagram('awesome', 'awesom') // false
// validAnagram('qwerty', 'qeywrt') // true
// validAnagram('texttwisttime', 'timetwisttext') // true

function validAnagram (str1, str2) {
   if (str1.length !== str2.length) {
     return false;
   }
   let frequencyCounter1 = {};
   let frequencyCounter2 = {};

   for (let val of str1) {
        frequencyCounter1[val] = (frequencyCounter1[val] || 0) + 1
   }

   for (let val of str2) {
        frequencyCounter2[val] = (frequencyCounter2[val] || 0) + 1
   }

   for (let key in frequencyCounter1) {
        if(!key in frequencyCounter2) {
            return false
        }
        if(frequencyCounter2[key] !== frequencyCounter1[key]) {
            return false
        }
        
   }
   console.log(frequencyCounter1);
   console.log(frequencyCounter2);
   return true
}

console.log(validAnagram('texttwisttime', 'timetwisttext'));