function preload()
{

}

function setup()
{
    canvas=createCanvas(300,300);
    canvas.center();
    video=createCapture(VIDEO);
    video.size(300,300);
    video.hide();
    poseNet=ml5.poseNet(video,model_loaded);
    poseNet.on('pose',got_pose);

}

function got_pose(results)
{
    if(results.length > 0)
    {
        console.log(results);
        console.log("nose x =" + results[0].pose.nose.x);
        console.log("nose y =" + results[0].pose.nose.y);
    }

}

function model_loaded()
{
    console.log("Posenet is intialised");
}

function draw()
{
    image(video,0,0,300,300);

}

function take_snapshot()
{
    save('filter_image.png');
}