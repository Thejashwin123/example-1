var playbutton,waitimg
var gameState="wait"

function preload(){
waitimg=loadImage("ASSERTS/SCREEN1.gif")


}

function setup(){
    createCanvas(windowWidth, windowHeight)
playbutton=createImg("play.png")
playbutton.position(width/4,height/2)

gun1=createImg("/ASSERTS/GUNS AND BUTTON/GUN1.png")
gun2=createImg("/ASSERTS/GUNS AND BUTTON/GUN2.png")
gun3=createImg("/ASSERTS/GUNS AND BUTTON/GUN3.png")
gun4=createImg("/ASSERTS/GUNS AND BUTTON/GUN4.png")


gun1.position(width/2,height-100)
gun2.position(width/2-200,height-100)
gun3.position(width/2+200,height-100)
gun4.position(width/2+400,height-100)


gun1.hide()
gun2.hide()
gun3.hide()
gun4.hide()





}

function draw(){
    if (gameState==="wait"){
background(waitimg)
}


if(playbutton.mousePressed(()=>{
    gameState="weaponselect"
}))


if (gameState==="weaponselect"){
    background("green")
    playbutton.hide()

    gun1.show()
gun2.show()
gun3.show()
gun4.show()


}

}