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

function destructivelyAddElementToEndOfArray() {
  var array = [ 1 ];
  array.push('foo');
  return array;
}

function accessElementInArray() {
  var array = [ 1, 2, 3, 4, 5 ];
  console.log(array[3]);
}

function removeElementFromBeginningOfArray() {
  var array = [ 'foo', 1 ];
  array.slice(0);
  return array;
}

function destructivelyRemoveElementFromBeginningOfArray() {
  var array = [ 1, 2, 3 ];
  array.shift(0);
  return array;
}

function removeElementFromEndOfArray() {
  var array = [ 1, 2, 3 ];
  array = array.slice(-1);
  return array;
}

function destructivelyRemoveElementFromEndOfArray() {
  var array = [ 1, 2, 3 ];
  array.pop(2);
  return array;
}
