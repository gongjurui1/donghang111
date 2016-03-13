
//the last li margin-right
$(function(){
    $('.course-t-main').children('.course-t-main-1').each(function(){
        var index=$(this).index();
        if(index%3==2){
            $(this).css('margin-right',0)
        }
    })

//    隔行变色
    $('.choose12').children('li').each(function(){
        var index=$(this).index();
        if(index%2==1){
            $(this).addClass('coo');
        }
    })
//    我的课程小tab
    $('.list-tab>li').click(function(){
        $(this).find('i').addClass('tab-s-ex').parents('li').siblings('li').find('i').removeClass('tab-s-ex');
        var index=$(this).index();

        $('.choose-1-content').children('div').eq(index).show().siblings('div').hide()

    })

//    获取图标，改变小样
//    $('.choose-sidebar>li').mouseover(function(){
//       var str=$(this).find('i').css('background-image');
//
//
//    })

    var $choose=$('.choose-sidebar>li');

    $choose.click(function(){
        $(this).addClass('on').siblings('li').removeClass('on')


        var index=$(this).index();
        $('.choose-m-r').children('div').eq(index).show().siblings('div').hide();
    })
    $choose.hover(function(){
        $(this).addClass('on').siblings('li').removeClass('on')
    })













});