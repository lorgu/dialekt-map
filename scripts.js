function latLonToPixel(lat, lon, mapWidth, mapHeight, bounds) {
    const { minLat, maxLat, minLon, maxLon } = bounds;

    // Scale longitude to x position
    const x = ((lon - minLon) / (maxLon - minLon)) * mapWidth;
    
    // Scale latitude to y position (invert because y = 0 is at the top)
    const y = ((maxLat - lat) / (maxLat - minLat)) * mapHeight;

    return { x, y };
}

const bounds = {
    minLat: 46.383,
    maxLat: 48.583,
    minLon: 9.533,
    maxLon: 17.183
};

const map = document.querySelector('.map');
const mapWidth = map.clientWidth;
const mapHeight = map.clientHeight;

// Define coordinates for the points
const pointsData = [
    { id: 'point1', lat: 47.0707, lon: 15.4395, audio: './assets/D_moment.wav' },
    { id: 'point2', lat: 47.0207, lon: 15.3295, audio: './assets/D2_Schiff.wav' }
];

// Create points dynamically
pointsData.forEach(pointData => {
    const { lat, lon, id, audio } = pointData;
    const { x, y } = latLonToPixel(lat, lon, mapWidth, mapHeight, bounds);

    // Create a point element
    const point = document.createElement('div');
    point.className = 'point';
    point.id = id;
    point.style.left = `${x}px`;
    point.style.top = `${y}px`;

    // Append to the map container
    document.querySelector('.map-container').appendChild(point);

    // Add click listener to play the audio
    point.addEventListener('click', () => playAudio(audio));
});

const audioPlayer = document.getElementById('audio-player');

function playAudio(audioSrc) {
    audioPlayer.src = audioSrc;
    audioPlayer.play();
}
