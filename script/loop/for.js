// loop in
var numbers = [1, 2, 3, 4, 5];

var text1 = "";
for ( var x in numbers ) {
    text1 += numbers[x] + "<br>";
}
console.log( text1 );

// loop of (Array)
var cars = ["bmw", "benz", "audi", "volvo"];
var text2 = "";
for ( var x of cars ) {
    text2 += x + "<br>";
}
console.log( text2 );
// loop of (String)
var language = "JavaScript";
var text3 = "";
for ( var x of language ) {
    text3 += x + "<br>";
}
console.log( text3 );

