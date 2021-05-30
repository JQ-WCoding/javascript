$( "#hide" ).click( function () {
    $( "#p" ).show();
} );

$( "#show" ).click( function () {
    $( "#p" ).hide();
} );

// p 아이디를 가진 태그를 보였다 지웠다 할 수 있다

$( "#flip" ).click( function () {
    $( "#panel" ).slideDown();
} );


$("button").click(function(){
    // 안보이게 하기 밀리세컨드로 확인됨
    $("p").hide(1000);
    alert("문장지우기");
});
