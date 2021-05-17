//what would obj.a.b return?
var obj = {a: {b:'c'}, d:'e'};
console.log("obj.a.b = ", obj.a.b);

//Write a function that is invoked twice and returns the sum:
//fun(2)(3)  --> 5

function sum(a) {

    return (b) => {
        return a + b;

    }
}

let sum2 = sum(2);
console.log(sum2(3));

//write a function that determines whether a string is a palindrome
function isPalindrome(str) {
    return reverse(str) === str;

}
function reverse(str) {
    let revArr = [];
    for (let i = str.length - 1; i >=0; i--) {
        revArr.push(str[i]);
    }
    return revArr.join('');

}

console.log("is 'anna' a palindrome:  ", isPalindrome('anna'));


// Implement the function "isPalindrome" (i.e. true if the input string is the same forwards & backwards):
//     isPalindrome('anna');   // evaluates to true
//     isPalindrome('hello');  // evaluates to false

// Write a function that alternates printing ping and pong (every 100ms).

let interval= 0;

function  pingPong () {
    for (let i = 0; i < 5; i++) {
        setTimeout(pp, 100);
    }
}

function pp () {
    interval++;
    if (interval % 2 === 0) {
        console.log('pong')
    } else {
        console.log('ping')
    }
}



pingPong();
