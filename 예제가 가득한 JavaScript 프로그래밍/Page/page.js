// 앞페이지가 이력에 남음
location.href( "location" );

// 앞페이지가 이력에 남지 않음
location.replace( "location" );

// 이력에 현재 페이지 상태 저장하기
history.pushState( 'state' + 1, "state" + 1 );

//JSON parsing
var str = {
    'title': "JAVA"
    , 'price': "3500"
}
var obg = $.parseJSON( str );
console.log( obj.title );

// 페이지가 모두 읽힌 뒤
$( function () {

} );

$.addClass(); // 클래스 적용하기
$.removeClass(); // 클래스 제거하기
$.toggleClass(); // 클래스 적용 혹은 제외하기

// 높이와 폭 읽기
$.height();
$.width();

var data = {
    'page': 3,
    'common': 4
}

console.log( data.page );


