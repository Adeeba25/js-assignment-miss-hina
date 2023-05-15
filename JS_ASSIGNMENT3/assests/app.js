// CHAP3//

// Q1//

// let age = 28;
// alert("My age is " + age + " years.");

// Q2//

// if (localStorage.getItem("visitCount")) {
//   let visitCount = parseInt(localStorage.getItem("visitCount"));
//   visitCount++;
//   localStorage.setItem("visitCount", visitCount);
// } else {
//   localStorage.setItem("visitCount", 1);
// }
// let visitCount = parseInt(localStorage.getItem("visitCount"));
// alert("You have visited this site " + visitCount + " times.");

// Q3//

// let birthYear = 1995;
// document.write("My birth year is " + birthYear + ".");


// chap 4//
// Q1//

// var studentName=("Hiba"),age=14,studentClass=8;

// // Q2//

// // legal variable names//

// myName=("Adeeba");
// totalSum=335;
// age=20;
// companyName=("shan foods");
// studentName=("Hiba");


// // illegal variable names//
// var studentname="adeeba";
// alert(studentname);
// var my variable=
// var number=
// let var=
// var true=

// Q3//

// ...........end...........//

// CHAP 5//
// Q1//

// let num2 = 3 + 5;
// document.write("Sum of 3+5 is " + num2);

// Q2//

// let num1 = 3;
// let num2 = 5;
// let result = num1 - num2;

// document.write(num1 + " - " + num2 + " = " + result);

// let num4 = 3 / 5;
// document.write("Division of 3/5 is " + num4);

// let num4 = 3 % 5;
// document.write("Division of 3%5 is " + num4);

// Q3//

// var num;
// var message = "Value After Veriable Declartion is "+num;
// document.write(message+"<br>");
// num=prompt("Enter Vule\n");
// var IntvalofVar=num;
// document.write("Initial Value:  "+IntvalofVar+"<br>");
// var Incriment=++IntvalofVar;
// document.write("Value After Incriment is: "+Incriment+"<br>");
// Incriment+=7;
// document.write("Value After Addition is: "+Incriment+"<br>");
// Incriment-=1;
// document.write("Value After decrement is: "+Incriment+"<br>");
// var result;
// result=Incriment % 3;
// document.write("The Reminder is: "+result);

// Q4//

// const ticketPrice = 400;

// 		const numOfTickets = 5;
// 		const totalCost = ticketPrice * numOfTickets;
// 		console.log("The cost of buying " + numOfTickets + " tickets is " + totalCost + " PKR.");



// Q5//

// const number = 5;

// document.write("<table>");
// for (let i = 1; i <= 10; i++) {
//     document.write("<tr>");
//     document.write("<td>" + number + " x " + i + " = </td>");
//     document.write("<td>" + (number * i) + "</td>");
//     document.write("</tr>");
// }
// document.write("</table>");
// Q6//

//   var tempCelsius = prompt("Enter the temperature in Celsius:");
//   var tempFahrenheit = (tempCelsius * 9/5) + 32;
//   var convertedCelsius = (tempFahrenheit - 32) * 5/9;

//   document.write(tempCelsius + "\u00B0C is " + tempFahrenheit + "\u00B0F<br>");
  
//   document.write(tempFahrenheit + "\u00B0F is " + convertedCelsius + "\u00B0C");

// Q7//

//  var Price_Item1= prompt("Enter Price of Item 1:");
//  document.write("Price Of Item 1 is : "+Price_Item1+"<br>");
//  var Qty_Item1= prompt("Enter Quantity of Item 1:");
//  document.write("Quantity Of Item 1 is : "+Qty_Item1+"<br>")
 
// var Price_Item2= prompt("Enter Price of Item 2:");
//  document.write("Price Of Item 2 is : "+Price_Item2+"<br>");
// var Qty_Item2= prompt("Enter Quantity of Item 2:");
//  document.write("Quantity Of Item 2 is : "+Qty_Item2+"<br>")
//  var ShippingCharge=100;
//  document.write("Shipping Charges is: "+ShippingCharge+"<br><br>")
//  
 
//  var total=(Price_Item1*Qty_Item1)+(Price_Item2*Qty_Item2)+ShippingCharge;
//  document.write("Total Cost Of Your Order is :"+total);

// Q8//

        // const totalMarks = 500;
		// const marksObtained = 285;
		// const percentage = (marksObtained / totalMarks) * 100;

		// document.write("Total Marks: " + totalMarks + "<br>");
		// document.write("Marks Obtained: " + marksObtained + "<br>");
		// document.write("Percentage: " + percentage.toFixed(2) + "%");

// Q9//

// const usd = 10;
// 		const sar = 150;
// 		const pkr = (usd * 105.80) + (sar * 28);
// 		document.write("$" + usd + " and " + sar + " SAR are equal to " + pkr + " PKR");


// 10//

// const num = 7;

// 		const result = (((num + 5) * 10) / 2);

