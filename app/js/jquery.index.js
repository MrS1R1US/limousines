/*---------- Открытие мобильного меню ---------*/
$('.menu__btn').on('click', function(){
    if($('.menu').hasClass('menu_opened')) {
        $('.menu').removeClass( 'menu_opened' )
    }else {
        $('.menu').addClass('menu_opened')
    }
})

$(function(){
    
    var lastScrollPos = 0;

    $( window ).scroll( function() {
        
        var currentScroll = $( this ).scrollTop();
        
        //console.log( lastScrollPos,currentScroll );
        
        if(currentScroll >= 700) {
            $('.site__header').addClass('fixed');

            if(lastScrollPos > currentScroll){
                $('.fixed').addClass('fixed__active');
            } else{
                $('.fixed').removeClass('fixed__active');
            }

        }
        else{
            $('.site__header').removeClass('fixed');
            $('.site__header').removeClass('fixed__active');
        }

        lastScrollPos = currentScroll;

    });
});

/*---------- /Открытие мобильного меню ---------*/