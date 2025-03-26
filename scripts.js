const bounds = {
    minLat: 46.2,
    maxLat: 49.2,
    minLon: 9.1,
    maxLon: 17.6
};

// Map points to audio files
const audioFiles = {
    point1: './assets/D_moment.wav',
    point2: './assets/D2_Schiff.wav',
    point3: './assets/D3_Schiff.wav',
    point4: './assets/D4_Schiff.wav',
    point5: './assets/D5_Schiff.wav',
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
    const point1Coords = { lat: 47.1, lon: 15.4 };
    // Example coordinates for Linz
    const point2Coords = { lat: 48.3, lon: 14.3 };
    // Bregenz
    const point3Coords = { lat: 47.5, lon: 9.8 };
    // Innsbruck
    const point4Coords = { lat: 47.3, lon: 11.4 };
    // Wien
    const point5Coords = { lat: 48.2, lon: 16.4 };

    // Convert coordinates to pixels
    const point1Position = latLonToPixels(point1Coords.lat, point1Coords.lon, mapWidth, mapHeight);
    const point2Position = latLonToPixels(point2Coords.lat, point2Coords.lon, mapWidth, mapHeight);
    const point3Position = latLonToPixels(point3Coords.lat, point3Coords.lon, mapWidth, mapHeight);
    const point4Position = latLonToPixels(point4Coords.lat, point4Coords.lon, mapWidth, mapHeight);
    const point5Position = latLonToPixels(point5Coords.lat, point5Coords.lon, mapWidth, mapHeight);

    // Set the position of point1 (converted to pixel values)
    point1.style.top = `${point1Position.y}px`;
    point1.style.left = `${point1Position.x}px`;

    // Set the position of point2 (converted to pixel values)
    point2.style.top = `${point2Position.y}px`;
    point2.style.left = `${point2Position.x}px`;
    
    // Set the position of point3 (converted to pixel values)
    point3.style.top = `${point3Position.y}px`;
    point3.style.left = `${point3Position.x}px`;
    
    // Set the position of point4 (converted to pixel values)
    point4.style.top = `${point4Position.y}px`;
    point4.style.left = `${point4Position.x}px`;
    
    // Set the position of point5 (converted to pixel values)
    point5.style.top = `${point5Position.y}px`;
    point5.style.left = `${point5Position.x}px`;
};

const audioPlayer = document.getElementById('audio-player');

// Add click listeners to the points
document.getElementById('point1').addEventListener('click', () => playAudio('point1'));
document.getElementById('point2').addEventListener('click', () => playAudio('point2'));
document.getElementById('point3').addEventListener('click', () => playAudio('point3'));
document.getElementById('point4').addEventListener('click', () => playAudio('point4'));
document.getElementById('point5').addEventListener('click', () => playAudio('point5'));

function playAudio(pointId) {
    const audioSrc = audioFiles[pointId];
    if (audioSrc) {
        audioPlayer.src = audioSrc;
        audioPlayer.play();
    }
}
