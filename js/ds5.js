// Question 5
document.write(`<p><b>Question.5. - </b>Solve an expression using expression tree.</p>`);

let exp = "4*5+100-20/2";

let expt = [];

//covert exp string to array
while(exp.length > 0){
  let t = parseInt(exp, 10);
  if(t != "")
    expt.push(t);
  exp = exp.replace(t, '');

  t = exp.charAt(0);
  if(t != "")
    expt.push(t);
  exp = exp.replace(t, '');;
}

let root = convertToExpTree(expt);
document.write(`<pre>Expression Tree :<br>`);
print2D(root, 0);
document.write(`</pre>`);

let total = calculate(root);

document.write(`<p>After solving the tree : ${total}.</p>`);

// exp array to tree
function convertToExpTree(exp){
  if(exp.length <= 1){
    return new TreeNode(exp[0]);
  }
  let t = exp.indexOf("+");
  let mid;
  if(exp.indexOf("+") != -1){
    mid = t;
  }else{
    mid = parseInt(exp.length/2, 10);
    if(exp[mid] == '*' || exp[mid] == '/' || exp[mid] == '+' || exp[mid] == '-' || exp[mid] == '%'){
  
    }else{
      mid--;
    }
  }
  let node = new TreeNode(exp[mid]);
  let l = exp.splice(0, mid);
  exp.shift();
  node.left = convertToExpTree(l);
  node.right = convertToExpTree(exp);

  return node;  
}

function calculate(root){
  
  if(root == undefined){
    return 0;
  }

  let l,r;
  
  l = calculate(root.left);
  r = calculate(root.right);

  switch(root.data){
    case "+":
      return l+r;
    break;
    case "-":
      return l-r;
    break;
    case "*":
      return l*r;
    break;
    case "/":
      return l/r;
    break;
    case "%":
      return l%r;
    break;
    default:
      return root.data;
    break;
  }
}