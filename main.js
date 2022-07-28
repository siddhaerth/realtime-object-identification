img ="";
status = "";
objects =[];

function preload(){
    img= loadImage('dog_cat.jpg');
}

function setup(){
    canvas = createCanvas(640,420);
    canvas.center();
    objectDetector = ml5.objectDetector('cocossd' , modelLoaded);
    document.getElementById("status").innerHTML = "Status : Detecting Object";
}

function draw() {
    image(img,0,0,640,420);
if(status !=""){
    for(s=0; s < objects.length; s++){
       document.getElementById("status").innerHTML = "Status : Objects Detected";

        fill("#FF0000");
        percent = floor(objects[s].confidence * 100);
        text(objects[s].label + " " + percent + "%", objects[s].x+15, objects[s].y+15);
        noFill();
        stroke("#FF0000");
        rect(objects[s].x, objects[s].y, objects[s].width, objects[s].height);
    }
}
   

}

function modelLoaded(){
    console.log("Model Loaded!")
    status = true;
    objectDetector.detect(img, gotResult);
}
function gotResult( error,results){
    if (error){
console.log(error);
    }
    console.log(results);
    objects = results;

}