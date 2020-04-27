$(function () {
    // 
    // 第二部分内容js
    $('.search-area-city').hover(function () {
        $('.search-area-city-item').show()
    }, function () {
        $('.search-area-city-item').hide()
    })


    $('.search-area-city-item').on('click', 'li', function () {
        $('.search-area-city span').html($(this).html())
        $('.search-area-city-item').hide()
    })


    $('.search-area-box-input-zh').hover(function () {
        $('.search-area-box-input-item').show()
    }, function () {
        $('.search-area-box-input-item').hide()
    })


    $('.search-area-box-input-item').on('click', 'li', function () {
        $('.search-area-box-input-zh span').html($(this).html())
        $('.search-area-box-input-item').hide()
    })

    // 第三部分内容js
    $('.navitems>a').css({
        'background': 'url(./images/xiaosanjiao.png) no-repeat',
        'background-position': 'right center'
    })


    $('.nav').on('mouseenter', '.navitems', function () {
        let index = $(this).index()
        switch (index) {
            case 1: {
                $(this).find('.navshow1').show().end().siblings().find('.navshow1').hide()
                $(this).css({
                    "background": 'url(./images/shangsanjiao.png) no-repeat center bottom'
                })
                break;
            }
            case 2: {
                $(this).find('.navshow1').show().end().siblings().find('.navshow1').hide()
                $(this).css({
                    "background": 'url(./images/shangsanjiao.png) no-repeat center bottom'
                })
                break;
            }
            case 4: {
                $(this).find('.navshow1').show().end().siblings().find('.navshow1').hide()
                $(this).css({
                    "background": 'url(./images/shangsanjiao.png) no-repeat center bottom'
                })
                break;
            }
            case 5: {
                $(this).find('.navshow1').show().end().siblings().find('.navshow1').hide()
                $(this).css({
                    "background": 'url(./images/shangsanjiao.png) no-repeat center bottom'
                }).find('.navshow1').css('padding-left', 465)
                break;
            }
            case 6: {
                $(this).find('.navshow1').show().end().siblings().find('.navshow1').hide()
                $(this).css({
                    "background": 'url(./images/shangsanjiao.png) no-repeat center bottom'
                }).find('.navshow1').css('padding-left', 660)
                break;
            }
            case 9: {
                $(this).find('.navshow1').show().end().siblings().find('.navshow1').hide()
                $(this).css({
                    "background": 'url(./images/shangsanjiao.png) no-repeat center bottom'
                }).find('.navshow1').css('padding-left', 1050)
                break;
            }
            case 10: {
                $(this).find('.navshow1').show().end().siblings().find('.navshow1').hide()
                $(this).css({
                    "background": 'url(./images/shangsanjiao.png) no-repeat center bottom'
                }).find('.navshow1').css('padding-left', 950)
                break;
            }
            case 12: {
                $(this).find('.navshow1').show().end().siblings().find('.navshow1').hide()
                $(this).css({
                    "background": 'url(./images/shangsanjiao.png) no-repeat center bottom'
                }).find('.navshow1').css('padding-left', 1150)
                break;
            }
        }
    })

    $('nav').on('mouseleave', '.navitems', function () {
        $('.navshow1').hide()
        $(this).css({
            "background": 'none'
        })
    })
    $('nav').on('mouseleave', '.navitems', function () {
        $('.navshow1').hide()
        $(this).css({
            "background": 'none'
        })
    })


    // 出游类型部分js
    $('.type-content-generalNav').on('click', 'li a', function () {
        $(this).addClass('current').parent().siblings().find('a').removeClass('current')
    })

    // 出游路线部分js
    $('.paixu').on('mouseenter', function () {
        $('.paixu-hide').show()
    })
    $('.paixu-hide').on('mouseleave', function () {
        $('.paixu-hide').hide()
    })

    $('.price_range-input input').on('focus', function () {
        $('.price_range-input').css('border', '1px solid #999')
    })
    $('.price_range-input input').on('blur', function () {
        $('.price_range-input').css('border', 'none')
    })

    $('.preferential>div').on('mouseenter', function () {
        $(this).find('span').css('background', 'url(./images/lvyou/jiagequjian_tehui-2.png)')
    })
    $('.preferential>div').on('mouseleave', function () {
        $(this).find('span').css('background', 'url(./images/lvyou/jiagequjian_tehui.png)')
    })
    $('.preferential>div').on('click', function () {
        $(this).find('span').css('background', 'url(./images/lvyou/jiagequjian_tehui-2.png)')
        $('.preferential>div').off('mouseleave')
    })


    // 返回顶部js
    $('.back_to_top').on('click', function () {
        $(document).scrollTop(0)
    })




    // 新人大礼包js
    $('.guanbianniu').on('click', function () {
        $('.new_gift_pack-big').animate({
            left: -1903,
            opacity: 0
        }, 300)
        $('.new_gift_pack-small').animate({
            left: 20
        }, 500)
    })
    $('.new_gift_pack-small').on('click', function () {
        $('.new_gift_pack-big').animate({
            left: 0,
            opacity: 1
        }, 500)
        $('.new_gift_pack-small').animate({
            left: -140
        }, 500)
    })
})