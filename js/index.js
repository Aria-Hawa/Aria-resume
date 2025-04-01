$(function () {
    $('.timeList').on('click', function (e) {
        $(this).toggleClass('beClick');
        let TargetChildren = $(this).children('.hide');
        $(TargetChildren[0]).slideToggle();
    });

    $('.describe').on('click', function (e) {
        $(this).children('.subtitle').toggleClass('rotate');
        $(this).children('.collapse').slideToggle();
    });

    $('.copyMe').on('click', function () {
        let copiedText = $(this).attr('title');
        let showCopied = $(this).children('p');
        navigator.clipboard.writeText(copiedText)
            .then(() => {
                showCopied.css('opacity', '1');
                setTimeout(() => {
                    showCopied.css('opacity', '0');
                }, 800);
            })
    });

});





