console.log("spotify");
//use queryselector
let songIndex = 0;
const audioElement = new Audio("1.mp3");
const masterPlay = document.getElementById("masterplay");
const arr = [];
for (let i = 0; i < 5; i++) arr.push(document.querySelector(`#s${i}`));
//console.log(arr);
const myProgressBar = document.getElementById("myprogressbar");
const gif = document.getElementById("gif");
const masterSongName = document.getElementById("mastersongname");
const songItems = Array.from(document.getElementsByClassName("songitem"));

const songs = [
  { songName: "Tum hi ho", filePath: "1.mp3", coverPath: "first.jpg" },
  { songName: "Heeriye", filePath: "2.mp3", coverPath: "second.jpg" },
  { songName: "Chaleya", filePath: "3.mp3", coverPath: "third.jpg" },
  { songName: "Tere hawale", filePath: "4.mp3", coverPath: "fourth.jpg" },
  { songName: "Tu mera koi na", filePath: "5.mp3", coverPath: "fifth.jpg" },
];

songItems.forEach((element, i) => {
  //console.log(element,i);
  element.getElementsByTagName("img")[0].src = songs[i].coverPath;
  element.getElementsByClassName("songname")[0].innerText = songs[i].songName;
});
//handle play/pause click
masterPlay.addEventListener("click", () => {
  if (audioElement.paused || audioElement.currentTime <= 0) {
    audioElement.play();

    masterPlay.classList.remove("fa-play-circle");
    masterPlay.classList.add("fa-pause-circle");
    gif.style.opacity = 1;
  } else {
    audioElement.pause();
    masterPlay.classList.remove("fa-pause-circle");
    masterPlay.classList.add("fa-play-circle");
    for (let i = 0; i < 5; i++)
      if (songIndex == i) {
        arr[i].classList.remove("fa-pause-circle");
        arr[i].classList.add("fa-play-circle");
      }

    gif.style.opacity = 0;
  }
});

//listen to events

audioElement.addEventListener("timeupdate", () => {
  //console.log('timeupdate');
  //update seekbar
  progress = parseInt((audioElement.currentTime / audioElement.duration) * 100);
  //console.log(progress);
  myProgressBar.value = progress;
});

myProgressBar.addEventListener("change", () => {
  audioElement.currentTime =
    (myProgressBar.value * audioElement.duration) / 100;
});
const makeallplay = (songIndex) => {
  Array.from(document.getElementsByClassName("songitemplay")).forEach(
    (element) => {
      element.classList.remove("fa-pause-circle");
      element.classList.add("fa-play-circle");
    }
  );
};

Array.from(document.getElementsByClassName("songitemplay")).forEach(
  (element) => {
    element.addEventListener("click", (e) => {
      makeallplay(songIndex);

      songIndex = parseInt(e.target.id.substring(1));
      //console.log(e.target.id.substring(1));
      e.target.classList.remove("fa-play-circle");
      //console.log({songIndex});
      masterSongName.innerText = songs[songIndex].songName;
      e.target.classList.add("fa-pause-circle");

      audioElement.src = `${songIndex + 1}.mp3`;
      audioElement.currentTime = 0;
      audioElement.play();
      gif.style.opacity = 1;
      masterPlay.classList.remove("fa-play-circle");
      masterPlay.classList.add("fa-pause-circle");
    });
  }
);

document.getElementById("next").addEventListener("click", () => {
  if (songIndex >= 4) songIndex = 0;
  else songIndex += 1;

  audioElement.src = `${songIndex + 1}.mp3`;
  masterSongName.innerText = songs[songIndex].songName;
  audioElement.currentTime = 0;
  audioElement.play();

  arr[songIndex].classList.remove("fa-play-circle");
  arr[songIndex].classList.add("fa-pause-circle");

  for (let i = 0; i < 5; i++) {
    if (i != songIndex) {
      arr[i].classList.remove("fa-pause-circle");
      arr[i].classList.add("fa-play-circle");
    }
  }

  masterPlay.classList.remove("fa-play-circle");
  masterPlay.classList.add("fa-pause-circle");
});

document.getElementById("previous").addEventListener("click", () => {
  if (songIndex < 0) songIndex = 4;
  else songIndex -= 1;

  audioElement.src = `${songIndex + 1}.mp3`;
  masterSongName.innerText = songs[songIndex].songName;
  audioElement.currentTime = 0;
  audioElement.play();
 arr[songIndex].classList.remove("fa-play-circle");
 arr[songIndex].classList.add("fa-pause-circle");

 for (let i = 0; i < 5; i++) {
   if (i != songIndex) {
     arr[i].classList.remove("fa-pause-circle");
     arr[i].classList.add("fa-play-circle");
   }
 }
  masterPlay.classList.remove("fa-play-circle");
  masterPlay.classList.add("fa-pause-circle");
});
