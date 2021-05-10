var garden,cat,mouse,cat_img

function preload() {
    //load the images here
    garden=loadImage("images/garden.png")
    catsit=loadAnimation("images/cat1.png")
    mousestand=loadAnimation("images/mouse1.png")
    cathappy=loadAnimation("images/cat4.png")
    mousehappy=loadAnimation("images/mouse4.png")
    cat_img=loadAnimation("images/cat2.png","images/cat3.png")
    mouse_img=loadAnimation("images/mouse2.png","images/mouse3.png")
}

function setup(){
    createCanvas(1000,800);
    //create tom and jerry sprites here
    cat=createSprite(800,600)
    cat.addAnimation("b",catsit)
    cat.addAnimation("d",cat_img)
    cat.addAnimation("e",cathappy)
    cat.scale=0.2

    mouse=createSprite(200,600)
    mouse.addAnimation("c",mousestand)
    mouse.addAnimation("a",mouse_img)
    mouse.addAnimation("f",mousehappy)
    mouse.scale=0.2
}

function draw() {

    background(garden);
    //Write condition here to evalute if tom and jerry collide
    if (cat.x-mouse.x<(cat.width-mouse.width)+100/2){
        cat.velocityX=0
        mouse.changeAnimation("f")
        cat.changeAnimation("e")
    }

    drawSprites();
}


function keyPressed(){

  //For moving and changing animation write code here
    if (keyCode===LEFT_ARROW){
       
        mouse.changeAnimation("a")
        cat.changeAnimation("d")
        cat.velocityX=-3
    }

}
