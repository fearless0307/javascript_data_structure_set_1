// Question 1
document.write(`<p><b>Question.1. - </b>Find length of loop in the linked list.</p>`);

// Initializing link list
let link1 = new Node(1);
let link2 = new Node(2);
let link3 = new Node(3);
let link4 = new Node(4);
let link5 = new Node(5);
link1.next = link2;
link2.next = link3;
link3.next = link4;
link4.next = link5;
link5.next = link2;

let visited = [];

let current = link1;
let totalLength = 0;
let length = 0;
let loopStart;

// Printing the linked list
document.write(`<p>Given Linked List :<br>`);
while(true){
  if(visited.includes(current.value)){
    loopStart = current;
    break;
  }
  visited.push(current.value);
  document.write(`${current.value} , `);
  totalLength++;
  current = current.next;
}
document.write(`</p>`);

// total length of linked list
document.write(`<p>Total length of Linked list : ${totalLength}.</p>`);

current = link1;
while(true){
  console.log(current.value);
  if(current.value == loopStart.value){
    break;
  }
  length++;
  current = current.next;
}

// length of loop
document.write(`<p>Length of loop : ${totalLength - length}.</p>`);

document.write(`<p>Loop : <br>`);
current = loopStart;
for(let i = 0; i < totalLength-length; i++){
  document.write(`${current.value} , `);
  current = current.next;
}
document.write(`</p>`);