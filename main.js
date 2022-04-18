var speechToTextAPI = window.webkitSpeechRecognition;
var speechRecognition = new speechToTextAPI();
function start(){
    speechRecognition.start();
}
speechRecognition.onresult=function(event){
    console.log(event)
    content=event.results[0][0].transcript
    if (content=="selfie") {
        Webcam.attach("#cameraDiv");
        setTimeout(() => {
            snapshot1()
        }, 5000);
        setTimeout(() => {
            snapshot2()
        }, 10000);
        setTimeout(() => {
            snapshot3()
        }, 15000);
    }
    console.log(content)
}
Webcam.set({
    width:450,
    height:300,
    image_format:'jpeg',
    jpeg_quality:90
});
function snapshot1(){
    Webcam.snap(function(data_url){
        document.getElementById("selfieDiv1").innerHTML="<img id='selfie' src="+data_url+">"
    })
}
function snapshot2(){
    Webcam.snap(function(data_url){
        document.getElementById("selfieDiv2").innerHTML="<img id='selfie' src="+data_url+">"
    })
}
function snapshot3(){
    Webcam.snap(function(data_url){
        document.getElementById("selfieDiv3").innerHTML="<img id='selfie' src="+data_url+">"
    })
}