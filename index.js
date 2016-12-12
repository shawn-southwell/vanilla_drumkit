/*
65, 83, 68, 70, 74, 75, 76, 186
*/

const soundz = {
  65: 'sounds/boom.wav',
  83: 'sounds/clap.wav',
  68: 'sounds/hihat.wav',
  70: 'sounds/kick.wav',
  74: 'sounds/openhat.wav',
  75: 'sounds/ride.wav',
  76: 'sounds/snare.wav',
  186: 'sounds/tink.wav',
  32: 'sounds/tom.wav'
}
function playSound(el,file){
  el.classList.add('playing');
  const audio = new Audio(file);
  audio.play();
}

document.addEventListener('keydown', (e) => {
  const file = soundz[String(e.which)];
  if (!file) return;
  const el = document.querySelector(`[data-sound="${file}"]`);
  playSound(el,file);
  setTimeout(() => el.classList.remove('playing') , 50);
});
