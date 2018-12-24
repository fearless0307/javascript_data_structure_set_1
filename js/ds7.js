// Question 7
document.write(`<p><b>Question.7. - </b>Move spaces to front of string in single traversal.</p>`);

// string
//let str = prompt("Enter the string", "");

let str = "abc defg hij klm";

document.write(`<pre>Given String : ${str}</pre>`);

for(let i = 0; i < str.length; i++){
  if(str.charAt(i) == " "){
    str = str.slice(0, i) + str.slice(i+1);
    str = " " + str;
  }
}

document.write(`<pre>After shifting the space to front :<br>`);
document.write(`${str}</pre>`);