
function printArray(array, symbol="->", reversed=false) {
  if (!reversed) {
    for (var i = 0; i < array.length; i++) {
      console.log(i + " " + symbol + " "+ array[i] );
    }
  }
  else {
    for (var i = names.length-1; i >= 0; i--) {
      console.log(i + " " + symbol + " "+ names[i] );
    }
  }
}

var names = ["James", "Jill", "Jane", "Jack"];
printArray(names, "-");
