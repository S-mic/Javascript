// alert('This is a javascript connectivity')

// Variables 
// Variable is a container or Variables are memory locations which hold values 

//var a = 1;

/* let a = 3; Interger datatype
let b = "Sasha"; String datatype
let c = false; boolean 
*/


/*let a = 5;
let b = 3; 

let result = a + b;

alert(result);*/
//  alert("the result of 5+ 3 = " + result);




// Conditional Statement 
// Javascript Datatypes

/*let a = 7;
let b = 30;

if(a > b){
console.log("A is higher than B");
}

else {
   console.log("A is less than B");
}*/

// Tenary operation
/*let a = 7
let b = 30
console.log(a > b ? "A is bigger" : "B is bigger");

//  The Switch statement
/* evaluates an expression, matching the expression's value to a 
 case clause, and excutes statements associated with that case*/

//   working on a switch 

/*let city = "Benin";

switch(city) {
    case "Abuja":
        console.log("Abuja is the federal Capital of Nigeria");
        break;

    case "Benin":
        console.log("Benin is the heart of Nigeria");
        break;


    case "Accra":
        console.log("Accra is the capital of Ghana");
        break;


    default:
        console.log("Selected city is not availble");

}*/

// ARITHETIC OPERATORS 
/* 7+7
7*7
7-7
7/7
let addition = a+b;
  
// Equality operators
=== (equal signs)
!== ( not equal signs)
*/

/*EQUALITY OPERATORS
let a = 11;
let b = 11;
if (a === b) {
    console.log("Same values");
}

else {
    console.log("Different values");
}*/

// UNARY OPERATIORS
/* ++num
num++,+
let year = "1967";
console.log(++year)

let year = "1967";
console.log(++year);
*/
/* RELATIONAL OPERATORS
<,>,>=,<=
if(4>=9){}
if(num1<=num2)

LOGICAL OPERATORS
&& ( And sign)
|| (Or sign)
if (a < b && b < c){}
if (a > b || b > c){}

CONDITIONAL OPERATORS
if
else 
?
switch

ASSIGMENT OPERATORS
+=
-=
*=
=5

//  Walking with all the operators 
//    // Question 
    //Write a program to find the maximum of three numbers 
    
let num1 = 101, num2 = 32,num3 = 57;
if (num1 > num2 && num1 > num3) {
    console.log("Num 1 is the highest value");
}
else if (num2 > num1 && num2 > num3) {
    console.log("Num 2 is the highest value");
}
else if (num3 > num1 && num3> num2){
    console.log("Num 3 is the highest value");
}
else {
    console.log("All numbers are the same");
}*/

// Write a program to find the following scores in a tertiary institution.
// If a student got between 75-100 print out >> FIRST CLASS UPPER
// If a student got between 65-74 print out  >> SECOND CLASS UPPER
// If a student got between 50-64 print out  >> SECOND CLASS LOWER
// If a student got between 41-49 print out  >> THIRD CLASS
// If a student got between 30-40 print out  >> PASS
// ELSE FAIL


//  SOLUTION

/*let scores = 23;
if(scores >= 75 && scores <=100){
console.log("FIRST CLASS UPPER");
}

else if(scores >= 65 && scores <= 74){
    console.log("SECOND CLASS UPPER");
}
else if(scores >= 50 && scores <=64){
    console.log("SECOND CLASS LOWER");
}
else if(scores >= 41 && scores <= 49){
    console.log("THIRD CLASS");
}
else if(scores >= 30 && scores <= 40){
console.log("PASS");
}
else{
 console.log("failed...Asked to withdraw");
}*/

// LOOP 
// A Loop is a sequence of instructions that is continually repeated 
//  until a certain condition is met 

// TYPE OF LOOP 
//While Loop
/*let count = 0;
while(count < 10){
    document.write(count," learning while loop </br>");
    //count = count = 1;
    //count += 1;
    count ++;
}*/

//Do-while Loop 
// do {
// let num = 0;
// do{
// document.write(num," Do While Loop </br>");
// num ++;
// } while(num < 10)

// For Loop
//     for(let num = 1; num <= 20; num++){
// document.write(num,"<br/>");
// if(num % 2 == 0){
//     document.write("Even </br>");
// }
// else if (num % 3 == 0){
//     document.write("Odd </br>");
// }
// else{
//     document.write(num, "</br>");
// }
// }


