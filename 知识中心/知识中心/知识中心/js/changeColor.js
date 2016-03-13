var oUl=document.getElementById('page-list');
var olis=oUl.getElementsByTagName('li');
for(var i=0;i<olis.length;i++){
    if(i%2===0){
        olis[i].className='bg1'
    }
}

//点击出现下面的详细选择项目
var choose=document.getElementById('choose');
var chooseCat=document.getElementById('choose-cat');
var filter=document.getElementById('filter');
var chooseShow=document.getElementById('choose-show');
chooseShow.onmouseover=function(e){
     e=e||window.event;
    var tar= e.target;
    if(tar.id.toLowerCase()==='choose'||'choose-cat'){
        chooseCat.style.display='block';
    }else{
        chooseCat.style.display='none'
    }
    return false;
};
chooseCat.onmouseout=function(){
    this.style.display='none'
};


$(function(){
    $('.list-tab>li>a').hover(function(){
        $(this).children('i').addClass('tab-s-ex');
        $(this).parent().siblings().find('i').removeClass('tab-s-ex')
    })
});
