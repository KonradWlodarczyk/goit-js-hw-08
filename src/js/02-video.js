const throttle = require(`lodash.throttle`);
import Player from "@vimeo/player";

const iframe = document.querySelector('#vimeo-player');
const iframePlayer = new Player(iframe);

iframePlayer.setCurrentTime(startPlay);

const startPlay = parseFloat(localStorage.getItem(`videoplayer-current-time`)) || 0;

iframePlayer.on(`timeupdate`, throttle(secondsPlay, 1000));

function secondsPlay(data) {
    localStorage.setItem(`videoplayer-current-time`, data.seconds);
    console.log(`Time update: ` + localStorage.getItem(`videoplayer-current-time`));
}