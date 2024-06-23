let currentAudio = null;

function playMyAudio(audioIndex) {
    if (currentAudio) {
        currentAudio.pause();
        currentAudio.currentTime = 0;  // Reset the audio to start
    }
    currentAudio = document.getElementById("myAudio" + audioIndex);
    currentAudio.play();
}









