function example(){
    var x = z = 100;
}
example();
console.log(z); // 100 -> x = 'z=100'으로 간주되어 암묵적으로 전역변수 생성

// 모든 변수를 지역변수로만 사용하는 방법
(function (  ){
    var data = 108;
    console.log(data);
}).call(this);
console.log(data);