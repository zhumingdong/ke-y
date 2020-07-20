//第一个效果   商品放大镜
var oMiddle = document.querySelector(".fdj_left");
var fk = document.getElementById("fk");
var oBig = document.querySelector(".fdj_right");
var fdj = document.querySelector(".main_cont_left");
var bigImg = document.querySelector(".fdj_right img");



oMiddle.onmouseenter = function () {
    fk.style.display = "block";
    oBig.style.display = "block";
}

oMiddle.onmouseleave = function () {
    fk.style.display = "none";
    oBig.style.display = "none";
}

oMiddle.onmousemove = function (event) {
    event = event || window.event;

    var x = event.pageX - fdj.offsetLeft - fk.offsetWidth / 2;
    var y = event.pageY - fdj.offsetTop - fk.offsetHeight / 2;

    if (x < 0) {
        x = 0;
    }

    if (x > oMiddle.offsetWidth - fk.offsetWidth) {
        x = oMiddle.offsetWidth - fk.offsetWidth;
    }

    if (y < 0) {
        y = 0;
    }

    if (y > oMiddle.offsetWidth - fk.offsetWidth) {
        y = oMiddle.offsetWidth - fk.offsetWidth;
    }

    fk.style.left = x + "px";
    fk.style.top = y + "px";

    var bili = (bigImg.offsetWidth - oBig.offsetWidth) / (fdj.offsetWidth - fk.offsetWidth)

    bigImg.style.left = -bili * x + "px"
    bigImg.style.top = -bili * y + "px"

}


var bigImgUrls = ["./images/details_pages/big/big1.jpg", "./images/details_pages/big/big2.jpg", "./images/details_pages/big/big3.jpg", "./images/details_pages/big/big4.jpg"];
var midImgUrls = ["./images/details_pages/middle/mid1.jpg", "./images/details_pages/middle/mid2.jpg", "./images/details_pages/middle/mid3.jpg", "./images/details_pages/middle/mid4.jpg"];

var sImgList = document.querySelector(".s_img_list");

var sImg = sImgList.querySelectorAll("img");

var mImg = oMiddle.querySelector("img");

var activeLi = document.querySelectorAll(".s_img_list li");
console.log(activeLi);


for (var i = 0; i < sImg.length; i++) {
    sImg[i].index = i;

    sImg[i].onmouseenter = function () {
        mImg.src = midImgUrls[this.index];
        bigImg.src = bigImgUrls[this.index];
    }
    activeLi[i].aIndex = i;
    activeLi[i].onmouseenter = function () {
         for(var i=0;i<activeLi.length;i++){
            activeLi[i].classList.remove("active");
            activeLi[this.aIndex].classList.add("active");
         }
    }
}


//第二个效果  切换
var oLi = document.querySelectorAll(".detail_nav_list li");
var showbox = document.querySelectorAll(".showbox");
console.log(showbox);

for (var i = 0; i < oLi.length; i++) {
    oLi[i].index = i;
    oLi[i].onclick = function () {
        for (var i = 0; i < oLi.length; i++) {
            oLi[i].classList.remove("nav_list_active");
            oLi[this.index].classList.add("nav_list_active");
            showbox[i].style.display = "none";
            showbox[this.index].style.display = "block";
        }

    }
}

//第三个效果  点击 +  -

var addBtn = document.getElementById("sum_add");
var subBtn = document.getElementById("sum_jian");
var amountinput = document.querySelector(".amountinput");

var inputValue = amountinput.value;

addBtn.onclick = function () {
    inputValue++;
    if(inputValue>10){
        inputValue = 10;
        alert("每单限购10件");
    }
    amountinput.value = inputValue;
}

subBtn.onclick = function () {
    inputValue--;
    if(inputValue<=1){
        inputValue = 1;
    }
    amountinput.value = inputValue;
}
