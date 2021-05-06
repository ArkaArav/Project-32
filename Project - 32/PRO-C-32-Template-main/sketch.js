const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var backgroundImg;
var hour
var bg ;

function preload() {
    sunrise1Image = loadImage("sunrise2.png")
    getBackgroundImg()
}

function setup(){
    var canvas = createCanvas(1200,700);
    engine = Engine.create();
    world = engine.world;

}

function draw(){

    if(backgroundImg){
        background (backgroundImg)
    }


    Engine.update(engine);

    fill ("black")
    textSize(20)
    if(hour>=12){
        text("time : " + hour%12 + "pm", 50,100)
    }
    else if(hour === 0){
        text("time : 12 am", 50, 100)
    }
    else{
        text("time : " + hour%12 + "am", 50,100)
    }
}

async function getBackgroundImg(){

    var response = await fetch("http://worldtimeapi.org/api/timezone/Asia/Kolkata");
    var responseJSON = await response.json();

    var datetime = responseJSON.datetime;
    hour = datetime.slice(11,13);
    if(hour>=06 && hour<=08){
        bg = "sunrise1.png"
    } 
    else if(hour>=08 && hour<=12){
        bg = "sunrise3.png"
    }
    else if(hour>=13 && hour<=16){
        bg = "sunset7.png"
    }
    else if(hour>=16 && hour<=19){
        bg = "sunset8.png"
    }
    else{bg = "sunset10.png"}

    backgroundImg = loadImage(bg)

    // write code slice the datetime


    // add conditions to change the background images from sunrise to sunset


    //load the image in backgroundImg variable here

}
