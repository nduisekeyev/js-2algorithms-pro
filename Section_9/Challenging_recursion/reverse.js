// Write a recursive function called 
// reverse  which accepts a string and 
// returns a new string in reverse

// reverse('awesome') // 'emosewa'
// reverse('rithmschool') // 'loohcsmhtir'

function reverseString(str) {
  return str ? reverseString(str.substr(1)) + str[0] : str;
}

console.log(reverseString('awesome'));


// awesome + a
// wesome + w
// esome + e
// some + s 
// ome + o
// me + m
// e + e