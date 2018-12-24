// Question 9
document.write(`<p><b>Question.9. - </b>Randomize array.</p>`);

let arr = [];

//take array
let str = prompt("Enter the array seperated by a space", "");
for(let t of str.split(" ")){
  arr.push(t);
}

document.write(`<p>Array inserted : ${arr}.</p>`);

let len = arr.length;
let arrT = [];

for(let i = 0; i < len; i++){
  while(true){
    let t = Math.random()*(len-1);
    let tt = Math.round(t);
    if(arrT[tt] == undefined){
      arrT[tt] = arr[i];
      break;
    }
  }
}

document.write(`<p>Randomized Array : ${arrT}.</p>`);