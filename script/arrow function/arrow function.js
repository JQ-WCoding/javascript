// Before
hello = function () {
    return "hello";
}

// function을 정의하는 새로운 방법들 ES6 에서 부터 추가된 기능
hello1 = () => "hello world";

var val = "world";
hello2 = ( val ) => "hello" + val;

// type 비교 주의점 간략한 정리
var x = 10;
var y = "10";

if ( x == y ) {
    console.log( "same value" );
}

if ( x === y ) {
    console.log( "different type" );
}