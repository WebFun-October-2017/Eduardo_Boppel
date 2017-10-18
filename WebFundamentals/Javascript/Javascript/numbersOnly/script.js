
// COPYING TO A NEW ARRAY USING THE PUSH METHOD
console.log("Copying to a new array using the PUSH method:");


function numbersOnly(array) {
  var newArray = [];

  for(var i = 0; i < array.length; i++) {
    if(typeof array[i] === 'number') {
      newArray.push(array[i]);
    }
  }
  return newArray;
}

var array1 = [1, "apple", -3, "orange", 0.5];
var newArray = numbersOnly(array1);
console.log("The old array is: " + array1 + " with a length of: " + array1.length)
console.log("The new array is: " + newArray + " with a length of: " + newArray.length);
console.log(" ");



// REMOVING FROM THE ARRAY USING THE SPLICE METHOD
console.log("Removing it from the array using the SPLICE method:");

function removeNumbers(array) {
  for(var i = 0; i < array.length; i++) {
    if(typeof array[i] !== 'number') {
      array.splice([i], 1);
      i--
    }
  }
  return array;
}

var array3 = [1, "apple", -0.3, "orange", 0.5];
console.log("The array is: " + removeNumbers(array3)  + " with length of: " +  array3.length );
