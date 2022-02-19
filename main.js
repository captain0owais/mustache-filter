noseX = 0;
noseY = 0;

function preload(){
    mustache = loadImage("https://i.postimg.cc/hj55HhXT/Moustache-PNG-Image.png");
}

function setup(){
    canvas = createCanvas(400 , 350);
    canvas.center();
    video = createCapture(VIDEO)
    video.size(400 , 350);
    video.hide()
    poseNet = ml5.poseNet(video , modelLoded);
    poseNet.on("pose" , gotPoses);    
}

function modelLoded(){
    console.log("poseNet INITIALIZED");
}

function gotPoses(results){
    if(results.length > 0){
        console.log(results);
        noseX = results[0].pose.nose.x - 37.5;
        noseY = results[0].pose.nose.y - 5;
        console.log("nose x =" + noseX);
        console.log("nose y =" + noseY);
        console.log("⚡check⚡")
        
    }
}

function draw(){
    image(video , 0 , 0 , 400 , 350);
    image(mustache , noseX , noseY , 75 , 50)
}

function takeSnapshot(){
    save("filter-image.png");
}