// Import stylesheets
import './style.css';
import './Problem_Solving/script.js';

// Write Javascript code!
const appDiv = document.getElementById('app');
appDiv.innerHTML = `<h1>JS Algorithms</h1>`;


//Logarithmic complexity 

function someFunction(n) {
  for (var i=0; i < n; i*2) {
    console.log(n);
  }
}

someFunction(0);


// var bottom floating to the top
function scope1 () {
  var top = 'top';
  bottom = 'bottom';
  console.log(bottom);
  var bottom; // bottom
}
scope1();


var o1 = {};
var o2 = {};
o1 == o2; // false
o1 === o2; // false
// Although these objects are equivalent (same properties and values), they are not equal

//Recursion method
// The following function, which prints numbers counting down from n to 0

function countDownToZero(n) {
  // base case. Stop at 0
  if (n < 0) {
    return; //stop the function
  } else {
    console.log(n);
    countDownToZero(n - 1);  // count down by 1
  }
}

console.log(countDownToZero(12));