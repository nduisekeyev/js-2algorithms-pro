// Import stylesheets
import './style.css'
import './Section_4/index.js'
import './Section_5/index.js'
import './Section_6/index.js'
import './Section_7/index.js'
import './Section_9/index.js'
import './Section_10/index.js'
import './Section_11/index.js'

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
