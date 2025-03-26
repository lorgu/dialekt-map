// Map points to audio files
const audioFiles = {
    point1: './assets/D_moment.wav',
    point2: './assets/D2_Schiff.wav'
};

window.onload = function() {
    // Get the points by their IDs
    var point1 = document.getElementById('point1');
    var point2 = document.getElementById('point2');

    // Set the position of point1 (top: 48%, left: 55%)
    point1.style.top = '48%';
    point1.style.left = '55%';

    // Set the position of point2 (top: 60%, left: 30%)
    point2.style.top = '60%';
    point2.style.left = '30%';
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
