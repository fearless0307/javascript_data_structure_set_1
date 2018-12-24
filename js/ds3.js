// Question 3
document.write(`<p><b>Question.3. - </b>Reverse linked list.</p>`);

// Initializing link list
head = new Node(1);
append(2);
append(3);
append(4);
append(5);

let current = head;

// printing the linked list
document.write(`<p>Given Linked List :<br>`);
travelWrite(head);

reverseLinkedList(head);

function reverseLinkedList(current){
  let t = reverseList(current);
  t.next = undefined;
}

function reverseList(current){
  
  if(current.next == undefined){
    head = current;
    return current;
  }  
  let tt = reverseList(current.next);
  tt.next = current;
  return current;
}

document.write(`<p>After reverding the linked list : </p>`);
travelWrite(head);