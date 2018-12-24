// Question 4
document.write(`<p><b>Question.4. - </b>Binary tree insertion - level order.</p>`);

// Binary tree
let root = new TreeNode(10); 
root.left = new TreeNode(11); 
root.left.left = new TreeNode(7); 
root.right = new TreeNode(9); 
root.right.left = new TreeNode(15); 
root.right.right = new TreeNode(8); 
     
// Before
document.write(`<pre>Before Indertion :<br>`);
print2D(root, 0);
document.write(`</pre>`);
       
let num = 12; 
insertLevelOrder(root, num); 
       
// After
document.write(`<pre>After Insertion :<br>`);
print2D(root, 0);
document.write(`</pre>`);

function insertLevelOrder(temp, val) { 
  let q = []; 
  q.push(temp); 
       
  // Do level order traversal until we find 
  // an empty place.  
  while (q.length > 0) { 
    temp = q[0]; 
    q.shift(); 
        
    if (temp.left == null) { 
      temp.left = new TreeNode(val); 
      break; 
    } else{
      q.push(temp.left);
    }
                  
    if (temp.right == null) { 
      temp.right = new TreeNode(val); 
      break; 
    } else{
      q.push(temp.right); 
    }
  } 
} 