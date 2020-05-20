// ===============================================================
// Write a function which takes in a string and returns counts of 
// each character in the string.
// ===============================================================

// Refactor to check where char is a number/letter

function charCount(str) {
    const result = {};
    for (let i = 0; i < str.length; i++) {
        const char = str[i].toLowerCase();
        if (/[a-z0-9]/.test(char)) {
            if (result[char] > 0) {
                result[char]++;
            } else {
                result[char] = 1;
            }
        }
    }
    return result;
}


// Refactor with for...of

function charCount(str) {
    const result = {};
    for (const char of str) {
        char.toLowerCase();
        if (/[a-z0-9]/.test(char)) {
            if (result[char] > 0) {
                result[char]++;
            } else {
                result[char] = 1;
            }
        }
    }
    return result;
}

// Refactor with one single line 
function charCount(str) {
    const result = {};
    for (const char of str) {
        char = char.toLowerCase();
        if (/[a-z0-9]/.test(char)) {
            result[char] = ++result[char] || 1;
        }
    }
    return result;
}

// console.log(charCount('Hi there!'));