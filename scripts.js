function toggleMobileMenu(){
	document.getElementById("menu").classList.toggle("active");
}
function toggleContent(id) {
	//d
    var moreContent = document.getElementById(id);
    if (moreContent.style.display === "none") {
        moreContent.style.display = "block";
    } else {
        moreContent.style.display = "none";
    }
}
document.addEventListener('DOMContentLoaded', function () {
    const audio = document.getElementById('audio');
    const playPauseButton = document.getElementById('play-pause');
    const currentTimeSpan = document.getElementById('current-time');
    const durationSpan = document.getElementById('duration');
    const seekBar = document.getElementById('seek-bar');

    playPauseButton.addEventListener('click', function () {
        if (audio.paused) {
            audio.play();
            playPauseButton.classList.remove('play');
            playPauseButton.classList.add('pause');
        } else {
            audio.pause();
            playPauseButton.classList.remove('pause');
            playPauseButton.classList.add('play');
        }
    });

    audio.addEventListener('timeupdate', function () {
        const currentTime = audio.currentTime;
        const duration = audio.duration;

        seekBar.value = (currentTime / duration) * 100;

        const currentMinutes = Math.floor(currentTime / 60);
        const currentSeconds = Math.floor(currentTime % 60);
        const durationMinutes = Math.floor(duration / 60);
        const durationSeconds = Math.floor(duration % 60);

        currentTimeSpan.textContent = `${currentMinutes}:${currentSeconds < 10 ? '0' + currentSeconds : currentSeconds}`;
        durationSpan.textContent = `${durationMinutes}:${durationSeconds < 10 ? '0' + durationSeconds : durationSeconds}`;
    });

    seekBar.addEventListener('input', function () {
        const seekTo = audio.duration * (seekBar.value / 100);
        audio.currentTime = seekTo;
    });

    audio.addEventListener('ended', function () {
        playPauseButton.classList.remove('pause');
        playPauseButton.classList.add('play');
    });

    audio.addEventListener('loadedmetadata', function () {
        const duration = audio.duration;
        const durationMinutes = Math.floor(duration / 60);
        const durationSeconds = Math.floor(duration % 60);
        durationSpan.textContent = `${durationMinutes}:${durationSeconds < 10 ? '0' + durationSeconds : durationSeconds}`;
    });
});


