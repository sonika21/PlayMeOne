
var icon = document.getElementById("iconPlay");
var iconS= document.getElementById("iconShuffle");
var iconSt= document.getElementById("iconStop");

var playStatus= 0;

var songS=["LaLaLa.mp3","FINISH.mp3","Asbigasthesky.mp3","Letter.mp3"];
var playy= new Audio(getRandomNumber());

function getRandomNumber(){
    return songS[Math.floor(Math.random()* songS.length)];
}

icon.onclick = function(){
    if(playStatus==0){
        playy.play();
        icon.src="images/pause.png";
        playStatus=1;
    }
    else{
        playy.pause();
        icon.src="images/play.png";
        playStatus=0;
    }
}

iconS.onclick = function(){
    if(!playy.paused){
        playy.pause();
    }
    playy= new Audio(getRandomNumber());
    playy.play();
    icon.src="images/pause.png";
    playStatus=1;
}

iconSt.onclick = function(){
    playy.pause();
    icon.src="images/play.png";
    playStatus=0;
    playy=new Audio(getRandomNumber());

}