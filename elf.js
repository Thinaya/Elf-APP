leftEarX=0;
leftEarY=0;
rightEarX=0;
rightEarY=0;
leftEyeX=0;
leftEyeY=0;

function preload() {
    leftEar = loadImage('Right Ear.png');
    rightEar = loadImage('Left Ear.png');
    leftEye = loadImage('Right Eye.png');
}

function setup() {
    canvas = createCanvas(300, 300);
    canvas.center();
    video = createCapture(VIDEO);
    video.size(300,300);
    video.hide();

    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotPoses);
}

function gotPoses(results)
{
    if(results.length > 0)
    {
        console.log(results);
        leftEarX= results[0].pose.leftEar.x;
        leftEarY= results[0].pose.leftEar.y;
        console.log("leftEar x = " + leftEarX);
        console.log("leftEar y = " + leftEarY);
    }
    if(results.length > 0)
    {
        console.log(results);
        rightEarY= results[0].pose.rightEar.x;
        rightEarX= results[0].pose.rightEar.y;
        console.log("rightEar x = " + rightEarX);
        console.log("rightEar y = " + rightEarY);
    }   
    if(results.length > 0)
    {
        console.log(results);
        leftEyeY= results[0].pose.leftEye.x;
        leftEyeX= results[0].pose.leftEye.y;
        console.log("leftEye x = " + leftEyeX);
        console.log("leftEye y = " + leftEyeY);
    }  
}

function modelLoaded() {
    console.log('PostNet Is Intialized');
}

function draw() {
    image(video, 0, 0, 300, 300);
    image(leftEar, leftEarX-30, leftEarY-10, 60, 50);
    image(rightEar, rightEarY-30, rightEarX-10, 60, 50);
    image(leftEye, leftEyeY-30, leftEyeX-10, 60, 50);

    }

function take_snapshot(){
    save('myFilterImage.png')
}
