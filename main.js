var prediction1="";
var prediction2="";

Webcam.set({
    height: 200,
    width:250,
    image_format: 'png',
    png_quality: 90
});

webcamView = document.getElementById("webcamView")
Webcam.attach('#webcamView')

function capture(){
    Webcam.snap(function(data_uri){
        document.getElementById("snapshotResult").innerHTML= '<img id="capturedImage" src="'+data_uri+'"/>'
    });
}
console.log("ml5 version" , ml5.version);

classifier=ml5.imageClassifier('https://teachablemachine.withgoogle.com/models/WtsCySTT7/model.json', modelLoaded)

function modelLoaded(){
    console.log("modelLoaded");
}

function speak(){
    var synth = window.speechSynthesis;
    speak_data_1 = "The first prediction is " + prediction1;
    speak_data_2= " The second prediction is "+ prediction2;
    var utterThis = new SpeechSynthesisUtterance(speak_data_1 + speak_data_2);
    synth.speak(utterThis);
}