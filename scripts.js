const bounds = {
    minLat: 46.2,
    maxLat: 49.2,
    minLon: 9.05,
    maxLon: 17.63
};

const audioFiles = {
    point1: "./assets/116_wavs/30501_AB_WA_116.01.wav",
    point2: "./assets/116_wavs/61032_JS_MJ_116.01_0.wav",
    point3: "./assets/116_wavs/20604_DL_MA_116.01.wav",
    point4: "./assets/116_wavs/40621_UW_MA_116.01.wav",
    point5: "./assets/116_wavs/50210_RB_WA_116.01.wav",
    point6: "./assets/116_wavs/40702_LS_MJ_116.01.wav",
    point7: "./assets/116_wavs/31405_KG_MJ_116.01_11.wav",
    point8: "./assets/116_wavs/50626_WP_WJ_116.01.wav",
    point9: "./assets/116_wavs/40605_HC_MA_116.01.wav",
    point10: "./assets/116_wavs/70516_MS_WA_116.01.wav",
    point11: "./assets/116_wavs/20619_ML_MJ_116.01.wav",
    point12: "./assets/116_wavs/80128_TS_MJ_116.01.wav",
    point13: "./assets/116_wavs/61627_ED_MA_116.01.wav",
    point14: "./assets/116_wavs/10925_EZ_WA_116.01.wav",
    point15: "./assets/116_wavs/10903_DS_MA_116.01.wav",
    point16: "./assets/116_wavs/50621_SU_WJ_116.01.wav",
    point17: "./assets/116_wavs/62135_TU_MJ_116.01.wav",
    point18: "./assets/116_wavs/80225_LI_WA_116.01.wav",
    point19: "./assets/116_wavs/80227_ME_WA_116.01.wav",
    point20: "./assets/116_wavs/20622_MO_MJ_116.01.wav",
    point21: "./assets/116_wavs/10702_AP_WA_116.01.wav",
    point22: "./assets/116_wavs/31035_PU_WA_116.01.wav",
    point23: "./assets/116_wavs/70504_BB_WJ_116.01.wav",
};

const points = [
    { id: "point1", lat: 48.0266596, lon: 14.7906625 },
    { id: "point2", lat: 46.7021679, lon: 15.4001519 },
    { id: "point3", lat: 46.7659486, lon: 13.084745156641972 },
    { id: "point4", lat: 48.4353993, lon: 14.7819491 },
    { id: "point5", lat: 47.5875291, lon: 13.4607833 },
    { id: "point6", lat: 47.6272899, lon: 13.621019584669174 },
    { id: "point7", lat: 48.0241207, lon: 15.8980956 },
    { id: "point8", lat: 47.2461482, lon: 12.2281925 },
    { id: "point9", lat: 48.4883044, lon: 14.4113247 },
    { id: "point10", lat: 47.5261836, lon: 12.05395 },
    { id: "point11", lat: 46.9545937, lon: 13.5063159 },
    { id: "point12", lat: 47.0766944, lon: 9.9028002 },
    { id: "point13", lat: 47.0223283, lon: 15.0503629 },
    { id: "point14", lat: 47.2596082, lon: 16.2331055 },
    { id: "point15", lat: 47.15869355, lon: 16.43462698425938 },
    { id: "point16", lat: 47.288177, lon: 12.5286819 },
    { id: "point17", lat: 47.5585706, lon: 15.3376224 },
    { id: "point18", lat: 47.4503224, lon: 9.920538 },
    { id: "point19", lat: 47.3499764, lon: 9.8811896 },
    { id: "point20", lat: 46.9216153, lon: 12.9130906 },
    { id: "point21", lat: 47.7432657, lon: 16.8332299 },
    { id: "point22", lat: 48.7048968, lon: 15.8609985 },
    { id: "point23", lat: 47.4901867, lon: 11.8939235 },
]

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

    points.forEach(point => {
        const pointElement = document.getElementById(point.id);
        const { x, y } = latLonToPixels(point.lat, point.lon, mapWidth, mapHeight);
        
        pointElement.style.top = `${y}px`;
        pointElement.style.left = `${x}px`;

        pointElement.addEventListener('click', () => playAudio(point.id));
    });
};

const audioPlayer = document.getElementById('audio-player');

function playAudio(pointId) {
    const audioSrc = audioFiles[pointId];
    if (audioSrc) {
        audioPlayer.src = audioSrc;
        audioPlayer.play();
    }
}