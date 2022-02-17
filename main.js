function preload(){}

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
        console.log(results)
        console.log("nose x =" + results[0].pose.nose.x);
        console.log("nose y =" + results[0].pose.nose.y);
        console.log("⚡check⚡")
        
    }
}

function draw(){
    image(video , 0 , 0 , 400 , 350);
}

function takeSnapshot(){
    save("filter-image.png");
}