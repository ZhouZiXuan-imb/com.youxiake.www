$(function () {
    $('#dowebok').fullpage({
        scrollingSpeed: 700,
        onLeave: function (index, nextIndex, direction) {
            switch (nextIndex) {
                case 1: {
                    $('.topnav-right li').eq(nextIndex - 1).addClass('current').siblings().removeClass('current')
                    break;
                }
                case 2: {
                    $('.topnav-right li').eq(nextIndex - 1).addClass('current').siblings().removeClass('current')
                    break;
                }
                case 3: {
                    $('.topnav-right li').eq(nextIndex - 1).addClass('current').siblings().removeClass('current')
                    break;
                }
                case 4: {
                    $('.topnav-right li').eq(nextIndex - 1).addClass('current').siblings().removeClass('current')
                    break;
                }
                case 5: {
                    $('.topnav-right li').eq(nextIndex - 1).addClass('current').siblings().removeClass('current')
                    break;
                }

            }
        }
    });
    $('.topnav-right').on('click', 'li', function () {
        $(this).addClass('current').siblings().removeClass('current')
        let index = $(this).index()
        $.fn.fullpage.moveTo(index + 1);
    })
    $('.year').on('click', 'a', function () {
        $(this).parent().next().slideToggle()
        $(this).parents('li').siblings().find('.close').slideUp()
        $(this).find('i').toggleClass('active').parents('li').siblings().find('i').removeClass('active')
    })

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
            $(`${name} ol li`).eq(i).html(i + 1)
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
        $(`${name} ol li`).on('mouseenter', function () {
            // 让carcle这个变量等于当前鼠标移入的这个li的下标
            carcle3 = $(this).index()
            // 让ul里面的li下标为carcle的淡入  让他的其他所有兄弟元素淡入
            $(`${name} ul li`).eq(carcle3).fadeIn().siblings().fadeOut()
            // 给ol中下标为carcle的li元素添加current类名   删除其他所有兄弟元素的current类名
            $(`${name} ol li`).eq(carcle3).addClass('current').siblings().removeClass('current')
            // 这里解决一个bug    每次鼠标移入ol中的li  都要让num和index重新赋值   等于carcle这个变量的数字
            // num3 = carcle;
            // index3 = carcle;
            $(`${name} ol li`).off('mouseleave')
        })
        // $(`${name} ol li`).on('mouseenter', function () {
        //     // 给ol中下标为carcle的li元素添加current类名   删除其他所有兄弟元素的current类名
        //     $(this).addClass('current')
        //     $(`${name} ol li`).on('mouseleave', function () {
        //         // 给ol中下标为carcle的li元素添加current类名   删除其他所有兄弟元素的current类名
        //         $(this).removeClass('current')
        //     })
        // })
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

    slider('.slider')


    // 第四屏幕
    $('.section4').css('background-color', 'rgb(146, 114, 179)')

    $('.section4-content-general-right').hover(function () {
        $(this).find('.section4-content-general-icon-hide').show()
        $(this).find('.mask').stop().fadeIn(200)
    }, function () {
        $(this).find('.section4-content-general-icon-hide').hide()
        $(this).find('.mask').stop().fadeOut(200)
    })
});