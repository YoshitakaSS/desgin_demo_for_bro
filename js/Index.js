$(function(){
    var $navBar = $('.nav-bar');
    var $menu = $('.header-menu');

    $navBar.on('click', function(){
        if ($(this).hasClass('fa-bars')) {
            $(this).removeClass('fa-bars');
            $(this).addClass('fa-times');

            $menu.slideDown();
        } else {
            $(this).removeClass('fa-times');
            $(this).addClass('fa-bars');

            $menu.slideUp();
        }
    });

    $('.js-scguide-btn').on('click', function(){
        var $memberInfo = $(this).next().find('.members-info');
        var $memberList = $(this).next().find('.members-list');
        var scw = $memberList.width() / 10;
        $memberInfo.animate({scrollLeft : scw});
        $(this).fadeOut();
    });
});