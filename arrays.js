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

function removeElementFromBeginningOfArray(element, array) {
  return array.slice(element);
}

function destructivelyRemoveElementFromBeginningOfArray(array, element) {
  array.shift(element);
  return array;
}

function removeElementFromEndOfArray(array, element) {
  return array.slice(element);
}

function destructivelyRemoveElementFromEndOfArray(array, element) {
  array.pop(element);
  return array;
}
