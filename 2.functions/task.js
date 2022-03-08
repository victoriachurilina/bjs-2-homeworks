"use strict"
// Задание 1
function getArrayParams(arr) {
  let max = -Infinity;
  let min = Infinity;
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
  let avg = parseFloat((sum / arr.length).toFixed(2));
  return { max: max, min: min, avg: avg };
}
let arr1 = [1, 2, 3, -100, 10]
let arr2 = [-99, 99, 10];
let result2 = getArrayParams(arr2);
let result = getArrayParams(arr1);
console.log(result);
console.log(result2);

// Задание 2
function worker(arr) {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
  }
return sum;
}
worker([6, 4, 4]);
let func = worker;//ili worker2
function makeWork(arrOfArr, func) {
  let max;
  for (let i = 0; i < arrOfArr.length; i++) {
  let sum = func(arrOfArr[i]);
    max = func(arrOfArr[0]);
    if (sum > max) {
      max = sum;
    }
  }
  return max;
}
makeWork([[19,19,7], [44,18,7]], func);
console.log(makeWork([[19,19,7], [44,18,7]], func));
// Задание 3
function worker2(arr) {
  let max = -Infinity;
  let min = Infinity;
  let diff;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > max) {
      max = arr[i];
    } if (arr[i] < min) {
      min = arr[i];
    }
  }
  diff = (min - max);
  diff = Math.abs(diff);
  return diff;
}
console.log(worker2([-1, -99]));

//Надеюсь, все правильно.. Спасибо, Владимир
