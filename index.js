// Import stylesheets
import './style.css';

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


function scope1 () {
  var top = 'top';
  bottom = 'bottom';
  console.log(bottom);
  var bottom;
}

scope1();