const bounds = {
    minLat: 46.2,
    maxLat: 49.2,
    minLon: 9.1,
    maxLon: 17.3
};

// Map points to audio files
const audioFiles = {
    point1: './assets/D_moment.wav',
    point2: './assets/D2_Schiff.wav'
};

// Function to convert latitude and longitude to pixel coordinates
function latLonToPixels(lat, lon, mapWidth, mapHeight) {
    const latRatio = (lat - bounds.minLat) / (bounds.maxLat - bounds.minLat);
    const lonRatio = (lon - bounds.minLon) / (bounds.maxLon - bounds.minLon);
    
    const x = lonRatio * mapWidth;  // Horizontal position (left)
    const y = (1 - latRatio) * mapHeight;  // Vertical position (top), 1 - latRatio because y=0 is top of the map

    return { x, y };
}

window.onload = function() {
    // Get the points by their IDs
    var point1 = document.getElementById('point1');
    var point2 = document.getElementById('point2');
    
    // Get the map dimensions (use actual map image size)
    const mapImage = document.querySelector('.map');
    const mapWidth = mapImage.width;
    const mapHeight = mapImage.height;

    // Coordinates for the points (latitude, longitude)
    // Example coordinates for Graz
    const point1Coords = { lat: 47.1, lon: 15.4 };  // Example coordinates for point1
    // Example coordinates for Linz
    const point2Coords = { lat: 48.3, lon: 14.3 };  // Example coordinates

    // Convert coordinates to pixels
    const point1Position = latLonToPixels(point1Coords.lat, point1Coords.lon, mapWidth, mapHeight);
    const point2Position = latLonToPixels(point2Coords.lat, point2Coords.lon, mapWidth, mapHeight);

    // Set the position of point1 (converted to pixel values)
    point1.style.top = `${point1Position.y}px`;
    point1.style.left = `${point1Position.x}px`;

    // Set the position of point2 (converted to pixel values)
    point2.style.top = `${point2Position.y}px`;
    point2.style.left = `${point2Position.x}px`;
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
