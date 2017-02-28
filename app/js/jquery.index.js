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
        
        console.log( lastScrollPos,currentScroll );
        
        if(currentScroll >= 700) {

            if(lastScrollPos > currentScroll){
                $('.site__header').addClass('fixed');
            } else{
                $('.site__header').removeClass('fixed');
            }

        }
        else{
            $('.site__header').removeClass('fixed');
        }

        lastScrollPos = currentScroll;

    });
});

/*---------- /Открытие мобильного меню ---------*/