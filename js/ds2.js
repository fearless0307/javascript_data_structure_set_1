// Question 2
document.write(`<p><b>Question.2. - </b>Swap nodes of the linked list.</p>`);

// Initializing link list
head = new Node(1);
append(2);
append(3);
append(4);
append(5);
append(6);

// Node to be swaped
let swap1 = 3;
let swap2 = 5;

let current = head;

let node1;
let node2;

if(head.value == swap1){
  node1 = head;
}
// printing the linked list before the swap
document.write(`<p>Given Linked List :<br>`);
while(current != undefined){
  document.write(`${current.value} , `);
  if(current.next != undefined && current.next.value == swap1){
    node1 = current;
  }
  if(current.next != undefined && current.next.value == swap2){
    node2 = current;
  }
  current = current.next;
}
document.write(`</p>`);

document.write(`Swapping Node 3 with Node 5.`);

//swapping
let t = node1.next;
let t1 = node1.next.next;
let t2 = node2.next.next;

node1.next = node2.next;
node1.next.next = t1;

node2.next = t;
node2.next.next = t2;

document.write(`<p>After swapping : </p>`);
travelWrite(head);