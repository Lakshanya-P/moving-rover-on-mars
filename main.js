canvas = document.getElementById('myCanvas');
ctx= canvas.getContext("2d");

rover_width = 100;
rover_height=90;

rover_x = 10;
rover_y= 10;

background_image = "mars.jpg";
rover_image = "rover.png";

function add(){
    bg_imgtag= new Image();
    bg_imgtag.onload = uploadbg;
    bg_imgtag.src= background_image;
    
    rover_imgtag= new Image();
    rover_imgtag.onload = uploadrover;
    rover_imgtag.src= rover_image;

}

function uploadbg() {
ctx.drawImage(bg_imgtag, 0, 0, canvas.width, canvas.height);

}

function uploadrover() {
    ctx.drawImage(rover_imgtag, rover_x, rover_y, rover_width, rover_height);
}
window.addEventListener("keydown", my_keydown);
function my_keydown(){
    keypressed = e.keyCode;
    console.log(keypressed);

    if(keypressed=='38'){
        up();
        console.log("up");

    }
    if(keypressed=='37'){
        left();
        console.log("left");
    }
    
    if(keypressed=='39'){
        right();
        console.log("right");
    }
    
    if(keypressed=='40'){
        down();
        console.log("down");
    }
}