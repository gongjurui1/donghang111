

$(function(){

    $('.tijiao>a').click(function(){
        var str="<div class='hide-hu'><div class='hui-hot co5'>热心网友<span class='hui-hot-right fr co5'>2015-3-24</span></div>";

        str+="<div class='text-area co5'>"+$('.hui-hide-content').val()+"</div>";
        $(this).parents('li').append(str)

    })

});