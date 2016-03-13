$(function(){
    var page = 1;
    var i = 4; //每版放4个图片

    $(".tab-left").click(function(){

        var $v_content = $('.class-cour-content');
        var v_width = $v_content.width();
        var $v_show=$('.course-tab');
        var len = $v_show.find("li").length;
        var page_count = Math.ceil(len / i) ;
        if( !$v_show.is(":animated") ){
            if( page == page_count){
                $v_show.animate({ left : '0px'});
                page = 1;
            }else{
                $v_show.animate({ left : '-='+v_width }, "slow");
                page++;
            }

        }
    });

    $(".tab-right").click(function(){
        var $v_content = $('.class-cour-content');
        var v_width = $v_content.width();
        var $v_show=$('.course-tab');
        var len = $v_show.find("li").length;
        var page_count = Math.ceil(len / i) ;
        if( !$v_show.is(":animated") ){
            if( page == 1 ){
                $v_show.animate({ left : '-='+v_width*(page_count-1)});
                page = page_count;
            }else{
                $v_show.animate({ left : '+='+v_width }, "slow");
                page--;
            }
            //$parent.find("span").eq((page-1)).addClass("current").siblings().removeClass("current");
        }
    });
});
