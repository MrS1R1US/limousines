/*---------- Открытие мобильного меню ---------*/
$('.menu__btn').on('click', function(){
    if($('.menu').hasClass('menu_opened')) {
        $('.menu').removeClass( 'menu_opened' )
    }else {
        $('.menu').addClass('menu_opened')
    }
})

// $(function(){
//     $(window).scroll(function() {
//         if($(this).scroll() > lastScrollTop)) {
//             $('.site__header').addClass('fixed');
//
//
//         }
//         else{
//             $('.site__header').removeClass('fixed');
//         }
//     });
// });

/*---------- /Открытие мобильного меню ---------*/