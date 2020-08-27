//Recursion method
// The following function, which prints numbers counting down from n to 0

function countDown(num){
    if(num <= 0) {
        console.log("All done!");
        return;
    }
    console.log(num);
    num--;
    countDown(num);
}

function countDownToZero(n) {
  // base case. Stop at 0
  if (n < 0) {
    return; //stop the function
  } else {
    console.log(n);
    countDownToZero(n - 1);  // count down by 1
  }
}


console.log(countDownToZero(5));