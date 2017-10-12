var names = ["James", "Jill", "Jane", "Jack"];
var symbol = "->"
var reversed = false;

if (reversed === false ) {
  for (var i = 0; i < names.length; i++) {
    console.log(i + " " + symbol + " "+ names[i] );
  }
}
else {
  for (var i = names.length-1; i >= 0; i--) {
    console.log(i + " " + symbol + " "+ names[i] );
  }
}
