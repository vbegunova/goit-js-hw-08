import Player from '@vimeo/player';
import throttle from 'lodash.throttle';

const iframe = document.querySelector('iframe');
const player = new Player(iframe);

const TIME_PAUSE = 'videoplayer-current-time';
let dataTime = JSON.parse(localStorage.getItem(TIME_PAUSE)) ?? 0;
player.setCurrentTime(dataTime);

player.on(
  'timeupdate',
  throttle(data => {
    localStorage.setItem(TIME_PAUSE, data.seconds);
  }, 1000)
);
