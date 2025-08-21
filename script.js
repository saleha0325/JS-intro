// let num1 = parseFloat(prompt("enter first number"));
// let num2 = parseFloat(prompt("enter second number"));
// let operator = (prompt("enter operator"));
// let result = 0;
// document.writeln("number1:" + num1 + "<br>");
// document.writeln("number2:" + num2 + "<br>");
// document.writeln("operator:" + operator + "<br>");
// if (operator === "+") {
//     let sum = num1 + num2;
//     document.writeln("sum:" + sum + "<br>");
// } else if (operator === "-") {
//     let difference = num1 - num2;
//     document.writeln("difference:" + difference + "<br>");
// }
// else if (operator === "*") {
//     let product = num1 * num2;
//     document.writeln("product:" + product + "<br>");
// }
// else if (operator === "/") {
//     let quotient = num1 / num2;
//     document.writeln("quotient:" + quotient + "<br>");
// }
// for(let i=0; i<10; i++){
//     document.writeln("count-" + (i+1) +"<br>");
// }
// document.writeln("<hr>");
// document.writeln("while loop! <br>");
// let doMore="Y";

// while(doMore==="Y"){
//     document.writeln("this is while loop! <br>");
//     doMore=window.prompt("do you want to continue while loop?");
// }
// document.writeln("you exit from while loop!");
// document.writeln("<hr>");

let check_var = "variable";
document.writeln("this is double qoute text" + check_var + "<br>");
document.writeln('this is single qoute text ' + check_var + '<br>');
document.writeln(`this is back tik text ${check_var}  <br>`);


// let is_even=false;
// if(10 % 2 ===0){
//     is_even = true;
// }else{
//     is_even = false;
// }

let is_even = 10 % 2 === 0 ? true : false;

if (is_even) {
    document.writeln(`the number is even <br>`);
} else {
    document.writeln(`the number is odd! <br>`);
}

//------------------------------------------------
//array

let odd_numbers = [1, 3, 5, 7];
document.writeln(`value at index-0 = ${odd_numbers[0]} <br>`);
for (let index = 0; index < odd_numbers.length; index++) {
    document.writeln(`value at index-${index} = ${odd_numbers[index]} <br>`);
}
// document.writeln(odd_numbers);
document.writeln(`${odd_numbers} <br> <hr>`);


//------------------------------------------------
//js function

function myFunction(){
    document.writeln(`hello from myFunction() <br> `);
}
myFunction();
// -------------------
function addNumbers(num1,num2){
    return num1+num2;
}
let num1=6;
let num2=7;
document.writeln(`Number-1: ${num1} <br>`);
document.writeln(`Number-2: ${num2} <br>`);
document.writeln(`the sum: ${ addNumbers(num1, num2)} <br>`)
// let sum=addNumbers(num1,num2);
// document.writeln(`the sum:${sum} <br>`);