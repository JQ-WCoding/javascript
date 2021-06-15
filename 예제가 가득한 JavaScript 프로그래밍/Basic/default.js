// 기본값 설정하기 -> 무조건 기본적으로 행동을 하게끔 만들어줌
function getSquareArea( o_width, o_height ) {
    if ( o_width === undefined ) {
        o_width = 1;
    }
    if ( o_height === undefined ) {
        o_height = 1;
    }
    return o_width * o_height;
}

// 오류 메세지 출력 방법
function getSquareArea_A( o_width, o_height ) {
    if ( o_width === undefined ) {
        throw {
            name: 'ArgsMissing'
            , message: 'no width'
        }
    }
    if ( o_height === undefined ) {
        throw {
            name: 'ArgsMissing'
            , message: 'no height'
        }
    }
    return o_width * o_height;
}

try {
    console.log( getSquareArea_A() );
} catch ( e ) {
    console.log( e.message );
}