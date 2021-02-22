var surface1,surface2,surface3,surface4,box;
var music;

function preload(){
    music = loadSound("music.mp3");
    
}


function setup(){
    canvas = createCanvas(700,600);

    //create 4 different surfaces

    surface1 = createSprite (80,580,150,10);
    surface1.shapeColor = "aqua";
    surface2 = createSprite (250,580,150,10);
    surface2.shapeColor = "coral";
    surface3 = createSprite (420,580,150,10);
    surface3.shapeColor = "indigo";
    surface4 = createSprite (590,580,150,10);
    surface4.shapeColor = "lime";

    //create box sprite and give velocity
    
    box = createSprite (80,10,15,15);
    box.x=Math.round(random(20,650));
    box.shapeColor = "white";
    box.velocityX=3;
    box.velocityY=3;

}

function draw() {
    background("black");

    //create edgeSprite
    edges=createEdgeSprites();  

    // Make box to bounceoff edges
    box.bounceOff(edges);
    
    //add condition to check if box touching surface and make it box

    if(box.isTouching(surface1)){
        box.shapeColor = "aqua";
        box.bounceOff(surface1);
        box.velocityX=0;
        box.velocityY=0;
    }

    if(box.isTouching(surface2)){
        box.shapeColor = "coral";
        box.bounceOff(surface2);
    }
    
    if(box.isTouching(surface3)){
        box.shapeColor = "indigo";
        box.bounceOff(surface3);
    }

    if(box.isTouching(surface4)){
        box.shapeColor = "lime";
        box.bounceOff(surface4);
    }

    drawSprites();
}
