console.log("Welcome to spotify");
var masterPlay = document.getElementById('masterPlay');
var myProgressBar = document.getElementById("myProgressBar");
var audioElement = new Audio('1.mp3');
var gif = document.getElementById("gif");
var songIndex = 0;
var songItems = Array.from(document.getElementsByClassName('songItem'));
var changeName = document.getElementById("changeName");
var track = -1;
//

// songs list
var songs = [{songName: " HELLO", filePath: "1.mp3", coverPath: "1.jpg"},
{songName: "JUSTIN BIBER", filePath: "2.mp3", coverPath: "2.jpg"},
{songName: "SALENA GOMEZ", filePath: "3.mp3", coverPath: "3.jpg"},
{songName: "BILLIE ELISH", filePath: "4.mp3", coverPath: "4.jpg"},
{songName: "MAROON 5", filePath: "5.mp3", coverPath: "5.jpg"},
{songName: "ENIMEM", filePath: "6.mp3", coverPath: "6.jpg"},
{songName: "ARIJIT SINGH", filePath: "7.mp3", coverPath: "7.jpg"},
{songName: "SHREYA G", filePath: "8.mp3", coverPath: "8.jpg"}]

songItems.forEach((element, i) => {
  element.getElementsByTagName('img')[0].src = songs[i].coverPath;
    element.getElementsByClassName('songName')[0].innerText = songs[i].songName;
});

const makeAllPlays = ()=>{
    Array.from(document.getElementsByClassName('songPlay')).forEach((item, i) =>{
      item.classList.remove('fa-circle-pause');
      item.classList.add('fa-circle-play');
    })
}
Array.from(document.getElementsByClassName('songPlay')).forEach((item, i) => {
  item.addEventListener('click', (e)=>{
    makeAllPlays();
    songIndex = i;
    if (audioElement.currentTime > 0 && track == songIndex)
    {
      if (audioElement.paused){
         audioElement.play();
         e.target.classList.remove('fa-circle-play');
         e.target.classList.add('fa-circle-pause');
         gif.style.opacity = 1;
       }
         else{
      audioElement.pause();
      e.target.classList.remove('fa-circle-pause');
      e.target.classList.add('fa-circle-play');
      gif.style.opacity = 0;
    }

    }
    else{
    e.target.classList.remove('fa-circle-play');
    e.target.classList.add('fa-circle-pause');
      audioElement.src = songs[songIndex].filePath;
    audioElement.currentTime = 0;
    audioElement.play();
    gif.style.opacity = 1;
    changeName.innerText = songs[songIndex].songName;
    masterPlay.classList.remove('fa-play-circle');
     masterPlay.classList.add('fa-circle-pause');
     track = songIndex;
   }


  })

})

document.getElementById("prev").addEventListener('click', ()=>{
   if (songIndex > 0 && songIndex <= 7){
       songIndex -= 1;
       audioElement.src = songs[songIndex].filePath;
       audioElement.currentTime = 0;
       audioElement.play();
       gif.style.opacity = 1;
       changeName.innerText = songs[songIndex + 1].songName;
       masterPlay.classList.remove('fa-play-circle');
        masterPlay.classList.add('fa-circle-pause');
      }
})

document.getElementById("next").addEventListener('click', ()=>{
  if (songIndex >= 7)
     songIndex = 0;
  else
      songIndex += 1;
      audioElement.src = songs[songIndex].filePath;
      audioElement.currentTime = 0;
      audioElement.play();
      gif.style.opacity = 1;
      changeName.innerText = songs[songIndex].songName;
      masterPlay.classList.remove('fa-play-circle');
       masterPlay.classList.add('fa-circle-pause');
})


 // handle pause and playing
 masterPlay.addEventListener('click', ()=>{
   if (audioElement.paused || audioElement.currentTime <= 0){
     audioElement.play();
     masterPlay.classList.remove('fa-circle-play');
     masterPlay.classList.add('fa-pause-circle');
     gif.style.opacity = 1;
   }
   else{
     audioElement.pause();
     masterPlay.classList.remove('fa-circle-pause');
      masterPlay.classList.add('fa-play-cicle');
      gif.style.opacity = 0;
   }
 })
 // progress bar
audioElement.addEventListener('timeupdate', ()=>{
   console.log('timeupdate');
   var progress = parseInt((audioElement.currentTime / audioElement.duration) * 100);
   myProgressBar.value = progress;
 })
 myProgressBar.addEventListener('change',()=>{
   audioElement.currentTime = (myProgressBar.value * audioElement.duration) / 100;
 })
