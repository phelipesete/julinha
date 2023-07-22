const player = document.getElementById('player');
const jumpHeight = 200;
const jumpDuration = 1000; // in milliseconds

function jump() {
  player.style.transition = `bottom ${jumpDuration}ms ease-out`;
  player.style.bottom = `${jumpHeight}px`;
  setTimeout(() => {
    player.style.transition = `bottom ${jumpDuration}ms ease-in`;
    player.style.bottom = '0';
  }, jumpDuration);
}

document.addEventListener('keydown', (event) => {
  if (event.code === 'Space') {
    jump();
  }
});
