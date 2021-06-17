// 문자열 공백 지우기
var str = '\n     SDC 프로젝트는 프로그래밍 커뮤니티 이다.          ';
console.log($.trim(str));

// 문자열 자르기 substring() 과 slice의 차이
var sentence = 'hi, nice to mee you';
console.log(sentence.substring(7, 4)); // 자동으로 순번을 바꿔줌
console.log(sentence.slice(7, 4)); // 비어 있는 문자열

console.log(sentence.substring(4, -3)); // -3을 0으로 반환하고 자리 바꿈
console.log(sentence.slice(4, -3)); // 끝에서 부터 3문자 제외
