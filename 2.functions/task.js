"use strict"
// Задание 1
function getArrayParams(arr) {
  let max = -100;
  let min = 100;
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > max) {
      max = arr[i];
    } if (arr[i] < min) {
      min = arr[i];
    }
  }
  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
  }
  let avg = (sum / arr.length.toFixed(2));   
  console.log(avg);
  let resObject = { max: max, min: min, avg: avg };
  return resObject;
}
let arr1 = [1, 2, 3, -100, 10]
let arr2 = [-99, 99, 10];
let result2 = getArrayParams(arr2);
let result = getArrayParams(arr1);
console.log(result);
console.log(result2); 
  //avg((sum / arr.length).toFixed(2));
getArrayParams([-99, 99, 10]);
getArrayParams([1, 2, 3, -100, 10]);
// Задание 2
function worker(arr) {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
  }
return sum;
}
worker([6, 4, 4]);
console.log(worker([5,5,5]));
function makeWork(arrOfArr, worker) {
  let max;
  for (let i = 0; i < arrOfArr.length; i++) {
  let sum = worker(arrOfArr[i]);
    max = worker(arrOfArr[0]);
    if (sum > max) {
      max = sum;
    }
  }
  return max;
}
makeWork([[19,19,7], [44,18,7]], worker);
console.log(makeWork([[19,19,7], [44,18,7]], worker));
  

// Задание 3
function worker2(arr) {
  arr = [-99, -3, 10];
  let max = -100;
  let min = 100;
  let diff;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > max) {
      max = arr[i];
    } if (arr[i] < min) {
      min = arr[i];
    }   
  }
  diff = (min - max);
    console.log(diff);
  return diff;
}
