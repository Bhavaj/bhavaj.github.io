console.log('welcome to my music player');

//Intialiaze the variables

let songIndex = 0;
let masterPlay = document.getElementById('masterPlay');
let myProgressBar = document.getElementById('myProgressBar');

let masterSongName = document.getElementById('masterSongName');
let mobileMasterSongName = document.getElementById('mobileMasterSongName');
let mobileGif = document.getElementById('mobileGif')

let gif = document.getElementById('gif');

let songItem = Array.from(document.getElementsByClassName("songItem"));


var miniPlay = Array.from(document.getElementsByClassName('songItemPlay'));




let songs = [
    { songName: "Die for You", filePath: "songs/1.mp3", coverPath: "covers/cover1.jpg" },
    { songName: "Runnin", filePath: "songs/2.mp3", coverPath: "covers/cover2.jpg" },
    { songName: "Back to life", filePath: "songs/3.mp3", coverPath: "covers/cover3.jpg" },
    { songName: "Toxic", filePath: "songs/4.mp3", coverPath: "covers/cover4.jpg" },
    { songName: "7 years old", filePath: "songs/5.mp3", coverPath: "covers/cover5.jpg" },
    { songName: "Let me go", filePath: "songs/6.mp3", coverPath: "covers/cover6.jpg" },
    { songName: "Closer", filePath: "songs/7.mp3", coverPath: "covers/cover7.jpg" },
    { songName: "Na Na Na Na", filePath: "songs/8.mp3", coverPath: "covers/cover8.jpg" },
]

songItem.forEach((element, i) => {
    // console.log(element, i)
    element.getElementsByTagName("img")[0].src = songs[i].coverPath;
    element.getElementsByClassName("songName")[0].innerText = songs[i].songName;

})

let audioElement = new Audio('songs/1.mp3')

// handle play pause

masterPlay.addEventListener('click', () => {
    if (audioElement.paused || audioElement.currentTime <= 0) {
        audioElement.play();
        masterPlay.classList.remove('fa-play-circle');
        masterPlay.classList.add('fa-pause-circle');
        gif.style.opacity = 1;
        mobileGif.style.opacity = 1;
        // console.log(audioElement.duration);
    }

    else {
        audioElement.pause();
        masterPlay.classList.add('fa-play-circle');
        masterPlay.classList.remove('fa-pause-circle');
        gif.style.opacity = 0;
        mobileGif.style.opacity = 0;
    }
})

// Listen to events
audioElement.addEventListener('timeupdate', () => {

    // update seek bar

    progress = parseInt((audioElement.currentTime / audioElement.duration) * 100);
    console.log(progress);
    myProgressBar.value = progress;

    if (progress == 100 ) {

        if(songIndex < 7){

            console.log(songIndex);

            
            songIndex += 1;
            makeAllPlays();
            makeAllBlackBackground();
            songItem[songIndex].classList.add('whiteBackground');
            
            
            audioElement.src = `songs/${songIndex + 1}.mp3`;
            audioElement.play();
            gif.style.opacity = 1;
            mobileGif.style.opacity = 1;
            audioElement.currentTime = 0;
            masterSongName.innerText = songs[songIndex].songName;
            mobileMasterSongName.innerText = songs[songIndex].songName;
            
            masterPlay.classList.remove('fa-play-circle');
            masterPlay.classList.add('fa-pause-circle');
            miniPlay[songIndex].classList.add('fa-pause-circle');
            miniPlay[songIndex].classList.remove('fa-play-circle');
        }

        else{
            songIndex=0;
            makeAllPlays();
            makeAllBlackBackground();
            songItem[songIndex].classList.add('whiteBackground');
            
            
            audioElement.src = `songs/${songIndex + 1}.mp3`;
            audioElement.play();
            gif.style.opacity = 1;
            mobileGif.style.opacity = 1;
            audioElement.currentTime = 0;
            masterSongName.innerText = songs[songIndex].songName;
            mobileMasterSongName.innerText = songs[songIndex].songName;
            
            masterPlay.classList.remove('fa-play-circle');
            masterPlay.classList.add('fa-pause-circle');
            miniPlay[songIndex].classList.add('fa-pause-circle');
            miniPlay[songIndex].classList.remove('fa-play-circle');

        }

    }

    
    
    })

// controlling seek
myProgressBar.addEventListener('change', () => {
    audioElement.currentTime = (myProgressBar.value * audioElement.duration) / 100;
})


const makeAllPlays = () => {
    Array.from(document.getElementsByClassName('songItemPlay')).forEach((element) => {
        element.classList.remove('fa-pause-circle');
        element.classList.add('fa-play-circle');

    })
}


