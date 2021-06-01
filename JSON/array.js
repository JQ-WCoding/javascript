var obj, x;
obj = {
    name: "Jun",
    age: 28,
    cars: ["BMW", "Benz", "Audi"]
};
x = obj.cars[0]; // BMW

// 반복문을 통해 추가 가능
for ( i = 0; i < obj.cars.length; i++ ) {
    x += obj.cars[i] + "<br>";
}
