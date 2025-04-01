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


    // 漢堡按鈕三變X
    $('.hamburger').click(function () {
        // 在.hamburger類別裡面 加入/刪除類別is-active
        $(this).toggleClass('is-active');
        // 在.navigation類別裡面 加入/刪除類別show
        $('header').toggleClass('show');
    });

    // 點擊其他地方關閉漢堡選單
    $(document).on('click', function (e) {
        // .closest() 會找往上尋該元素的父元素，直到找到符合的元素為止
        // .length 屬性則回傳符合的元素數量，若沒有符合的元素則回傳0
        if (!$(e.target).closest('.hamburger').length && !$(e.target).closest('header').length) {
            $('.hamburger').removeClass('is-active');
            $('header').removeClass('show');
        }
    });

});





