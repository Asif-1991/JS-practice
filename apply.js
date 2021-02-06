// let and const

let name = 'Dabur';
if (name.length > 4) {
    name = 'Juvu';
}
console.log(name);

let age = 15;
age = 31;
age = 66;
console.log(age);

const country = 'Bangladesh';
console.log(country);

// inch to feet

function inchToFeet(inch) {
    const feet = inch / 12;
    return feet;
}
const senior = [156, 288, 300];

const nanaFeet = inchToFeet(senior[0]);
console.log(nanaFeet);
const naniFeet = inchToFeet(288);
console.log(naniFeet);
const dadiFeet = inchToFeet(300);
console.log(dadiFeet);

// leap year

function isLeapYear(year) {
    const remainder = year % 4;
    if (remainder == 0) {
        return true;
    } else {
        return false;
    }
}

const check2000 = isLeapYear(1700);
console.log(check2000);

// fibonacchi

// [0,1,1,2,3,5,8,13,21,]
// fibo[2] = fibo[2-1] + fibo[2-2];
// fibo[3] = fibo[3-1] + fibo[3-2];
// fibo[4] = fibo[4-1] + fibo[4-2];
// fibo[5] = fibo[5-1] + fibo[5-2];
// fibo[n] = fibo[n-1] + fibo[n-2];
// fibo[i] = fibo[i-1] + fibo[i-2];
function fibonacci(n) {
    var fibo = [0, 1];
    for (var i = 2; i <= n; i++) {
        fibo[i] = fibo[i - 1] + fibo[i - 2];
    }
    return fibo;
}
var result = fibonacci(12);
console.log(result);

// fibonacchi recursive

function fibonacci(n) {
    if (n == 0) {
        return 0;
    }
    if (n == 1) {
        return 1;
    } else {
        return fibonacci(n - 1) + fibonacci(n - 2);
    }
}

var result = fibonacci(10);
console.log(result);

// fibonacchi series recursive 

// [0,1,1,2,3,5,8,13,21,]
function fibonacci(n) {
    if (n == 0) {
        return [0]
    } else if (n == 1) {
        return [0, 1];
    } else {
        // calculate array nth element 
        var fibo = fibonacci(n - 1);
        var nextElement = fibo[n - 1] + fibo[n - 2];
        fibo.push(nextElement);
        return fibo;
    }
}

var result = fibonacci(15);
console.log(result);

// factorial 

function factorial(n) {
    var fact = 1;
    for (var i = 1; i <= n; i++) {
        fact = fact * i;
    }
    return fact;
}

var result = factorial(6);
console.log(result);

// factorial recursive

// 10! = 1*2*3*4*5*6*7*8*9*10
// 0! = 1
// 2! = 1*2
// 3! = 1*2*3
// 4! = 1*2*3*4
// 5! = 1*2*3*4*5
// 6! = 1*2*3*4*5*6
// 6! = (6-1)!*6
// 7! = (7-1)!*7
// 8! = (8-1)!*8
// n! = (n-1)!*n
// n! = n*(n-1)!
function factorial(n) {
    if (n == 0) {
        return 1;
    } else {
        return n * factorial(n - 1);
    }
}
var result = factorial(10);
console.log(result);

// factorial while

function factorial(n) {
    var i = 1;
    var fact = 1;
    while (i <= n) {
        fact = fact * i;
        i++;
    }
    return fact;
}
var result = factorial(5);
console.log(result);

// check prime number

function isPrime(n) {
    for (i = 2; i < n; i++) {
        if (n % i == 0) {
            return 'Not a prime number';
        }
    }
    return 'Your Number is a Prime Number';
}
var result = isPrime(139);
console.log(result);