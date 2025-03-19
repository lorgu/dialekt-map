// Map points to audio files
const audioFiles = {
    point1: './assets/D_moment.wav',
    point2: './assets/D2_Schiff.wav'
};

const audioPlayer = document.getElementById('audio-player');

// Add click listeners to the points
document.getElementById('point1').addEventListener('click', () => playAudio('point1'));
document.getElementById('point2').addEventListener('click', () => playAudio('point2'));

function playAudio(pointId) {
    const audioSrc = audioFiles[pointId];
    if (audioSrc) {
        audioPlayer.src = audioSrc;
        audioPlayer.play();
    }
}
