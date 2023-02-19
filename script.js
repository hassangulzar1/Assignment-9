// !Program No 1
let myVar = 5;
console.log(myVar);

// !Program No 2
let myString = "hello, world!";
alert(myString);

// !Program No 3
let num1 = 5;
let num2 = 10;
let userNumber = parseInt(prompt("Enter your Number"));
console.log(num1 + num2 + userNumber);

// !Program No 4

let myBoolean = true;

if (myBoolean === true) {
  console.log("Its true");
} else {
  console.log("Its false");
}

// !Program No 5
let evenOdd = parseInt(prompt("Enter Even or Odd number "));
if (evenOdd % 2 == 0) {
  console.log("it is Even Number");
} else {
  console.log("it is Odd Number");
}

// !Program No 6

let a = "My Name is ";
let b = "Hassan";
console.log(a + b);

// !Program No 7

let a1 = 10;
let a2 = 11;
console.log(a1 * a2);

// !Program NO 8
let userPassword = prompt("Enter your password");
if (userPassword == "Password") {
  console.log("Access granted");
} else {
  console.log("Access denied");
}

// !Program No 9
let number1 = parseInt(prompt("Enter first Number"));
let number2 = parseInt(prompt("Enter Second Number"));
let number3 = parseInt(prompt("Enter Third Number"));
if (number1 > number2 && number1 > number3) {
  alert("Number 1 is largest Number");
}
if (number2 > number3 && number2 > number1) {
  alert("Number 2 is largest Number");
}
if (number3 > number1 && number3 > number2) {
  alert("Number 3 is largest Number");
}

// !Program No 10
let str1 = prompt("Enter anything");
let str2 = prompt("Enter anything");
if (str1 == str2) {
  alert("The strings are equal");
} else {
  alert("The strings are not equal");
}
