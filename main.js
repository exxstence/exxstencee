// Song data
const songList = [
    {
        title: "Мегатастрофи",
        file: "mega.mp3",
    },
    {
        title: "Adrenaline",
        file: "adrenalin.mp3",
    },
    {
        title: "Cyborg Man",
        file: "cyborg.mp3",
    }
]

let actualSong = null

const songs = document.getElementById("songs")
const audio = document.getElementById("audio")
const cover = document.getElementById("cover")
const title = document.getElementById("title")
const play = document.getElementById("play")
const progress = document.getElementById("progress")
const progressContainer = document.getElementById("progress-container")
progressContainer.addEventListener("click", setProgress)

audio.addEventListener("timeupdate", updateProgress)

play.addEventListener("click", () => {
    if (audio.paused) { 
        playSong()   
    } else {
        pauseSong()
    }
})

function renderGradientBackground() {
	alert("asdasdasd")
	body.style.backgroundImage = `linear-gradient(to bottom, #000000, ${getGradientColor('#FF0000', '#00FF00', 0.4)})`;
}

document.body.addEventListener("input", renderGradientBackground);


function loadSongs() {
    songList.forEach((song, index) => {
        // Create li
        const li = document.createElement("li")
        // Create a
        const link = document.createElement("a")
        link.textContent = song.title
        link.href = "#"
        link.addEventListener("click", () => loadSong(index))
        // append a li
        li.appendChild(link)
        // append li a ul
        songs.appendChild(li)
    })
}

function loadSong(songIndex) {
    if (songIndex !== actualSong) {
        changeActiveClass(actualSong, songIndex)
        actualSong = songIndex
        audio.src = "./assets/" + songList[songIndex].file
        playSong()
        changeSongtitle(songIndex)
        changeCover(songIndex)
    }
}

function updateProgress(event) {
    const {duration, currentTime} = event.srcElement
    const percent = (currentTime / duration) * 100
    progress.style.width = percent + "%" 
}

function setProgress(event) {
    const totalWidth = this.offsetWidth
    const progressWidth = event.offsetX
    const current = (progressWidth / totalWidth) * audio.duration
    audio.currentTime = current
}

function updateControls() {
    if (audio.paused) {
        play.classList.remove("fa-pause")
        play.classList.add("fa-play")
    } else {
        play.classList.add("fa-pause")
        play.classList.remove("fa-play")
    }
}

function playSong() {
    if (actualSong !== null) {
        audio.play()
        updateControls()
    }
}


function pauseSong() {
    audio.pause()
    updateControls()
}


function changeActiveClass(lastIndex, newIndex) {
    const links = document.querySelectorAll("a")
    if (lastIndex !== null) {
        links[lastIndex].classList.remove("active")
    }
    links[newIndex].classList.add("active")
}


function changeCover(songIndex) {
    cover.src = "./img/" + songList[songIndex].cover
}


function changeSongtitle(songIndex) {
     title.innerText = songList[songIndex].title
}


function prevSong() {
    if (actualSong > 0) {
        loadSong(actualSong - 1)
    } else {
        loadSong(songList.length - 1)
    }
}


function nextSong() {
    if (actualSong < songList.length -1) {
        loadSong(actualSong + 1)
    } else {
        loadSong(0)
    }
}


audio.addEventListener("ended", () => nextSong())

// GO!
loadSongs()