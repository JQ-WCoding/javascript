// String 과 숫자를 더할때 숫자를 string으로 가지면 숫자로 인식해줌
var x = "10";
var y = 20;
console.log( x + y ); // 30

// 문자열과 숫자가 그냥 합쳐지면
// 숫자를 문자열로 취급하여 같이 합쳐지는 형식
var num = 10;
var word = "ten";
console.log( num + word ); // 10ten

// 순서의 중요도!
var num1 = 10;
var num2 = 20;
var word1 = "number";

// 두가지의 경우 출력 형태가 다르다
// 순서대로 진행하면서 문자열로 변화된 데이터 형식인지 구분이 중요하다
console.log( num1 + num2 + word1 ); // 30ten
console.log( word1 + num1 + num2 ); // ten1020

// 짧은 나만 헷갈렷던것 띄어쓰기로 정의하여 깔끔하게 출력하기
var data = {
    name: 'lee',
    interest: 'study',
    job: 'programmer'
}
console.log( data );