document.addEventListener('contextmenu', (e) => e.preventDefault());

function ctrlShiftKey(e, keyCode) {
  return e.ctrlKey && e.shiftKey && e.keyCode === keyCode.charCodeAt(0);
}

document.onkeydown = (e) => {
  if (
    e.keyCode === 123 ||
    ctrlShiftKey(e, 'I') ||
    ctrlShiftKey(e, 'J') ||
    ctrlShiftKey(e, 'C') ||
    (e.ctrlKey && e.keyCode === 'U'.charCodeAt(0))
  ) {
    e.preventDefault();
    return false;
  }
};

document.addEventListener('DOMContentLoaded', function () {
  var video = document.querySelector('video');
  video.addEventListener('loadedmetadata', function () {
    video.play();
    video.requestFullscreen();
  });
});

