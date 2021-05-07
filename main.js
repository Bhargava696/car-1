canvas = document.getElementById('canvas');
ctx = canvas.getContext('2d');
var red_width = 100;
var red_height = 60;
var green_width = 100;
var green_height = 60;
var r_x = 10;
var r_y = 460;
var g_x = 10;
var g_y = 90;
var bg_image= "road.jpg";
var r_img = "red.svg";
var g_img = "green.svg";

function image() {
    bg_ = new Image();
    bg_.onload = uploadbg;
    bg_.src = bg_image;
    r_ = new Image();
    r_.onload = uploadr;
    r_.src = r_img;
    g_ = new Image();
    g_.onload = uploadg;
    g_.src = g_img;
}

function uploadbg() {
    ctx.drawImage(bg_, 0, 0, canvas.width, canvas.height);
}

function uploadr() {
    ctx.drawImage(r_, r_x, r_y, red_width, red_height);
}

function uploadg(){
    ctx.drawImage(g_,g_x, g_y, green_width, green_height);
}


window.addEventListener("keydown", oil);

function oil(e) {
    var anything = e.keyCode;
    console.log(anything);
    if (anything == "37") {
        left();
        console.log("left");
    }
    if (anything == "38") {
        up();
        console.log("up");
    }
    if (anything == "39") {
        right();
        console.log("right");
    }
    if (anything == "40") {
        down();
        console.log("down");
    }
    if (anything == "70") {
        front();
        console.log("front");
    }
    if (anything == "66") {
        back();
        console.log("back");
    }
    if (anything == "76") {
        leftSide();
        console.log("left");
    }
    if (anything == "82") {
        rightSide();
        console.log("right");
    }
}
