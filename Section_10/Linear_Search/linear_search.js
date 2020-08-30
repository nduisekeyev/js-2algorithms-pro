// Linear Search, creating function like indexOf()

// This function accepts an array and a value
// Loop through the array and check if the current array element is equal to // the value
// If it is, return the index at which the element is found
// If the value is never found, return -1

function linearSearch(arr, value) {
  let index;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === value) {
      return i;
    }
  }
  return -1;
}

const states = [1, 2, 3, 4, 10]


console.log(linearSearch(states, 0));