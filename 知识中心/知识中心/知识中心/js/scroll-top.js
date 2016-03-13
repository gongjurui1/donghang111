


var knowLeft=document.getElementById('know-left');

var curTop=$('.know').offset().top;


window.onscroll=function() {
    var top = document.documentElement.scrollTop || document.body.scrollTop;
    if (top > curTop) {
        knowLeft.style.position = 'fixed';
        knowLeft.style.top = 0;

    } else {
        knowLeft.style.position = 'absolute';
        knowLeft.style.top = 0;

    }
}






