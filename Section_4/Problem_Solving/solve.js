// ===============================================================
// Write a function which takes in a string and returns counts of 
// each character in the string.
// ===============================================================

charCount('hello');
/* {
     h: 1,
     e: 1,
     l: 2,
     o: 1
} */


function charCount(str) {
    // do something
    // return an object with keys that are lowercase alphanumeric characters in the string 

}

// Break it down

function charCount(str) {
    // make object ro return at end
    const result = {};
    // loop over string, for each character
    for (let i = 0; i < str.length; i++) {
        const char = str[i].toLowerCase();
        //if the char is a number/letter AND is a key in object, add one to count 
        if (result[char] > 0) {
            result[char]++;
        } else {
        //if the char is a number/letter AND not in the object, add it to object and set value to 1
            result[char] = 1;
        }
        //if the char is something else (space, period, etc). don't do anything

    }

    // return object at end
    return result;

}

// console.log(charCount('Your PIN number is 186682'));