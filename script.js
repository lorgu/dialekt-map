// Initialize map at the center of Austria
const map = L.map('map').setView([47.5162, 14.5501], 7);

// Add OpenStreetMap tiles
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png').addTo(map);

// Add marker with an audio link
const marker = L.marker([47.0707, 15.4395]).addTo(map);
marker.bindPopup(`
    <strong>Graz Dialekt</strong><br>
    <audio controls>
        <source src="https://drive.google.com/uc?export=download&id=YOUR_GOOGLE_DRIVE_FILE_ID" type="audio/mpeg">
        Your browser does not support the audio element.
    </audio>
`);
