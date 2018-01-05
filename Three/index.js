$.fn.extend({
    animateCss: function (animationName, callback) {
        var animationEnd = 'webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend';
        this.addClass('animated ' + animationName).one(animationEnd, function() {
            $(this).removeClass('animated ' + animationName);
            if (callback) {
              callback();
            }
        });
        return this;
    }
});

var animate1 = document.getElementById("animate1");
animate1.style.visibility = "hidden"
var animate2 = document.getElementById("animate2");
animate2.style.visibility = "hidden"
var animate3 = document.getElementById("animate3");
animate3.style.visibility = "hidden"

$("#text1").mouseover(function(){
    animate1.style.visibility = "visible"
    $('#animate1').animateCss('rotateIn');
});

$("#text1").mouseout(function(){
    animate1.style.visibility = "hidden"
});

$("#text3").mouseover(function(){
    animate3.style.visibility = "visible"
    $('#animate3').animateCss('rotateIn');
});

$("#text3").mouseout(function(){
    animate3.style.visibility = "hidden"
});