// ASSESSMENT

// Write a Javascript program to run a fizz buzz game from 1-100

//  INSTRUCTIONS 
// declare and initialize your variable num = 1
// print out FizzBuzz if num % 3 & num % 5 equals 0
// print out Fizz if num % 3 equals 0 
// print out BUZZ if num % 5 equals 0 
// else print num

// document.write("THIS IS A FIZZ-BUZZ GAME!!! </br>");

// for (let num = 1; num <= 100; num++){
//     // document.write(num, "</br>");
//     if (num % 3 == 0 && num % 5 == 0){
//         document.write("FizzBuzz </br>");
//     }
//     else if(num % 3 == 0){
//         document.write("Fizz </br>");
//     }
//     else if(num % 5 == 0){
//         document.write("Buzz </br>");
//     }
//     else{
//         document.write(num, "</br>");
//     }
// }



//  FUNCTION / METHOD 
//  A function is a group of reusable codes which can be called anywhere in your program

//  function saySasha(){
//      document.write("Hi sasha");
// }
//saySasha();


//function  calcArea(width,height){
  //  let area = width * height; 
    //document.write(area);
//}

//calcArea(3, 5);

//function calc(){
  //  let w = document.getElementById("width").value;
    //let h = document.getElementById("height").value;

    //let area = w * h;

     //document.getElementById("answer").value = area;
//}

//  FUNCTION ASSESSMENT
/* Write a Javascript program to find the area of the triangle given 
the three sides of the three sides of the triangle as a, b, c. 
area = sqrt(s-a)(s-b)(s-c). where s = a+b+c/2.

Hint > let area = Math.sqrt(s*(s-a)*(s-b)*(s-c));
let s = a+b+c/2 */

// 
// let a = 3;
// let b = 4;
// let c = 6;
//  let s = a*b*c/2;
// function  calcArea(a,b,c){
// let area = Math.sqrt(s*(s-a)*(s-b)*(s-c));
// document.write(area);
// }
//calcArea();

// CORRECT ONE 
// function calc(){
   
//     let a = document.getElementById("a").value;
//     let b = document.getElementById("b").value;
//     let c = document.getElementById("c").value;
//     let s = a*b*c/2;
//     let area = Math.sqrt(s*(s-a)*(s-b)*(s-c));
//     document.getElementById("answer").value = area;
//  }

// ARRAYS
// Array is an object that store multiple values on a single variable.

// let subjectNames = ["Maths",20,30,"English"," Civil"];
//  document.write(subjectNames[2]);

// let femaleNames = [];
//  femaleNames[0] = "Sasha";
//  femaleNames[1] = "Michelle";
//  femaleNames[2] = "Imani";
// document.write(femaleNames[2]);

//  OBJECT ARRAYS 
// A. Encapsulation - the bundling of data with the mechanisms or methods that operate on the data.
// B. Aggregation - An aggregator is a software program designed to collect data from multiple sources. 
// C. Inheritance - Inheritance is a concept in object-oriented programming that allows one class to inherit properties and characteristics from another class.
// D. Polymorphism - having many forms

//  NUMBER
// let num1 = 3;
// let num2 = 5;

// document.write(num1+num2 + "<br>");
// let num3 = 4;
// let num4 = "6";
// document.write(num3+num4);

// let num1 = 7.6;
// let num2 = Math.round(num1);
// let value = Math.floor(Math.random() *10);

//  document.write(value);

// DESTRUCTURING ARRAYS
// When we destructure an array, we are assigningit into a variable.

// First Example 
// let nameOfAnimals = ["cats","dogs","rabbits","goats","cows","lion"];
// let [animal1, animal2, animal3, animal4, animal5, animal6] = nameOfAnimals;
// document.write(animal6, animal3);

// Second Example
// let carNames = ["Toyota", "Lexus", "BMW", "Renault"];
// //let car1, remaingCars;
// [car1,...remaingCars] = carNames;
// document.write(car1, remaingCars);

// Third Example
let carNames = ["Toyota", "Lexus", "BMW", "Renault"];
let remaingCars;
 [,,,...remaingCars] = carNames;
 document.write(remaingCars);





















































































































































