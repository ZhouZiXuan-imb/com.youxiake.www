
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


    // // 轮播图部分
    let index = 0;
    let num = 0;
    let carcle = 0;
    // 给ol里面添加li元素  让ol里面的li的数量等于图片的的数量
    $('.slider li').each(function (i, item) {
        $('.slider ol').append('<li></li>')
        // 判断一下是不是第一个li  如果是第一个li就给他添加current类名
        if (i == 0) {
            $('.slider ol li').eq(i).addClass('current')
        }
    })
    // 给大盒子添加鼠标移入事件
    $('.slider').on('mouseenter', function () {
        // 鼠标移入大盒子  让左右箭头按钮显示
        $('.slider .arrow').show()
    })
    // 给大盒子添加鼠标移出事件
    $('.slider').on('mouseleave', function () {
        // 鼠标移入大盒子  让左右箭头按钮隐藏
        $('.slider .arrow').hide()
    })
    // 给右箭头添加点击事件
    $('.slider .arrow-right').on('click', function () {
        // 每次点击右箭头让index++
        index++;
        // 判断一下index是否到最后一张图片的下下标
        if (index > $('.slider ul li').length - 1) {
            // 如果到了给index重新赋值为0
            index = 0;
        }
        // 让ul里面的li下标为index的淡入  让他的其他所有兄弟元素淡入
        $('.slider ul li').eq(index).fadeIn().siblings().fadeOut()
        // 每次点击让num++
        num++;
        // 判断一下num是否到了ol中的最后一个li
        if (num > $('.slider ol li').length - 1) {
            // 如果到了就给num重新赋值为0
            num = 0;
        }
        // 给ol中下标为num的li元素添加current类名   删除其他所有兄弟元素的current类名
        $('.slider ol li').eq(num).addClass('current').siblings().removeClass('current')
    })
    // 给左箭头添加点击事件
    $('.slider .arrow-left').on('click', function () {
        // 每次点击让index--
        index--;
        // 判断一下index是否到第一张图片的下标了
        if (index < 0) {
            // 如果到了给index重新赋值为ul中li最后一个元素的下标
            index = $('.slider ul li').length - 1
        }
        // 让ul里面的li下标为index的淡入  让他的其他所有兄弟元素淡入
        $('.slider ul li').eq(index).fadeIn().siblings().fadeOut()
        // 每次点击让num--
        num--;
        // 判断一下num是否到了ol中的第一个li
        if (num < 0) {
            // 如果到了就给num重新赋值为ol中最后一个li的下标
            num = $('.slider ol li').length - 1;
        }
        // 给ol中下标为num的li元素添加current类名   删除其他所有兄弟元素的current类名
        $('.slider ol li').eq(num).addClass('current').siblings().removeClass('current')
    })
    // 给ol中的所有li添加鼠标移入事件
    $('.slider ol li').on('click', function () {
        // 让carcle这个变量等于当前鼠标移入的这个li的下标
        carcle = $(this).index()
        // 让ul里面的li下标为carcle的淡入  让他的其他所有兄弟元素淡入
        $('.slider ul li').eq(carcle).fadeIn().siblings().fadeOut()
        // 给ol中下标为carcle的li元素添加current类名   删除其他所有兄弟元素的current类名
        $('.slider ol li').eq(carcle).addClass('current').siblings().removeClass('current')
        // 这里解决一个bug    每次鼠标移入ol中的li  都要让num和index重新赋值   等于carcle这个变量的数字
        num = carcle;
        index = carcle;
        $('.slider ol li').off('mouseleave')
    })
    $('.slider ol li').on('mouseenter', function () {
        // 给ol中下标为carcle的li元素添加current类名   删除其他所有兄弟元素的current类名
        $(this).addClass('current')
        $('.slider ol li').on('mouseleave', function () {
            // 给ol中下标为carcle的li元素添加current类名   删除其他所有兄弟元素的current类名
            $(this).removeClass('current')
        })
    })

    // 定义一个3秒执行一次的定时器
    let timer1 = setInterval(timer2, 3000)
    // 定义一个定时器函数
    function timer2() {
        // 每3秒调用一次这个点击事件
        $('.slider .arrow-right').click();
    }
    // 给大盒子添加鼠标移入事件   鼠标移入大盒子  轮播图停止轮播
    $('.slider').on('mouseenter', function () {
        clearInterval(timer1)
    })
    // 给大盒子添加鼠标移入事件   鼠标移出大盒子  轮播图继续轮播
    $('.slider').on('mouseleave', function () {
        timer1 = setInterval(timer2, 3000)
    })




    // 第六部分右边js
    $('.strategy-content-right-content_1 li a').hover(function () {
        $(this).find('.follow').show()
        $(this).find('.bg').show()
    }, function () {
        $(this).find('.follow').hide()
        $(this).find('.bg').hide()
    })



    // tab切换
    function tab(toggle1, toggle2) {
        $(`${toggle1}`).on('click', 'li', function () {
            let index = $(this).index()
            $(this).find('a').addClass('cureent').end().siblings().find('a').removeClass('cureent')
            $(`${toggle2}`).eq(index).addClass('active').siblings().removeClass('active')
        })
    }
    tab('.strategy-content-right-title-right', '.strategy-content-right-content_1')

    // 手风琴 四张图片的手风琴
    $('.accordion-content-items.img4').on('mouseenter', 'li', function () {
        $(this).find('.accordion-content-items_center').show()
        $(this).stop().animate({
            width: 540,
        }, function () {
            $(this).find('.accordin-content-items_enlist').stop().animate({ bottom: 13 })
        }).siblings().stop().animate({
            width: 220,
        }).find('.accordion-content-items_place').show()
        $(this).find('.accordion-content-items_place').hide()
        $(this).find('.accordin-content-items_title').stop().animate({ bottom: 10 })

        $(this).siblings().find('.accordion-content-items_center').hide()
        $(this).siblings().find('.accordin-content-items_title').stop().animate({ bottom: -46 })
        $(this).siblings().find('.accordin-content-items_enlist').stop().animate({ bottom: -40 })
    })
    // 手风琴  五张图片的手风琴
    $('.accordion-content-items.img5').on('mouseenter', 'li', function () {
        $(this).find('.accordion-content-items_center').show()
        $(this).stop().animate({
            width: 540,
        }, function () {
            $(this).find('.accordin-content-items_enlist').stop().animate({ bottom: 13 })
        }).siblings().stop().animate({
            width: 165,
        }).find('.accordion-content-items_place').show()
        $(this).find('.accordion-content-items_place').hide()
        $(this).find('.accordin-content-items_title').stop().animate({ bottom: 10 })

        $(this).siblings().find('.accordion-content-items_center').hide()
        $(this).siblings().find('.accordin-content-items_title').stop().animate({ bottom: -46 })
        $(this).siblings().find('.accordin-content-items_enlist').stop().animate({ bottom: -40 })
    })

    tab('.accordion-content-title', '.accordion-content-items')

    // 第六部分左边js
    $("#carousel_2").FtCarousel({
        index: 1,
        auto: false
    });


    // 轮播图部分
    function slider(name) {
        let index3 = 0;
        let num3 = 0;
        let carcle3 = 0;
        // 给ol里面添加li元素  让ol里面的li的数量等于图片的的数量
        $(`${name} li`).each(function (i, item) {
            $(`${name} ol`).append('<li></li>')
            // 判断一下是不是第一个li  如果是第一个li就给他添加current类名
            if (i == 0) {
                $(`${name} ol li`).eq(i).addClass('current')
            }
        })
        // 给大盒子添加鼠标移入事件
        $(`${name}`).on('mouseenter', function () {
            // 鼠标移入大盒子  让左右箭头按钮显示
            $(`${name} .arrow`).show()
        })
        // 给大盒子添加鼠标移出事件
        $(`${name}`).on('mouseleave', function () {
            // 鼠标移入大盒子  让左右箭头按钮隐藏
            $(`${name} .arrow`).hide()
        })
        // 给右箭头添加点击事件
        $(`${name} .arrow-right`).on('click', function () {
            // 每次点击右箭头让index++
            index3++;
            // 判断一下index是否到最后一张图片的下下标
            if (index3 > $(`${name} ul li`).length - 1) {
                // 如果到了给index重新赋值为0
                index3 = 0;
            }
            // 让ul里面的li下标为index的淡入  让他的其他所有兄弟元素淡入
            $(`${name} ul li`).eq(index3).fadeIn().siblings().fadeOut()
            // 每次点击让num++
            num3++;
            // 判断一下num是否到了ol中的最后一个li
            if (num3 > $(`${name} ol li`).length - 1) {
                // 如果到了就给num重新赋值为0
                num3 = 0;
            }
            // 给ol中下标为num的li元素添加current类名   删除其他所有兄弟元素的current类名
            $(`${name} ol li`).eq(num3).addClass('current').siblings().removeClass('current')
        })
        // 给左箭头添加点击事件
        $(`${name} .arrow-left`).on('click', function () {
            // 每次点击让index--
            index3--;
            // 判断一下index是否到第一张图片的下标了
            if (index3 < 0) {
                // 如果到了给index重新赋值为ul中li最后一个元素的下标
                index3 = $(`${name} ul li`).length - 1
            }
            // 让ul里面的li下标为index的淡入  让他的其他所有兄弟元素淡入
            $(`${name} ul li`).eq(index3).fadeIn().siblings().fadeOut()
            // 每次点击让num--
            num3--;
            // 判断一下num是否到了ol中的第一个li
            if (num3 < 0) {
                // 如果到了就给num重新赋值为ol中最后一个li的下标
                num3 = $(`${name} ol li`).length - 1;
            }
            // 给ol中下标为num的li元素添加current类名   删除其他所有兄弟元素的current类名
            $(`${name} ol li`).eq(num3).addClass('current').siblings().removeClass('current')
        })
        // 给ol中的所有li添加鼠标移入事件
        $(`${name} ol li`).on('click', function () {
            // 让carcle这个变量等于当前鼠标移入的这个li的下标
            carcle3 = $(this).index()
            // 让ul里面的li下标为carcle的淡入  让他的其他所有兄弟元素淡入
            $(`${name} ul li`).eq(carcle3).fadeIn().siblings().fadeOut()
            // 给ol中下标为carcle的li元素添加current类名   删除其他所有兄弟元素的current类名
            $(`${name} ol li`).eq(carcle3).addClass('current').siblings().removeClass('current')
            // 这里解决一个bug    每次鼠标移入ol中的li  都要让num和index重新赋值   等于carcle这个变量的数字
            num3 = carcle;
            index3 = carcle;
            $(`${name} ol li`).off('mouseleave')
        })
        $(`${name} ol li`).on('mouseenter', function () {
            // 给ol中下标为carcle的li元素添加current类名   删除其他所有兄弟元素的current类名
            $(this).addClass('current')
            $(`${name} ol li`).on('mouseleave', function () {
                // 给ol中下标为carcle的li元素添加current类名   删除其他所有兄弟元素的current类名
                $(this).removeClass('current')
            })
        })
        // 定义一个3秒执行一次的定时器
        let timer7 = setInterval(timer8, 3000)
        // 定义一个定时器函数
        function timer8() {
            // 每3秒调用一次这个点击事件
            $(`${name} .arrow-right`).click();
        }
        // 给大盒子添加鼠标移入事件   鼠标移入大盒子  轮播图停止轮播
        $(`${name}`).on('mouseenter', function () {
            clearInterval(timer7)
        })
        // 给大盒子添加鼠标移入事件   鼠标移出大盒子  轮播图继续轮播
        $(`${name}`).on('mouseleave', function () {
            timer7 = setInterval(timer8, 3000)
        })
    }

    // 周边游轮播图
    slider('.zbly_hangzhou');
    slider('.zbly_beijing');
    slider('.zbly_shanghai');
    slider('.zbly_suzhou');
    slider('.zbly_nanjing');
    slider('.zbly_guangzhou');
    slider('.zbly_chengdu');
    slider(".zbly_xian");
    slider('.zbly_shenzhen');
    slider('.zbly_xiamen');
    // 周边游tab切换
    tab('.perimeter-content-right-title', '.perimeter-content-right-substance')

    // 国内游轮播图
    slider('.gnly_remen');
    slider('.gnly_sichuan');
    slider('.gnly_yunnan');
    slider('.gnly_xibei');
    slider('.gnly_xinjiang');
    slider('.gnly_xizang');
    slider('.gnly_guizhou');
    slider('.gnly_guangxi');
    slider('.gnly_neimeng');
    slider('.gnly_dongbei');
    slider('.gnly_qinjin');
    slider('.gnly_huazhong');
    slider('.gnly_huadong');
    slider('.gnly_huanan');
    // 国内游tab切换
    tab('.internal-content-right-title', '.internal-content-right-substance')

    // 出境游轮播图
    slider('.cjly_remen');
    slider('.cjly_haidao');
    slider('.cjly_dongnanya');
    slider('.cjly_nanya');
    slider('.cjly_rihanchao');
    slider('.cjly_ouzhou');
    slider('.cjly_eluosi');
    slider('.cjly_meizhou');
    slider('.cjly_aoxin');
    slider('.cjly_zhongdongfeizhou');
    // 出境跨国游tab切换
    tab('.goabroad-content-right-title', '.goabroad-content-right-substance')


    // 轮播图
    slider('.dczt_sheyingfengcai');
    slider('.dczt_yujialuxing');
    slider('.dczt_qinziyanxue');
    slider('.dczt_chujinghaidao');
    slider('.dczt_quanqiuqixing');
    slider('.dczt_quanqiutubu');
    slider('.dczt_fangchelvxing');
    // 多彩主题旅游tab切换
    tab('.theme-content-right-title', '.theme-content-right-substance')

    // 当地玩乐轮播图
    slider('.ddwl_citywalk');
    slider('.ddwl_lvpai');
    slider('.ddwl_hangzhou');
    slider('.ddwl_yunnan');
    slider('.ddwl_shanghai');
    slider('.ddwl_nanjing');
    slider('.ddwl_beijing');
    slider('.ddwl_chongqing');
    slider('.ddwl_suzhou');
    slider('.ddwl_chengdu');
    slider('.ddwl_xian');
    slider('.ddwl_xiamen');
    slider('.ddwl_xinjiang');
    slider('.ddwl_chujing');
    // 当地玩乐tab切换
    tab('.local-content-right-title', '.local-content-right-substance')


    // 活动游记tab切换
    tab('.activity-content-title-right', '.activity-content-general')


    // 精彩摄影作品js
    $('.wonderful-content-general').on('mouseenter', 'li', function () {
        $(this).find('.mask').show().next().show()
    })
    $('.wonderful-content-general').on('mouseleave', 'li', function () {
        $(this).find('.mask').hide().next().hide()
    })
    // 精彩摄影作品tab切换
    tab('.wonderful-content-title-right', '.wonderful-content-general')

    // 游侠客视频tab切换
    tab('.yxkvideo-content-title-right', '.yxkvideo-content-general')


    for (let i = 0; i < $('.foot1-content-general li').length; i++) {
        $('.foot1-content-general li').eq(i).css({
            'background': `url(./images/foot_1-${i + 1}.png) no-repeat`,
            'background-position': 'center 20px'
        })
    }
    for (let i = 0; i < $('.foot2-content-top li').length; i++) {
        $('.foot2-content-top li').eq(i).css({
            'background': `url(./images/foot_2_top-${i + 1}.png) no-repeat`,
            'background-position': 'center 20px'
        })
    }


    // 左侧锚点导航栏js
    let leftNavShow = 500
    let leftnav1 = $('.strategy').offset().top
    let leftnav2 = $('.accordion').offset().top
    let leftnav3 = $('.perimeter').offset().top
    let leftnav4 = $('.internal').offset().top
    let leftnav5 = $('.goabroad').offset().top
    let leftnav6 = $('.theme').offset().top
    let leftnav7 = $('.local').offset().top
    let leftnav8 = $('.activity').offset().top
    let leftnav9 = $('.wonderful').offset().top
    let leftnav10 = $('.yxkvideo').offset().top

    $(document).on('scroll', function () {
        let domScroll = $(document).scrollTop()
        if (domScroll >= leftNavShow) {
            $('.leftnav_scroll').fadeIn(200)
        } else {
            $('.leftnav_scroll').fadeOut(200)
        }
        if (domScroll >= leftnav1) {
            $('.leftnav1').addClass('current').siblings().removeClass('current')
        }
        if (domScroll >= leftnav2) {
            $('.leftnav2').addClass('current').siblings().removeClass('current')
        }
        if (domScroll >= leftnav3) {
            $('.leftnav3').addClass('current').siblings().removeClass('current')
        }
        if (domScroll >= leftnav4) {
            $('.leftnav4').addClass('current').siblings().removeClass('current')
        }
        if (domScroll >= leftnav5) {
            $('.leftnav5').addClass('current').siblings().removeClass('current')
        }
        if (domScroll >= leftnav6) {
            $('.leftnav6').addClass('current').siblings().removeClass('current')
        }
        if (domScroll >= leftnav7) {
            $('.leftnav7').addClass('current').siblings().removeClass('current')
        }
        if (domScroll >= leftnav8) {
            $('.leftnav8').addClass('current').siblings().removeClass('current')
        }
        if (domScroll >= leftnav9) {
            $('.leftnav9').addClass('current').siblings().removeClass('current')
        }
        if (domScroll >= leftnav10) {
            $('.leftnav10').addClass('current').siblings().removeClass('current')
        }

    })

    $('.leftnav_scroll').on('click', 'li', function () {
        let index = $(this).index()
        switch (index) {
            case 0: {
                $(document).scrollTop(leftnav1)
                break;
            }
            case 1: {
                $(document).scrollTop(leftnav2)
                break;
            }
            case 2: {
                $(document).scrollTop(leftnav3)
                break;
            }
            case 3: {
                $(document).scrollTop(leftnav4)
                break;
            }
            case 4: {
                $(document).scrollTop(leftnav5)
                break;
            }
            case 5: {
                $(document).scrollTop(leftnav6)
                break;
            }
            case 6: {
                $(document).scrollTop(leftnav7)
                break;
            }
            case 7: {
                $(document).scrollTop(leftnav8)
                break;
            }
            case 8: {
                $(document).scrollTop(leftnav9)
                break;
            }
            case 9: {
                $(document).scrollTop(leftnav10)
                break;
            }
        }
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