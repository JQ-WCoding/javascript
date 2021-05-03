$( function () {
    var winW = 0;
    var cnt = 0;
    var setId = 0;
    setTimeout( resizeFn, 100 );

    // 반응형
    function resizeFn() {
        winW = $( window ).innerWidth();

        $( ".slide" ).css( {width: winW} );
    }

    $( window ).resize( function () {
        resizeFn();
    } );

    autoplayFn();

    function autoplayFn() {
        setId = setInterval( nextCountFn, 2500 )
    }

    $( ".pageBt" ).each( function ( idx ) {
        $( this ).click( function () {
            clearInterval( setId );
            cnt = idx;
            mainSlideFn();
        } )
    } );

    function nextCountFn() {
        cnt++;
        mainSlideFn();
    }

    function prevCountFn() {
        cnt--;
        mainSlideFn();
    }

    function mainSlideFn() {
        $( ".slideWrap" ).stop().animate( {left: ( -100 * cnt ) + "%"}, 600, function () {
            if ( cnt > 3 ) {
                cnt = 0;
            }
            if ( cnt < 0 ) {
                cnt = 3;
            }
            $( ".slideWrap" ).stop().animate( {left: ( -100 * cnt ) + "%"}, 0 )
        } );
        $( ".pageBt" ).removeClass( "addPageBt" );
        $( ".pageBt" ).eq( cnt > 3 ? cnt = 0 : cnt ).addClass( "addPageBt" );
    }
} );