// mid level play buttons javascript
Array.from(document.getElementsByClassName('songItemPlay')).forEach((element, e) => {
    element.addEventListener('click', (e) => {
        // console.log(e.target)


        if (e.target.classList.contains('fa-play-circle')) {
            makeAllPlays();


            songIndex = parseInt(e.target.id);
            e.target.classList.remove('fa-play-circle');
            e.target.classList.add('fa-pause-circle');

            audioElement.src = `songs/${songIndex + 1}.mp3`;
            audioElement.play();
            gif.style.opacity = 1;
            mobileGif.style.opacity = 1;
            audioElement.currentTime = 0;

            masterSongName.innerText = songs[songIndex].songName;
            mobileMasterSongName.innerText = songs[songIndex].songName;

            masterPlay.classList.remove('fa-play-circle');
            masterPlay.classList.add('fa-pause-circle');
            console.log(audioElement.duration);
        }

        else {
            songIndex = parseInt(e.target.id);
            e.target.classList.add('fa-play-circle');
            e.target.classList.remove('fa-pause-circle');

            audioElement.src = `songs/${songIndex + 1}.mp3`;
            audioElement.pause();
            gif.style.opacity = 0;
            mobileGif.style.opacity = 0;

            audioElement.currentTime = 0;

            masterSongName.innerText = songs[songIndex].songName;
            mobileMasterSongName.innerText = songs[songIndex].songName;

            masterPlay.classList.add('fa-play-circle');
            masterPlay.classList.remove('fa-pause-circle');

        }


    })

})


// click on the song name

const makeAllBlackBackground = () => {
    Array.from(document.getElementsByClassName('songItem')).forEach((element) => {
        element.classList.remove('whiteBackground');
        element.classList.add('blackBackground');

    })

}

Array.from(document.getElementsByClassName('songItem')).forEach((element, e) => {

    element.addEventListener('click', () => {
        // console.log(element);
        miniPlay = element.getElementsByTagName('i')[0];
        makeAllPlays();
        makeAllBlackBackground();
        songIndex = parseInt(element.getElementsByTagName("i")[0].id);




        // songIndex = parseInt(element.id);
        console.log(songIndex);



        element.classList.add('whiteBackground');

        audioElement.src = `songs/${songIndex + 1}.mp3`;
        audioElement.play();
        gif.style.opacity = 1;
        mobileGif.style.opacity = 1;
        audioElement.currentTime = 0;

        masterPlay.classList.remove('fa-play-circle');
        masterPlay.classList.add('fa-pause-circle');


        miniPlay.classList.remove('fa-play-circle');
        miniPlay.classList.add('fa-pause-circle');

        masterSongName.innerText = songs[songIndex].songName;
        mobileMasterSongName.innerText = songs[songIndex].songName;




    })

})



// next and previous buttons related java script
document.getElementById('next').addEventListener('click', () => {
    if (songIndex >= 6) {
        songIndex = 0;
    }

    else {
        songIndex += 1;
    }



    makeAllPlays();
    makeAllBlackBackground();
    songItem[songIndex].classList.add('whiteBackground');


    audioElement.src = `songs/${songIndex + 1}.mp3`;
    audioElement.play();
    gif.style.opacity = 1;
    mobileGif.style.opacity = 1;
    audioElement.currentTime = 0;
    masterSongName.innerText = songs[songIndex].songName;
    mobileMasterSongName.innerText = songs[songIndex].songName;

    masterPlay.classList.remove('fa-play-circle');
    masterPlay.classList.add('fa-pause-circle');
    miniPlay[songIndex].classList.add('fa-pause-circle');
    miniPlay[songIndex].classList.remove('fa-play-circle');
})


document.getElementById('back').addEventListener('click', () => {
    if (songIndex <= 0) {
        songIndex = 0;
    }

    else {
        songIndex -= 1;
    }

    makeAllBlackBackground();
    makeAllPlays();
    songItem[songIndex].classList.add('whiteBackground');

    audioElement.src = `songs/${songIndex + 1}.mp3`;
    audioElement.play();
    gif.style.opacity = 1;
    mobileGif.style.opacity = 1;
    audioElement.currentTime = 0;
    masterSongName.innerText = songs[songIndex].songName;
    mobileMasterSongName.innerText = songs[songIndex].songName;

    masterPlay.classList.remove('fa-play-circle');
    masterPlay.classList.add('fa-pause-circle');
    miniPlay[songIndex].classList.add('fa-pause-circle');
    miniPlay[songIndex].classList.remove('fa-play-circle');
})




