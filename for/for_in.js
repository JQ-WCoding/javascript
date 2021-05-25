// for each 문과 사소하게 다른 형식이다 조심하자
var obj = {a: 1, b: 2, c: 3};

for ( const prop in obj ) {
    console.log( 'obj.${prop} = ${obj[prop]}' );
}

// 삼각형 예시
var triangle = {a: 1, b: 2, c: 3};

function ColoredTriangle() {
    this.color = 'red';
}

// 속성 자체를 설정해주는 방법
ColoredTriangle.prototype = triangle;

var obj = new ColoredTriangle();

for ( const prop in obj ) {
    // 해당 속성을 가지고 있다면
    if ( obj.hasOwnProperty( prop ) ) {
        console.log( 'obj.${prop} = ${obj[prop]}' );
    }
}

// 왜 에러가 날까?
// 같은 인덱스 값을 주는거 같은데 -> 현재는 버전이 올라가면서 지정되지 않은 행동에 대해서 반복문 형식이 아니라 취급하여 SyntaxError가 남
// var obj = {a: 1, b: 2, c: 3};
// for ( var i = 0 in obj ) {
//     console.log( obj[i] );
// }