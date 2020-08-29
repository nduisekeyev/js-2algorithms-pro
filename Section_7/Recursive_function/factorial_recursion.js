function factorial(num) {
    if (num === 1) return 1;
    return num * factorial(num - 1);
}

// factorial(3)
// return 3 * factorial(2)
//                 return 2 * sumRange(1)
//                                   return 1
// Output is 6

// factorial of 4 
// 4 * 3 * 2 * 1
// factorial of 5
// 5 * 4 * 3 * 2 * 1
console.log(factorial(5)); //120