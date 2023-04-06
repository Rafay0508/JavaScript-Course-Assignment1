// Question : 01
//   Write a JavaScript program that accepts two numbers in two prompts and displays the larger one in the console.

let num1 = +prompt("Enter First Number");
let num2 = +prompt("Enter Second Number");
if (num1 > num2) {
  console.log("Larger Number is: " + num1);
} else {
  console.log("Larger Number is: " + num2);
}

// Question : 02
//   Write a JavaScript conditional statement to find the sign of a number. Display an alert box with the specified sign.

//   var num = +prompt("Enter Signed or Unsigned Number");
//   if (num > 1) {
//     alert("the Sign is +");
//   } else if (num != 0 && num < 1) {
//     alert("the Sign is -");
//   } else {
//     alert("Enter Number is  0 or an it's an Error");
//   }

// Question : 03
//   Write a JavaScript program that accepts five numbers in five prompts and displays the larger one in the console.

//   let num1 = +prompt("Enter First Number");
//   let num2 = +prompt("Enter Second Number");
//   let num3 = +prompt("Enter Third Number");
//   let num4 = +prompt("Enter Fourth Number");
//   let num5 = +prompt("Enter Fifth Number");

//   if (num1 > num2 && num1 > num3 && num1 > num4 && num1 > num5) {
//     console.log("Larger Number is: " + num1);
//   } else if (num2 > num1 && num2 > num3 && num2 > num4 && num2 > num5) {
//     console.log("Larger Number is: " + num2);
//   } else if (num3 > num1 && num3 > num2 && num3 > num4 && num3 > num5) {
//     console.log("Larger Number is: " + num3);
//   } else if (num4 > num1 && num4 > num2 && num4 > num3 && num4 > num5) {
//     console.log("Larger Number is: " + num4);
//   } else if (num5 > num1 && num5 > num2 && num5 > num3 && num5 > num4) {
//     console.log("Larger Number is: " + num5);
//   } else {
//     console.log("Unexpected Input");
//   }

// Question : 04
//   Write a JavaScript for loop that will iterate from 0 to 15. For each iteration, it will check if the current number is odd or even, and display a message to the screen.

//   for (let i = 0; i <= 15; i++) {
//     if (i % 2 == 0) {
//       console.log(i + " is Even");
//     } else if (i % 2 == 1) {
//       console.log(i + " is Odd");
//     } else {
//       console.log("Unexpected Input");
//     }
//   }

// Question : 05
//   Write a JavaScript program which computes the average marks of the following students Then, this average is used to determine the corresponding grade

//   let num1 = +prompt("Enter First Number");
//   let num2 = +prompt("Enter Second Number");
//   let num3 = +prompt("Enter Third Number");
//   let num4 = +prompt("Enter Fourth Number");
//   let num5 = +prompt("Enter Fifth Number");

//   let avg = (((num1 + num2 + num3 + num4 + num5) / 500) * 100).toFixed(2);
//   document.write(avg);
//   if (avg <= 0 || avg > 100) {
//     alert("error found");
//   } else {
//     if (avg < 60) {
//       alert("Your Grade is F");
//     } else if (avg < 70) {
//       alert("Your Grade is D");
//     } else if (avg < 80) {
//       alert("Your Grade is C");
//     } else if (avg < 90) {
//       alert("Your Grade is B");
//     } else if (avg <= 100) {
//       alert("Your Grade is A");
//     }
//   }

// Question : 06
//   Write a JavaScript program which iterates the integers from 1 to 100. But for multiples of three print "Fizz" instead of the number and for the multiples of five print "Buzz". For numbers which are multiples of both three and five print "FizzBuzz".

//   for (let i = 1; i <= 100; i++) {
//     if (i % 3 == 0 && i % 5 == 0) {
//       console.log("FizzBuzz");
//     } else if (i % 3 == 0) {
//       console.log("Fizz");
//     } else if (i % 5 == 0) {
//       console.log("Buzz");
//     } else {
//       console.log(i);
//     }
//   }

// Question : 07
//   Write a JavaScript program to construct the following pattern, using a nested for loop.

//   for (let i = 0; i < 5; i++) {
//     let row = "";
//     for (let j = 0; j < i + 1; j++) {
//       row += "*";
//     }
//     console.log(row);
//   }
