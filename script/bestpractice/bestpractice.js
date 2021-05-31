var x = "Jun";
var y = new String( "Jun" );
console.log( x === y ); // is false (x is a string, y is an object)

var x = new String( "jun" );
var y = new String( "jun" );
console.log( x == y ); // is false (cannot compare objects)