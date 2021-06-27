// 리스트를 coordinate 아이디에 입력
$( '<li>List</li>' ).prependTo( '#coordinate' );
$( '<li>List</li>' ).appendTo( '#coordinate' );
$( '<li>List</li>' ).insertBefore( '#coordinate' );
$( '<li>List</li>' ).insertAfter( '#coordinate' );

// 반대의 경우
$( '#coordinate' ).before( '<li>List</li>' );
$( '#coordinate' ).append( '<li>List</li>' );
$( '#coordinate' ).prepend( '<li>List</li>' );
$( '#coordinate' ).after( '<li>List</li>' );

// 요소 변경하기
$( '#checkAll' ).replaceWith( '<li>List</li>' );

// 삭제하기
$( '#checkAll' ).remove();

// 내용 비우기
$( '#checkAll' ).empty();




