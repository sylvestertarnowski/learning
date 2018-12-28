"use strict";

function createArrayFromRange(a, b, c = 1) {
  let result = [];
  if (a <= b) {
    for (let i = a; i <= b; i += c) {
      result.push(i);
    }
  } else {
    for (let i = a; i >= b; i += c) {
      result.push(i);
    }
  }
  return result;
}

function sumArray(numbers) {
  let result = 0;
  for (let i = 0; i < numbers.length; i++) {
    result += numbers[i];
  }
  return result;
}

function reverseArray(array) {
  let newArray = [];
  for (let i = 0; i < array.length; i++) {
    newArray.unshift(array[i]);
  }
  return newArray;
}

let example = createArrayFromRange(1, 10);

function reverseArrayInPlace(array) {
  let arrayLength = array.length;
  for (let i = 0; i < arrayLength*2; i+=2) {
    array.unshift(array[i]);
  }
  arrayLength = array.length;
  for (let i = arrayLength-1; i >= arrayLength/2; i--) {
    array.pop(array[i]);
  }
  return array;
}

let list = {
  value: 1,
  rest: {
    value: 2,
    rest: {
      value: 3,
      rest: null
    }
  }
}