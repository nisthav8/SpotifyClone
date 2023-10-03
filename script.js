console.log("spotify");

let songIndex=0;
let audioElement = new Audio("1.mp3");
let masterPlay = document.getElementById('masterplay');
let one = document.getElementById("0");
let two = document.getElementById("1");
let three = document.getElementById("2");
let four = document.getElementById("3");
let five = document.getElementById("4");
let myProgressBar= document.getElementById('myprogressbar');
let gif=document.getElementById('gif');
let masterSongName=document.getElementById('mastersongname');
let songItems = Array.from(document.getElementsByClassName('songitem'));

let songs = [
  { songName: "Tum hi ho", filePath: "1.mp3", coverPath: "first.jpg" },
  { songName: "Heeriye", filePath: "2.mp3", coverPath: "second.jpg" },
  { songName: "Chaleya", filePath: "3.mp3", coverPath: "third.jpg" },
  { songName: "Tere hawale", filePath: "4.mp3", coverPath: "fourth.jpg" },
  { songName: "Tu mera koi na", filePath: "5.mp3", coverPath: "fifth.jpg" },
];


songItems.forEach((element,i)=>{
  //console.log(element,i);
  element.getElementsByTagName("img")[0].src=songs[i].coverPath;
    element.getElementsByClassName("songname")[0].innerText = songs[i].songName;

})
//handle play/pause click
masterPlay.addEventListener('click',()=>{
   if(audioElement.paused || audioElement.currentTime<=0){
     audioElement.play();
     masterPlay.classList.remove('fa-play-circle');
     masterPlay.classList.add('fa-pause-circle');
     gif.style.opacity=1;
   }
   else{
      audioElement.pause();
        masterPlay.classList.remove("fa-pause-circle");
        masterPlay.classList.add("fa-play-circle");
        gif.style.opacity = 0;
   }
});

//listen to events

audioElement.addEventListener('timeupdate',()=>{
//console.log('timeupdate');
//update seekbar
  progress=parseInt((audioElement.currentTime/audioElement.duration)*100)
    //console.log(progress);
    myProgressBar.value=progress;

})

myProgressBar.addEventListener('change',()=>{
   audioElement.currentTime=myProgressBar.value*audioElement.duration/100;

})
const makeallplay = () =>{
  
Array.from(document.getElementsByClassName('songitemplay')).forEach((element)=>{
  element.classList.remove("fa-pause-circle");
             element.classList.add('fa-play-circle');
})
}

Array.from(document.getElementsByClassName('songitemplay')).forEach((element)=>{

   element.addEventListener('click',(e)=>{
    makeallplay();
    
    songIndex=parseInt(e.target.id);
       e.target.classList.remove('fa-play-circle');
       masterSongName.innerText = songs[songIndex].songName;
        e.target.classList.add('fa-pause-circle');
      
       audioElement.src=`${songIndex+1}.mp3`;
       audioElement.currentTime=0;
       audioElement.play();
       gif.style.opacity = 1;
       masterPlay.classList.remove("fa-play-circle");
       masterPlay.classList.add("fa-pause-circle");
   })

}
)

