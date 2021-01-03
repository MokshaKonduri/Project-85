canvas=document.getElementById("myCanvas");
ctx=canvas.getContext("2d");
nasa_mars_images_array=["mars1.png","mars2.jpg","mars3.jpg","mars4.jpg","mars5.jpg"];
random_number=Math.floor(Math.random()*5);
car_width=100;
car_height=90;
background_image=nasa_mars_images_array[random_number];
console.log("background_image"+background_image);
car_image="BlueCar.png";
car_x=10;
car_y=10;
function add() {
    background_imgTag=new Image();
    background_imgTag.onload=uploadBackground;
    background_imgTag.src=background_image;

   

    car_imgTag=new Image();
   car_imgTag.onload=uploadCar;
    car_imgTag.src=car_image;
}

function uploadBackground() {
    ctx.drawImage(background_imgTag,0,0,canvas.width,canvas.height);
}
function uploadRover() {
    ctx.drawImage(car_imgTag,car_x,car_y,car_width,car_height);
}
window.addEventListener("keydown",my_keydown);
function my_keydown(e) {
    keyPressed=e.keyCode;
    if (keyPressed=='38') {
        up();
        }
    if (keyPressed=='40') {
        down();
    }
    if (keyPressed=='37') {
       left();
    }
    if (keyPressed=='39') {
        right();
    }

}
function up() {
    if (rover_y >= 0) {
        rover_y=rover_y - 10;
        console.log("when up arrow is pressed "+"x= "+ rover_x+"y= "+ rover_y);
        uploadBackground();
        uploadRover();
    }
}
function down() {
if (rover_y <= 500) {
    rover_y=rover_y + 10;
    console.log("when down arrow is pressed "+"x= "+ rover_x+"y= "+ rover_y);
    uploadBackground();
    uploadRover();
}
}
function left() {
    if (rover_x >= 0) {
        rover_x=rover_x - 10;
        console.log("when left arrow is pressed "+"x= "+ rover_x+"y= "+ rover_y);
        uploadBackground();
        uploadRover();
    }
}
function right() {
    if (rover_x <= 700) {
        rover_x=rover_x + 10;
        console.log("when right arrow is pressed "+"x= "+ rover_x+"y= "+ rover_y);
        uploadBackground();
        uploadRover();
    }
}
