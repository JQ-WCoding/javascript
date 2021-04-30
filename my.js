$( document ).ready( function () {
    $( '#search' ).on( 'click', function () {
        var item = $( '#searchItem' ).val();
        // 다양한 방법 시도
        // $(this).parent(".searchInput").parent(".searchInputWrap").siblings("p").text(item);
        // $(this).closest("section").children("p").text(item);
        $(this).parents("section").children("p").text(item);
    } );

    // 반복되는 작업을 줄이기 위해 class 와 this 를 이용
    $( ".buttons" ).on( "click", function () {
        console.log( $( this ).siblings( "dl" ) );
        $( this ).siblings( "dl" ).toggle();
        // $( this ).closest( ".some" ).toggle();
    } );

    // $( ".buttons" ).on( "click", function () {
    //     console.log( $( this ).children( "dl" ) );
    //     $( this ).children( "dl" ).toggle();
    //     // $( this ).closest( ".some" ).toggle();
    // } );
    // var images = $('#img-button1').attr('src');
    // alert(images)
    // var array = [];
    // array = $( ".buttons" ).attr( "id" );
    // alert( array );
} )


// var promise = $('video').play();
//
// if (promise !== undefined) {
//     promise.then(_ => {
//         // Autoplay started!
//     }).catch(error => {
//         // Autoplay was prevented.
//         // Show a "Play" button so that user can start playback.
//     });
// }