document.getElementById('next').addEventListener('click',()=>{
if(songIndex>=4) songIndex=0;
else
songIndex+=1;

 audioElement.src = `${songIndex + 1}.mp3`;
 masterSongName.innerText= songs[songIndex].songName;
 audioElement.currentTime = 0;
 audioElement.play();

   if (songIndex == 0) {
     one.classList.remove("fa-play-circle");
     one.classList.add("fa-pause-circle");
     two.classList.remove("fa-pause-circle");
     two.classList.add("fa-play-circle");
     three.classList.remove("fa-pause-circle");
     three.classList.add("fa-play-circle");
     four.classList.remove("fa-pause-circle");
     four.classList.add("fa-play-circle");
     five.classList.remove("fa-pause-circle");
     five.classList.add("fa-play-circle");
   } else if (songIndex == 1) {
       one.classList.remove("fa-pause-circle");
       one.classList.add("fa-play-circle");
     two.classList.remove("fa-play-circle");
     two.classList.add("fa-pause-circle");
    
       three.classList.remove("fa-pause-circle");
       three.classList.add("fa-play-circle");
       four.classList.remove("fa-pause-circle");
       four.classList.add("fa-play-circle");
       five.classList.remove("fa-pause-circle");
       five.classList.add("fa-play-circle");
   } else if (songIndex == 2) {
     three.classList.remove("fa-play-circle");
     three.classList.add("fa-pause-circle");
       two.classList.remove("fa-pause-circle");
       two.classList.add("fa-play-circle");
       one.classList.remove("fa-pause-circle");
       one.classList.add("fa-play-circle");
       four.classList.remove("fa-pause-circle");
       four.classList.add("fa-play-circle");
       five.classList.remove("fa-pause-circle");
       five.classList.add("fa-play-circle");
   } else if (songIndex == 3) {
     four.classList.remove("fa-play-circle");
     four.classList.add("fa-pause-circle");
       two.classList.remove("fa-pause-circle");
       two.classList.add("fa-play-circle");
       three.classList.remove("fa-pause-circle");
       three.classList.add("fa-play-circle");
       one.classList.remove("fa-pause-circle");
       one.classList.add("fa-play-circle");
       five.classList.remove("fa-pause-circle");
       five.classList.add("fa-play-circle");
   } else {
     five.classList.remove("fa-play-circle");
     five.classList.add("fa-pause-circle");
       two.classList.remove("fa-pause-circle");
       two.classList.add("fa-play-circle");
       three.classList.remove("fa-pause-circle");
       three.classList.add("fa-play-circle");
       four.classList.remove("fa-pause-circle");
       four.classList.add("fa-play-circle");
       one.classList.remove("fa-pause-circle");
       one.classList.add("fa-play-circle");
   }
//  for(let i=0;i<=4;i++)
//  if(i!=songIndex)
//  i.classList.remove("fa-play-circle");


 masterPlay.classList.remove("fa-play-circle");
 masterPlay.classList.add("fa-pause-circle");
})

document.getElementById('previous').addEventListener("click", () => {
  if(songIndex<0) songIndex = 4;
  else songIndex -= 1;

  audioElement.src = `${songIndex + 1}.mp3`;
  masterSongName.innerText = songs[songIndex].songName;
  audioElement.currentTime = 0;
  audioElement.play();
  
   if (songIndex == 0) {
     one.classList.remove("fa-play-circle");
     one.classList.add("fa-pause-circle");
     two.classList.remove("fa-pause-circle");
     two.classList.add("fa-play-circle");
     three.classList.remove("fa-pause-circle");
     three.classList.add("fa-play-circle");
     four.classList.remove("fa-pause-circle");
     four.classList.add("fa-play-circle");
     five.classList.remove("fa-pause-circle");
     five.classList.add("fa-play-circle");
   } else if (songIndex == 1) {
     one.classList.remove("fa-pause-circle");
     one.classList.add("fa-play-circle");
     two.classList.remove("fa-play-circle");
     two.classList.add("fa-pause-circle");

     three.classList.remove("fa-pause-circle");
     three.classList.add("fa-play-circle");
     four.classList.remove("fa-pause-circle");
     four.classList.add("fa-play-circle");
     five.classList.remove("fa-pause-circle");
     five.classList.add("fa-play-circle");
   } else if (songIndex == 2) {
     three.classList.remove("fa-play-circle");
     three.classList.add("fa-pause-circle");
     two.classList.remove("fa-pause-circle");
     two.classList.add("fa-play-circle");
     one.classList.remove("fa-pause-circle");
     one.classList.add("fa-play-circle");
     four.classList.remove("fa-pause-circle");
     four.classList.add("fa-play-circle");
     five.classList.remove("fa-pause-circle");
     five.classList.add("fa-play-circle");
   } else if (songIndex == 3) {
     four.classList.remove("fa-play-circle");
     four.classList.add("fa-pause-circle");
     two.classList.remove("fa-pause-circle");
     two.classList.add("fa-play-circle");
     three.classList.remove("fa-pause-circle");
     three.classList.add("fa-play-circle");
     one.classList.remove("fa-pause-circle");
     one.classList.add("fa-play-circle");
     five.classList.remove("fa-pause-circle");
     five.classList.add("fa-play-circle");
   } else {
     five.classList.remove("fa-play-circle");
     five.classList.add("fa-pause-circle");
     two.classList.remove("fa-pause-circle");
     two.classList.add("fa-play-circle");
     three.classList.remove("fa-pause-circle");
     three.classList.add("fa-play-circle");
     four.classList.remove("fa-pause-circle");
     four.classList.add("fa-play-circle");
     one.classList.remove("fa-pause-circle");
     one.classList.add("fa-play-circle");
   }
  masterPlay.classList.remove("fa-play-circle");
  masterPlay.classList.add("fa-pause-circle");
});