var myVideo = document.getElementById("video1"); 

function playPause() { 
  if (myVideo.paused) 
    myVideo.play(); 
  else 
    myVideo.pause(); 
} 

window.onresize = function () {
  let largura = document.body.clientWidth;
  let redimensionar = 0.55;
  let altura = largura * redimensionar;
  let alturastring = altura.toString() + 'px';
  let video = document.getElementById('video1');
  video.style.height = alturastring;
  video.style.width = '100%';
  if (largura < 991.98) {
    video.style.marginTop = '46px';
  }
};

let largura = document.body.clientWidth;
let redimensionar = 0.55;
let altura = largura * redimensionar;
let alturastring = altura.toString() + 'px';
let margem = (altura + 10).toString() + 'px';
let video = document.getElementById('video1');
video.style.height = alturastring;
video.style.width = '100%';
if (largura < 991.98) {
  video.style.marginTop = '46px';
}