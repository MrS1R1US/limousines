/*---------- Открытие мобильного меню ---------*/
$('.menu__btn').on('click', function(){
    if($('.menu').hasClass('menu_opened')) {
        $('.menu').removeClass( 'menu_opened' )
    }else {
        $('.menu').addClass('menu_opened')
    }
})
/*---------- /Открытие мобильного меню ---------*/