// 		document.write("Result: " + result);

// Q11//

// const currentYear = new Date().getFullYear();

// 		const birthYear = 1999;
// 		const age1 = currentYear - birthYear;
// 		const age2 = age1 - 1;
// 		document.write("They are either " + age1 + " or " + age2 + " years old.");
// .............END................//


// CHAP 6 TO 9//

// Q1//
        
// document.write("Result: <br>");
// var a;
// var result=prompt(a);
// document.write("The Value of a is :"+result+"<br>");
// document .write("..................................."+"<br><br><br>");
// result++;
// document.write("The Value of ++a is: "+result+"<br>");
// document.write("Now the Value of a is :"+result+"<br><br>");

// document.write("The Value of a++ is: "+result+"<br>");
// ++result;
// document.write("Now the Value of a is :"+result+"<br><br>");

// --result;
// document.write("The Value of --a is: "+result+"<br>");
// document.write("Now the Value of a is :"+result+"<br><br>");


// document.write("The Value of a-- is: "+result+"<br>");
// result--
// document.write("Now the Value of a is :"+result+"<br><br>");
        
// Q2//

// var a = 2, b = 1;

// --a - --b + ++b + b--;
// --a - --b;
// --a - --b + ++b;
// --a - --b + ++b + b--;


// Q3//

// var nameVisitor = prompt("What's your name?");
// alert("Hello, " + nameVisitor + "! Nice to meet you.");

// Q5//

// var num = prompt("Enter a number:");

// if (num === "" || isNaN(num)) {
//   num = 5;
// }
// document.write("<h2>Multiplication Table of " + num + "</h2>");
// for (var i = 1; i <= 10; i++) {
//   document.write(num + " x " + i + " = " + (num * i) + "<br>");
// }

// Q6//

// var subject1 = prompt("Enter subject 1:");
// var subject2 = prompt("Enter subject 2:");
// var subject3 = prompt("Enter subject 3:");

// var totalMarks = 100;

// var marks1 = parseInt(prompt("Enter obtained marks for " + subject1 + ":"));

// var marks2 = parseInt(prompt("Enter obtained marks for " + subject2 + ":"));
// var marks3 = parseInt(prompt("Enter obtained marks for " + subject3 + ":"));

// var totalObtainedMarks = marks1 + marks2 + marks3;
// var percentage = (totalObtainedMarks / (totalMarks * 3)) * 100;

// document.write("<table>");
// document.write("<tr><th>Subject</th><th>Total Marks</th><th>Obtained Marks</th></tr>");
// document.write("<tr><td>" + subject1 + "</td><td>" + totalMarks + "</td><td>" + marks1 + "</td></tr>");
// document.write("<tr><td>" + subject2 + "</td><td>" + totalMarks + "</td><td>" + marks2 + "</td></tr>");
// document.write("<tr><td>" + subject3 + "</td><td>" + totalMarks + "</td><td>" + marks3 + "</td></tr>");
// document.write("<tr><th>Total</th><th>" + totalMarks * 3 + "</th><th>" + totalObtainedMarks + "</th></tr>");
// document.write("<tr><th></th><th>Percentage</th><th>" + percentage.toFixed(2) + "%</th></tr>");
// document.write("</table>");



// CHAP 9 to 11//

// Q1//

// let city = prompt("Enter city name:");

// if (city.toLowerCase() === "karachi") {
//   alert("Welcome to the city of lights!");
// }

// Q2//

// let gender = prompt("Enter your gender (male/female):");

// if (gender === "male") {
//   alert("Good Morning Sir.");
// } else if (gender === "female") {
//   alert("Good Morning Ma'am.");
// } else {
//   alert("Invalid input. Please enter either 'male' or 'female'.");
// }

// Q3//

// var color = prompt("Enter color of road traffic signal:");
// if (color === "Red") {
//   document.write("Signal color: " + color + "<br>");
//   document.write("Message: Must Stop");
// } else if (color === "Yellow") {
//   document.write("Signal color: " + color + "<br>");
//   document.write("Message: Ready to move");
// } else if (color === "Green") {
//   document.write("Signal color: " + color + "<br>");
//   document.write("Message: Move now");
// } else {
//   document.write("Invalid color entered!");
// }

// Q4//

// var remainingFuel = parseFloat(prompt("Enter remaining fuel in car (in litres):"));

// if (remainingFuel < 0.25) {
  
//   alert("Please refill the fuel in your car");
// }
// else {

//   alert("Fuel is enough for now");
// }

// Q5//

// var subject1 = parseInt(prompt("Enter marks obtained in subject 1"));
// var subject2 = parseInt(prompt("Enter marks obtained in subject 2"));
// var subject3 = parseInt(prompt("Enter marks obtained in subject 3"));
// var totalMarks = parseInt(prompt("Enter total marks"));

// var obtainedMarks = subject1 + subject2 + subject3;
// var percentage = obtainedMarks / totalMarks * 100;

