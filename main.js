noseX = 0;
noseY = 0;

function preload(){
    mustache = loadImage("https://i.postimg.cc/htKkh3bq/m.png");
}

function setup(){
    canvas = createCanvas(300,300);
    canvas.center();
    video = createCapture(VIDEO);
    video.size(300, 300);
    video.hide();

    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotPoses);

}


function modelLoaded() {
    console.log('PoseNet is Intialized');

}

function gotPoses(results) {
    if(results.length > 0) {
        console.log(results);
        noseX = results[0].pose.nose.x;
        noseY = results[0].pose.nose.y;
        noseX = noseX - 30;
        noseY = noseY;

        console.log("Nose x = " + noseX);
        console.log("Nose y = " + noseY);
    }
}
function draw(){
    image(video, 0, 0, 300, 300);
    
    image(mustache, noseX, noseY,60, 60);

}

function take_snapshot(){
    save("my_picture.png");
}