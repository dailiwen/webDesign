window.onload = function(){
        var picture1 = document.getElementById("picture1");
        var tastyDetail = document.getElementById("tastyDetail");
        picture1.onmouseover = function(){
            tastyDetail.style.display = "block";
            word.style.color = "rgb(238,112,35)"
        };
        picture1.onmouseout = function(){
            tastyDetail.style.display = "none";
            word.style.color = "black"
        };
};