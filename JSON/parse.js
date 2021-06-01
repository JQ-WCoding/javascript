// parse
var txt1 = '{"name" : "Jhon", "age" : 30, "city" : "New York"}';
var obj1 = JSON.parse( txt );
document.getElementById( "demo" ).innerHTML = obj.name + ", " + obj.age;

// stringify
var obj2 = {
    name: "Jun",
    age: 28,
    city: "Seoul"
};
var myJSON = JSON.stringify( obj2 );
document.getElementById( "demo" ).innerHTML = myJSON;

// two diffrent ways to access object values
// 1.
myObj = {
    "name": "Jun",
    "age": 30,
    "car": null
};
x = myObj.name;

// 2.
x = myObj["name"];
