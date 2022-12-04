import Player from '@vimeo/player';
import throttle from 'lodash.throttle';
const iframe = document.querySelector('iframe');

const player = new Player(iframe, {
    id: 'vimeo-player',
    width: 640
});


player.on('timeupdate', throttle(event => localStorage.setItem('videoplayer-current-time', JSON.stringify(event.seconds)), 1000));

const savedSeconds = localStorage.getItem('videoplayer-current-time')

player.setCurrentTime(savedSeconds);


