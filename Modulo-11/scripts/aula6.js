
let video1 = document.getElementById("video1");

function retroceder(){
    video1.currentTime -= 10;
}

function avancar(){
    video1.currentTime += 10;
}

function diminuir_vel(){
    video1.playbackRate -= 0.1;
}

function aumentar_vel(){
    video1.playbackRate += 0.1;
}

function play(){
    video1.play();
}

function stop(){
    video1.pause();
    video1.currentTime = 0;
}
