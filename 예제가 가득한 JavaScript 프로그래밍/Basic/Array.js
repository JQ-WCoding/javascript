// 문자열 추가 및 삭제하기
var data = ['panda', 'rabbit', 'lion'];
data.push( 'elephant' ); // 끝에 추가
data.unshift( 'dog' ); // 가장 앞에 추가

data.pop(); // 가장 끝 요소 꺼내기
data.shift(); // 가장 앞 요소 꺼내기

// 배열 추가
data.concat( ['tiger', 'shark'] );

var data1 = {
    id: 10
    , name: 'Jun'
}
var data2 = {
    age: 28
    , married: false
}
var data3 = {
    bloodType: 'A'
    , name: 'Jun'
}
$.extend( data1, data2, data3 );
console.log( data1 ); // name은 중복됨으로 덮어씌어진다

// 배열의 요소 결합하기
data.join( ' ' ); // default : ',' -> 빈공간이 사이에 추가된다

// $.each
$( function () {
    var animal = [
        {
            name: 'bulldog'
            , type: 'dog'
        }
        , {
            name: 'yolk'
            , type: 'dog'
        }
        , {
            name: 'daks'
            , type: 'dog'
        }
        , {
            name: 'fold'
            , type: 'cat'
        }
        , {
            name: 'poma'
            , type: 'dog'
        }
    ];
    $.each( animal, function ( index, value ) {
        if ( value.type == 'cat' ) {
            return false;
        }
        $( '<li></li>' ).append( value.name ).appendTo( '#list' );
    } )

    // 해당 element 찾기
    $.inArray('daks', animal);
} )

