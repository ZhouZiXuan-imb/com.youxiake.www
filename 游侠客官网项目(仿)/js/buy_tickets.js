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

    $('.li-mask').on('mouseenter', function () {
        $(this).addClass('current').parents('li').siblings().find('.li-mask').removeClass('current')
        $('.content-left-top-bigimg img').attr('src', `${$(this).next().attr('src')}`)
    })


    // 购票信息日期js
    let date = new Date()
    let year = date.getFullYear()
    let month = date.getMonth() + 1
    let num = 0
    let index = 0
    for (let i = 0; i < 9; i++) {
        $('.years-month li').eq(i).html(`${year}-${month > 9 ? month++ : '0' + month++}`)
    }

    // 日期

    $('.years-month').on('click', 'li', function () {
        $(this).addClass('current').siblings().removeClass('current')
        num = $(this).index()
        index = $(this).index()
    })


    // 点击左箭头

    $('.years-left').on('click', function () {
        num--
        index--
        if (index < 0) {
            index = 0
        }
        $('.years-month li').eq(index).addClass('current').siblings().removeClass('current')
        if (num < 0) {
            num = 0
            console.log(num)
        } else {
            $('.years-month ul').stop().animate({
                'left': -num * 100
            })
        }
    })
    // 点击右箭头
    $('.years-right').on('click', function () {
        index++
        if (index > 2) {
            num++
        }
        if (index > 8) {
            index = 8
        }
        $('.years-month li').eq(index).addClass('current').siblings().removeClass('current')
        if (num > 5) {
            num = 5
        } else {
            $('.years-month ul').stop().animate({
                'left': -num * 100
            })
        }
    })
    var myCalendar = new SimpleCalendar('#container');

    let date1 = new Date()
    let day = date1.getDate()
    for (let i = 0; i < $('.day').length; i++) {


        if ($('.day')[i].innerText >= day) {
            $('.day')[i].parentNode.classList.add('item-nolunar')
        } else {
            $('.day')[i].parentNode.classList.remove('item-nolunar')
        }
        console.log($('.day').hasClass('item-nolunar'));
    }

})