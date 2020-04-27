// 西北玩乐第十部分tab切换js
$(function () {
    function tab(navName, boxName) {
        $(navName).on('click', 'li', function () {
            let index = $(this).index()
            $(this).addClass('current').siblings().removeClass('current')
            $(boxName).eq(index).addClass('active').siblings().removeClass('active')
        })
    }
    tab('.xibeiwanle-content-nav', '.xibeiwanle-content-route')


    // 右侧锚点导航部分js
    $('.buttonnav').on('click', 'li a', function () {
        $(this).addClass('current').parent().siblings().find('a').removeClass('current')
    })
    $('.rightnav-erweima').hover(function () {
        $('.rightnav-erweima-img').stop().animate({
            opacity: 1
        }, 500)
    }, function () {
        $('.rightnav-erweima-img').stop().animate({
            opacity: 0
        }, 500)
    })

    let scroll = $('.rightnav').offset().top - 200;
    let nav1 = $('.video').offset().top
    let nav2 = $('.qinghaihu').offset().top
    let nav3 = $('.gannan').offset().top
    let nav4 = $('.shamo').offset().top
    let nav5 = $('.kekexili').offset().top
    let nav6 = $('.ningxia').offset().top
    let nav7 = $('.research').offset().top
    let nav8 = $('.xibeiwanle').offset().top
    let nav9 = $('.sheying').offset().top
    let nav10 = $('.youxiahui').offset().top


    $(document).on('scroll', function () {
        let domScrollo = $(document).scrollTop()
        if (domScrollo >= scroll) {
            $('.rightnav').css({
                'position': 'fixed',
                'top': 200
            })
        } else {
            $('.rightnav').css({
                'position': 'absolute',
                'top': 1000
            })
        }

        if (domScrollo >= nav1) {
            $('.rightnav li a').eq(0).addClass('current').parent().siblings().find('a').removeClass('current')
        }
        if (domScrollo >= nav2) {
            $('.rightnav li a').eq(1).addClass('current').parent().siblings().find('a').removeClass('current')
        }
        if (domScrollo >= nav3) {
            $('.rightnav li a').eq(2).addClass('current').parent().siblings().find('a').removeClass('current')
        }
        if (domScrollo >= nav4) {
            $('.rightnav li a').eq(3).addClass('current').parent().siblings().find('a').removeClass('current')
        }
        if (domScrollo >= nav5) {
            $('.rightnav li a').eq(4).addClass('current').parent().siblings().find('a').removeClass('current')
        }
        if (domScrollo >= nav6) {
            $('.rightnav li a').eq(5).addClass('current').parent().siblings().find('a').removeClass('current')
        }
        if (domScrollo >= nav7) {
            $('.rightnav li a').eq(6).addClass('current').parent().siblings().find('a').removeClass('current')
        }
        if (domScrollo >= nav8) {
            $('.rightnav li a').eq(7).addClass('current').parent().siblings().find('a').removeClass('current')
        }
        if (domScrollo >= nav9) {
            $('.rightnav li a').eq(8).addClass('current').parent().siblings().find('a').removeClass('current')
        }
        if (domScrollo >= nav10) {
            $('.rightnav li a').eq(9).addClass('current').parent().siblings().find('a').removeClass('current')
        }

    })





    $('.buttonnav').on('click', 'li', function () {
        let index = $(this).index()
        switch (index) {
            case 0: {
                $(document).scrollTop(nav1)
                break;
            }
            case 1: {
                $(document).scrollTop(nav2)
                break;
            }
            case 2: {
                $(document).scrollTop(nav3)
                break;
            }
            case 3: {
                $(document).scrollTop(nav4)
                break;
            }
            case 4: {
                $(document).scrollTop(nav5)
                break;
            }
            case 5: {
                $(document).scrollTop(nav6)
                break;
            }
            case 6: {
                $(document).scrollTop(nav7)
                break;
            }
            case 7: {
                $(document).scrollTop(nav8)
                break;
            }
            case 8: {
                $(document).scrollTop(nav9)
                break;
            }
            case 9: {
                $(document).scrollTop(nav10)
                break;
            }
        }
    })
})