// var grade;
// if (percentage >= 80) {
//     grade = "A+";
// } else if (percentage >= 70) {
//     grade = "A";
// } else if (percentage >= 60) {
//     grade = "B";
// } else if (percentage >= 50) {
//     grade = "C";
// } else if (percentage >= 40) {
//     grade = "D";
// } else {
//     grade = "Fail";
// }

// var remarks;
// if (grade === "Fail") {
//     remarks = "Sorry, you have failed the exam.";
// } else if (percentage >= 80) {
//     remarks = "Excellent, keep up the good work!";
// } else if (percentage >= 60) {
//     remarks = "Good, but you can still do better.";
// } else {
//     remarks = "Work harder to improve your performance.";
// }

// document.write("<h1>Marks Sheet</h1>");
// document.write("<p>Total Marks: " + totalMarks + "</p>");
// document.write("<p>Obtained Marks: " + obtainedMarks + "</p>");
// document.write("<p>Percentage: " + percentage.toFixed(2) + "%</p>");
// document.write("<p>Grade: " + grade + "</p>");
// document.write("<p>Remarks: " + remarks + "</p>");

// Q8//
// var num = parseInt(prompt("Enter a number:"));
// if (num % 3 === 0) {
//     document.write(num + " is divisible by 3");
// } else {
//     document.write(num + " is not divisible by 3");
// }

// Q9//

// var num = parseInt(prompt("Enter a number:"));

// if (num % 2 === 0) {
//     document.write(num + " is an even number");
// } else {
//     document.write(num + " is an odd number");
// }

// Q11//

// var num1 = parseInt(prompt("Enter the first number:"));
// var num2 = parseInt(prompt("Enter the second number:"));
// var operator = prompt("Enter the operation (+, -, *, /, %):");

// if (operator === '+') {
//     document.write(num1 + " + " + num2 + " = " + (num1 + num2));
// } else if (operator === '-') {
//     document.write(num1 + " - " + num2 + " = " + (num1 - num2));
// } else if (operator === '*') {
//     document.write(num1 + " * " + num2 + " = " + (num1 * num2));
// } else if (operator === '/') {
//     document.write(num1 + " / " + num2 + " = " + (num1 / num2));
// } else if (operator === '%') {
//     document.write(num1 + " % " + num2 + " = " + (num1 % num2));
// } else {
//     document.write("Invalid operator!");
// }


// ....................END..................//

// CHAP 12 and 13//

// Q1//

// var char = prompt("Enter a character:");

// if (!isNaN(char)) {
//     document.write(char + " is a number");
// }
// else if (char.charCodeAt(0) >= 65 && char.charCodeAt(0) <= 90) {
//     document.write(char + " is an uppercase letter");
// }
// else if (char.charCodeAt(0) >= 97 && char.charCodeAt(0) <= 122) {
//     document.write(char + " is a lowercase letter");
// }
// else {
//     document.write(char + " is not a number or letter");
// }

// Q2//

// var num1 = parseInt(prompt("Enter first number:"));
// var num2 = parseInt(prompt("Enter second number:"));

// if (num1 > num2) {
//     document.write("The larger number is " + num1);
// } else if (num2 > num1) {
//     document.write("The larger number is " + num2);
// } else {
//     document.write("Both numbers are equal");
// }

// Q3//
// let num = parseFloat(prompt("Enter a number:"));

// if (num > 0) {
//   console.log("The number is positive");
// } else if (num < 0) {
//   console.log("The number is negative");
// } else {
//   console.log("The number is zero");
// }

// Q4//

// var = input("Enter a character: ")

// if var.lower() in ['a', 'e', 'i', 'o', 'u']:
//     print("True")
// else:
//     print("False")

// Q5//

// let correctPassword = "myPassword123";
// let userPassword = prompt("Enter your password:");

// if (userPassword === "") {
//   console.log("Please enter your password");
// } else if (userPassword === correctPassword) {
//   console.log("Correct! The password you entered matches the original password");
// } else {
//   console.log("Incorrect password");
// }

// Q6//

// var greeting;
// var hour = 13;

// if (hour < 18) {
//   greeting = "Good day";
// } else {
//   greeting = "Good evening";
// }

// Q7//

// let time24 = prompt("Enter time in 24-hour format (e.g. 1900):");


// let hour24 = parseInt(time24.substring(0, 2));
// let hour12, amPm;

// if (hour24 === 0) {
//   hour12 = 12;
//   amPm = "AM";
// } else if (hour24 < 12) {
//   hour12 = hour24;
//   amPm = "AM";
// } else if (hour24 === 12) {
//   hour12 = 12;
//   amPm = "PM";
// } else {
//   hour12 = hour24 - 12;
//   amPm = "PM";
// }

// if (hour12 < 10) {
//   hour12 = "0" + hour12;
// }

// let minutes = time24.substring(2, 4);
// let time12 = hour12 + ":" + minutes + " " + amPm;
// console.log("The time in 12-hour format is: " + time12);


















