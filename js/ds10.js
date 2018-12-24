// Question 10
document.write(`<p><b>Question.9. - </b>Sort the array using quick sort algorithm.</p>`);

let arr = [];

// take array
let str = prompt("Enter the array seperated by a space", "");
for(let t of str.split(" ")){
  arr.push(t);
}

//arr = [9,4,7,2,5,6,1,0,3];

document.write(`<p>Array inserted : ${arr}.</p>`);
quicksort(arr, 0, arr.length-1);

document.write(`<p>Sorted Array : ${arr}.</p>`);

function quicksort(arr, left, right) {
  if(left >= right){
    return;
  }
  
  let pivot = arr[parseInt((left+right)/2, 10)];

  let index = partition(arr, left, right, pivot);
  quicksort(arr, left, index-1);
  quicksort(arr, index, right);
}

function partition(arr, left, right, pivot){
  while(left <= right){
    while(arr[left] < pivot){
      left++;
    }
    while(arr[right] > pivot){
      right--;
    }
    if(left <= right){
      swap(arr, left, right);
      left++;
      right--;
    }
  }
  return left;
}

function swap(arr, left, right){
  if(left == right){
    return;
  }
  let t = arr[left];
  arr[left] = arr[right];
  arr[right] = t;
}