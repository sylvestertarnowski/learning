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
  for (let i = 0; i < arrayLength * 2; i += 2) {
    array.unshift(array[i]);
  }
  arrayLength = array.length;
  for (let i = arrayLength - 1; i >= arrayLength / 2; i--) {
    array.pop(array[i]);
  }
  return array;
}

let list = {
  value: "big",
  rest: {
    value: "cig",
    rest: {
      value: "dig",
      rest: {
        value: "fig",
        rest: {
          value: "gig",
          rest: {
            value: "hig",
            rest: null
          }
        }
      }
    }
  }
}

function arrayToList(items, n = 0) {
  if (n == items.length) {
    return null;
  } else {
    return {
      value: items[n],
      rest: arrayToList(items, n + 1)
    }
  }
}

function listToArray(list) {
  let result = [];
  while (list.rest) {
    result.push(list.value);
    list = list.rest;
  }
  result.push(list.value);
  return result;
}

function prepend(value, list) {
  return {
    value: value,
    rest: list
  }
}

function nth(list, item) {
  let array = listToArray(list);
  return array[item];
}

function deepEqual(a, b) {
  if (typeof(a) == typeof(b)) {
    if (typeof(a) == "object") {
      let keysOfA = Object.keys(a);
      let keysOfB = Object.keys(b);
      for (let i = 0; i < Math.max(keysOfA.length, keysOfB.length); i++) {
        if (keysOfA[i] != keysOfB[i]) {
          return false;
        } else {
          return true;
        }
      }
    } else {
      if (a === b) {
        return true;
      } else {
        return false;
      }
    }
  } else {
    return false;
  }
}

// Output even numbers between 2 and 10

for(let i = 2; i <= 10; i++) {
  if (i % 2 == 0) {
    console.log(i);
  }
}

function replaceFor(){
  let i = 0;
  while(i < 3) {
    alert(`number ${i}`);
    i++;
  }
}

function whileLessThanHundred() {
  let i = prompt("Give me number");
  while(i <= 100) {
    i = prompt("Give me another number");
  }
}

function switchIntoIfElse(){
  let browser = prompt("What browser are you using?");
  if (browser == "Edge"){
    alert( "You've got the Edge!" );
  } else if (browser == "Chrome" || "Firefox" || "Safari" || "Opera") {
    alert( 'Okay we support these browsers too' );
  } else {
    alert( 'We hope that this page looks ok!' );
  }
}

function checkAge(age) {
  // if (age > 18) {
  //   return true;
  // } else {
  //   return confirm('Do you have your parents permission to access this page?');
  // }

  // return (age > 18) ? true : confirm('Do you have your parents permission to access this page?');
  return (age > 18) || confirm('Do you have your parents permission to access this page?');
}

function min(a, b) {
  if (a < b) {
    return a;
  } else {
    return b;
  }
}

function power(num, exponent) {
  if (exponent == 0) {
    return 1;
  } else {
    return num * power(num, exponent - 1);
  }
}

