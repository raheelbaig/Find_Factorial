
function fact() {
    let number = document.getElementById('Input').value;
    let Result = document.getElementById('result');
    if ( number < 0 ) {
        Result.innerText = "Error! Factorial for negative number does not exist."
    }else if( number == 0 ) {
        Result.innerText = `The factorial of ${number} is 1.`
    }else {
        let ans = 1;
        for (var i=1; i<=number; i++) {
            ans *= i;
        }
        Result.innerText = (`The factorial of ${number} is ${ans}.`)
    }

}