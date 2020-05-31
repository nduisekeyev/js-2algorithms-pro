// ===============================================================
// Write a function which takes in a string and returns counts of 
// each character in the string.
// ===============================================================

// Refactor to check where char is a number/letter

// function charCount(str) {
//     const result = {};
//     for (let i = 0; i < str.length; i++) {
//         const char = str[i].toLowerCase();
//         if (/[a-z0-9]/.test(char)) {
//             if (result[char] > 0) {
//                 result[char]++;
//             } else {
//                 result[char] = 1;
//             }
//         }
//     }
//     return result;
// }


// // Refactor with for...of

// function charCount(str) {
//     const result = {};
//     for (const char of str) {
//         char.toLowerCase();
//         if (/[a-z0-9]/.test(char)) {
//             if (result[char] > 0) {
//                 result[char]++;
//             } else {
//                 result[char] = 1;
//             }
//         }
//     }
//     return result;
// }

// Refactor with one single line 
// function charCount(str) {
//     const result = {};
//     for (const char of str) {
//         char = char.toLowerCase();
//         if (/[a-z0-9]/.test(char)) {
//             result[char] = ++result[char] || 1;
//         }
//     }
//     return result;
// }

// Refactor to get rid off Regular Exp
function charCount(str) {
    const result = {};
    for (let char of str) {
        char = char.toLowerCase();
        if (isAlphaNumberic(char)) {
            result[char] = ++result[char] || 1;
        }
    }
    return result;
}

function isAlphaNumberic(char) {
  const code = char.charCodeAt(0);
  if (!(code > 47 && code < 58) && // numeric (0-9)
        !(code > 64 && code < 91) && // upper alpha (A-Z)
        !(code > 96 && code < 123)) { // lower alpha (a-z)
      return false;
    }
    return true;
}

//Example of using this method https://jsperf.com/alphanumeric-charcode-vs-regexp

console.log(charCount('Hello EVEREBODY !!!'));