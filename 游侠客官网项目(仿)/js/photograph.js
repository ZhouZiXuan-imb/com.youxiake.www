$(function () {
    $('.nav-top-items').on('mouseenter', 'li', function () {
        $(this).find('.show').show()
    })
    $('.nav-top-items').on('mouseleave', 'li', function () {
        $(this).find('.show').hide()
    })

    // 轮播图初始化 
    var mySwiper = new Swiper('.slider .swiper-container', {
        loop: true, // 循环模式选项
        // 如果需要分页器
        pagination: {
            el: '.swiper-pagination',
        },

        // 如果需要前进后退按钮
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },

        // 如果需要滚动条
        scrollbar: {
            el: '.swiper-scrollbar',
        },

    })

    // 摄影作品tab切换
    function tab(navName, boxName) {
        $(navName).on('click', 'li', function () {
            let index = $(this).index()
            console.log(index)
            $(this).addClass('current').siblings().removeClass('current')
            $(boxName).eq(index).addClass('active').siblings().removeClass('active')
        })
    }
    tab('.photographic_works-content-nav-items', '.photographic_works-content-img-items')
    // 摄影作品鼠标移入 移出
    function mouseenter(items, box) {
        $(items).on('mouseenter', 'li', function () {
            $(this).find(box).stop().animate({
                bottom: 0
            }, 200)
        })
        $(items).on('mouseleave', 'li', function () {
            $(this).find(box).stop().animate({
                bottom: -40
            }, 200)
        })
    }
    mouseenter('.photographic_works-content-img-items', '.img-items-bottomtext')




    // 摄影大赛部分js
    var swiper = new Swiper('.photography_competition-slider .swiper-container', {
        slidesPerView: 3,
        centeredSlides: true,
        spaceBetween: 30,
        loop: true, // 循环模式选项
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
    });


    // 摄影路线部分tab切换
    tab('.photographic_routes-content-nav-items', '.photographic_routes-content-routes ul')
    // 鼠标移入图片放大效果
    $('.photographic_routes-content-routes').on('mouseenter', '.photographic_routes-content-routes-items', function () {
        $(this).find('img').css({
            'transform': 'scale(1.1)',
            opacity: 0.7
        })
    })
    $('.photographic_routes-content-routes').on('mouseleave', '.photographic_routes-content-routes-items', function () {
        $(this).find('img').css({
            'transform': 'scale(1)',
            opacity: 1
        })
    })


    // 游女郎部分js   鼠标移入移出
    $('.travelgirl-content-general').on('mouseenter', '.travelgirl-content-general-items', function () {
        $(this).find('.travelgirl-items-mask').show()
    })
    $('.travelgirl-content-general').on('mouseleave', '.travelgirl-content-general-items', function () {
        $(this).find('.travelgirl-items-mask').hide()
    })
})