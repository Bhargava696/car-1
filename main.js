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
        leftside();
        console.log("left");
    }
    if (anything == "82") {
        rightside();
        console.log("right");
    }
    if(r_x > 700){
        console.log("Car 1 won");
        document.getElementById("status").innerHTML = "Red car won";
    }else if(g_x > 700){
        document.getElementById("status").innerHTML = "Green car won";
    }
}
function left() {
    if (r_x >= 0) {
        r_x = r_x - 10;
        uploadbg();
        uploadr();
        uploadg();
    }
}

function right() {
    if (r_x <= 725) {
        r_x = r_x + 10;
        uploadbg();
        uploadr();
        uploadg();
    }
}

function up() {
    if (r_y >= 0){
        r_y = r_y - 10;
        uploadbg();
        uploadr();
        uploadg();
    }
}

function down() {
    if (r_y <= 550){
        r_y = r_y + 10;
        uploadbg();
        uploadr();
        uploadg();
    }
}
function leftside() {
    if (g_x >= 0) {
        g_x = g_x - 10;
        uploadbg();
        uploadr();
        uploadg();
    }
}

function rightside() {
    if (g_x <= 725) {
        g_x = g_x + 10;
        uploadbg();
        uploadr();
        uploadg();
    }
}

function front() {
    if (g_y >= 0){
        g_y = g_y - 10;
        uploadbg();
        uploadr();
        uploadg();
    }
}

function back() {
    if (g_y <= 550){
        g_y = g_y + 10;
        uploadbg();
        uploadr();
        uploadg();
    }
}
