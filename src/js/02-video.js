import Player from '@vimeo/player';
import throttle from 'lodash.throttle';

const iframe = document.querySelector('#vimeo-player');
const player = new Player(iframe);

const onTimeUpDate = e => localStorage.setItem('videoplayer-current-time', e.seconds);

player.on('timeupdate', throttle(onTimeUpDate, 1000));

const timeInLocalStorage = localStorage.getItem('videoplayer-current-time');

player
  .setCurrentTime(timeInLocalStorage)
  .then(function (timeInLocalStorage) {})
  .catch(error => {
    switch (error.name) {
      case 'RangeError':
        console.log('The time was less than 0 or greater than the video’s duration');
        break;

      default:
        console.log('Some other error occurred');
        break;
    }
  });
