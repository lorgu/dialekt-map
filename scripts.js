const bounds = {
    minLat: 46.2,
    maxLat: 49.2,
    minLon: 9.05,
    maxLon: 17.63
};

// Map points to audio files
const audioFiles = {
    point1: './assets/D_moment.wav',
    point2: './assets/D2_Schiff.wav',
    point3: './assets/D2_Schiff.wav',
    point4: './assets/D2_Schiff.wav',
    point5: './assets/D2_Schiff.wav',
};

// Function to convert latitude and longitude to pixel coordinates
function latLonToPixels(lat, lon, mapWidth, mapHeight) {
    const latRatio = (lat - bounds.minLat) / (bounds.maxLat - bounds.minLat);
    const lonRatio = (lon - bounds.minLon) / (bounds.maxLon - bounds.minLon);

    const x = lonRatio * mapWidth;  // Horizontal position (left)
    const y = (1 - latRatio) * mapHeight;  // Vertical position (top)

    return { x, y };
}

window.onload = function() {
    const mapImage = document.querySelector('.map');
    const mapWidth = mapImage.width;
    const mapHeight = mapImage.height;

    // Array of point coordinates and corresponding IDs
    const points = [
        { id: 'point1', lat: 47.0707, lon: 15.4395 }, // Graz
        { id: 'point2', lat: 48.3064, lon: 14.2861 }, // Linz
        { id: 'point3', lat: 47.5039, lon: 9.7473 },  // Bregenz
        { id: 'point4', lat: 47.2680, lon: 11.3923 }, // Innsbruck
        { id: 'point5', lat: 48.2082, lon: 16.3738 }  // Wien
    ];

    // Loop through the points to set their position and event listener
    points.forEach(point => {
        const pointElement = document.getElementById(point.id);
        const { x, y } = latLonToPixels(point.lat, point.lon, mapWidth, mapHeight);
        
        // Set the position of the point
        pointElement.style.top = `${y}px`;
        pointElement.style.left = `${x}px`;

        // Add click listener for audio playback
        pointElement.addEventListener('click', () => playAudio(point.id));
    });
};

const audioPlayer = document.getElementById('audio-player');

// Play audio when a point is clicked
function playAudio(pointId) {
    const audioSrc = audioFiles[pointId];
    if (audioSrc) {
        audioPlayer.src = audioSrc;
        audioPlayer.play();
    }
}
