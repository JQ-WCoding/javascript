/**
 * 사양서 작성이 가능한 주석 예시
 * @param {String} name 이름
 * @param {Date} birth 생일
 * @author 이준규
 * @version 1.0.0
 */
var person = function ( name, birth ) {
    'use strict'; // Strict 모드 활성화
    this._name = name;
    this._birth = birth;
};

var obj1 = {
    a: 10
    , b: 20
    , c: 30
};
// 하단의 obj1.b 와 obj1['b']는 비슷하게 사용가능 하지만 만약 obj1.1은 사용 불가능 하고 obj1['1']은 사용 가능하다
console.log( obj1.b );
console.log( obj1['b'] );

// 연산자 비교
var i = 10;
var j = i++;
console.log( i ); // 11
console.log( j ); // 10

var x = 10;
var y = ++i;
console.log( x ); // 11
console.log( y ); // 11

// 객체의 프로퍼티 차례대로 열거
var obj = {
    name: '진달래'
    , type: '꽃'
    , price: 25000
};
for ( var key in obj ) {
    console.log( i + obj[key] );
}

var scope = 'Global';

function example() {
    var scope = 'local';

    var literalFnc = function () {
        return scope; // 지역 변수를 참조
    }
    console.log( literalFnc() );

    var conFnc = new Function( 'return scope;' ); // 전역 변수를 참조
    console.log( conFnc );
}

example();

