var chocolateBars = ["snickers", "hundred grand", "kitkat", "skittles" ];

function addElementToBeginningOfArray(array, element) {
  return [element, ...array];
}

function destructivelyAddElementToBeginningOfArray(array, element) {
  array.unshift(element);
  return array;
}

function addElementToEndOfArray(array, element) {
  return [ ...array, element ];
}

function destructivelyAddElementToEndOfArray(array, element) {
  array.push(element);
  return array;
}

function accessElementInArray() {
  var array = [ array, array1, array2, array3 ];
  console.log(array[3]);
}

function removeElementFromBeginningOfArray(array) {
  return array.slice(0);
}

function destructivelyRemoveElementFromBeginningOfArray(array) {
  array.shift();
  return array;
}

function removeElementFromEndOfArray(array) {
  return array.slice();
}

function destructivelyRemoveElementFromEndOfArray(array) {
  array.pop();
  return array;
}
