noseX=0;
noseY=0;
difference=0;
LeftWristX=0;
RightWristX=0;

function setup()
{
   canvas=createCanvas(500, 500);
   canvas.center();
   video=createCapture(VIDEO)
   video.size(550,500);
   posenet=ml5.poseNet(video,modelLoaded);
   posenet.on('pose', gotPoses)
}
function draw()
{
   background ('#969A9');
   document.getElementById("square_side").innerHTML="The width and the Length of the square will be ="+difference+"px";
   fill("#f90093");
   stroke("#f90093");
   square(NoseX,NoseY,difference);
}
function modelLoaded()
{
   console.log("posenet is initizialed");
}
function gotPoses(results)
{
if(results.length>0)
{
   console.log(results);
  noseX=results[0].pose.nose.X;
  noseY=results[0].pose.nose.Y;
  console.log("noseX= "+ noseX+ "noseY= " +noseY);
  LeftWristX=results[0].pose.LeftWristX;
  RightWristX=results[0].pose.RightWristX;
  difference=floor(LeftWristX-RightWristX);
  console.log("LeftWristX="+LeftWristX+"RightWristX"+RightWristX);
}
}