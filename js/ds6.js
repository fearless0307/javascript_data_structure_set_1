// Question 6
document.write(`<p><b>Question.6. - </b>Sum of 2 very large numbers.</p>`);

// taking the input
let num1 = prompt("Enter first number", "");
let num2 = prompt("Enter second number", "");

//let num1 = "1111111111";
//let num2 = "9999911111";

document.write(`<p>First number : ${num1}.<br>Second number : ${num2}.</p>`);

if(num1.length > num2.length){
  let t = num1;
  num1 = num2;
  num2 = t;
}

document.write(`<p>First number : ${num1}.<br>Second number : ${num2}.</p>`);

let l1 = num1.length;
let l2 = num2.length;

let diff = l2 - l1;

let sum = "";
let carry = 0;

for(let i = l1-1; i >= 0; i--){
  let s = parseInt(num1.charAt(i), 10) + parseInt(num2.charAt(i+diff), 10) + carry;
  sum = sum + s%10;
  carry = parseInt(s/10, 10);
}

for(let i = diff-1; i >= 0; i--){
  let s = parseInt(num2.charAt(i), 10) + carry;
  sum = sum + s%10;
  carry = parseInt(s/10, 10);
}

if(carry){
  sum = sum + carry;
}

sum = sum.split("").reverse().join("");

document.write(`<p>Sum of given number : ${sum}.</p>`);