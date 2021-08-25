console.log("ml5 version=",ml5.version)
function start(){
navigator.mediaDevices.getUserMedia({audio:true})
classifier=ml5.imageClassifier("https://teachablemachine.withgoogle.com/models/W8bfmE0ga/model.json",modelLoaded)}

function modelLoaded(){
    console.log("modelLoaded")
}
