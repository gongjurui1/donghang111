
$(function(){
   // 点击回复显示回复框
   $('.talk-left').click(function(){
       $(this).siblings('.hide-rep').show().css({'position':'relative','top':'-20px'});
       $(this).parents('.all-ul-right-1').siblings('.all-ul-right-2').show();

       //    click 收起回复
       $('.hide-rep-top').click(function(){
           $(this).parents('.hide-rep').hide()
       })
   });


    $('.hide-tie-zi-in').focus(function(){
        $(this).val('');
    });

    //点击提交，下一栏显示回复提交
    $('.ti-ti-in').click(function(){

        $(this).parents('.all-ul-right-2').next('.rep-ok').show();

        //获取输入框的内容
        var rep_val=$(this).parents('.form-hide-ti-in').siblings('form').children('.hide-tie-zi-in').val();
        //获取回复成功后的内容显示
        var rep_det=$(this).parents('.all-ul-right-2').siblings('.rep-ok').find('.rep-det');
        rep_det.html(rep_val);

        //点击删除图标，删除评论
        var height=rep_det.height();
        $('.delete').css('top',height/2).click(function(){
            $(this).parents('.rep-ok').hide();
        });

        $(this).parents('.hide-rep').hide();
    });


//提到好友弹出层
    function getDept(){
        top.dialog({
            url:"",
            title: "提到好友",
            width: 450,
            height: 443
        }).showModal();
        return false;
    }
    $('.at-in').click(function(){
        getDept();
    })


//    上层点击弹出
        $('.talk-left').click(function(){
            $(this).parents('.cir-talk').siblings('.hide-rep').show();
        });









});