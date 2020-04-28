$(function () {
    $('.denglu').on('click', function () {
        if ($('.tle input').val().trim().length == 0 || isNaN($('.tle input').val())) {
            $('.wrong').show().html('手机号码或邮箱格式不正确')
        } else {
            if ($('.tle input').val().trim().length < 10) {
                $('.wrong').show().html('手机号码或邮箱格式不正确')
            } else if ($('.tle input').val() == 19852740130 || $('.tle input').val() == '1364421737@qq.com') {
                if ($('.psw input').val().trim().length == 0) {
                    $('.wrong').show().html('请输入登录密码')
                } else if ($('.psw input').val() == 'zhouzixuan999') {
                    $('.wrong').hide()
                    $('.Login a').prop('href', './index.html')
                } else {
                    $('.wrong').show().html('密码错误')
                }
            } else {
                $('.wrong').show().html('账号还没有注册，请您先注册')
            }
            if ($('.tle input').val().trim().length == 0) {
                $('.tle input').on('focus')
            }
        }
    })
})