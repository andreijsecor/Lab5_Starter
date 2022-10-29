// expose.js

window.addEventListener('DOMContentLoaded', init);

var confetti = new JSConfetti();

function init() {
  //volume icon
  var vol = document.querySelector("[alt='Volume level 2");
  //slider
  var slider = document.getElementsByTagName('input')[0];
  slider.addEventListener('input', (event) => {
    audio.volume = event.target.value/100.0;
    if (audio.volume > 0.66) {
      vol.setAttribute('src', 'assets/icons/volume-level-3.svg');
    } else if (audio.volume > 0.33) {
      vol.setAttribute('src', 'assets/icons/volume-level-2.svg');
    } else if (audio.volume > 0.0) {
      vol.setAttribute('src', 'assets/icons/volume-level-1.svg');
    } else {
      vol.setAttribute('src', 'assets/icons/volume-level-0.svg');
    }
  });
  //image
  var img = document.querySelector("[alt='No image selected']");
  //selector
  var select = document.getElementById('horn-select');
  //audio element
  var audio = document.getElementsByTagName('audio')[0];
  audio.removeAttribute('src');
  audio.volume = 0.5;
  //selector event listener
  select.addEventListener('change', (event) => {
    switch (event.target.options[event.target.selectedIndex].innerText) {
      case 'Air Horn':
        img.setAttribute('src', 'assets/images/air-horn.svg');
        audio.setAttribute('src', 'assets/audio/air-horn.mp3');
        break;
      case 'Car Horn':
        img.setAttribute('src', 'assets/images/car-horn.svg');
        audio.setAttribute('src', 'assets/audio/car-horn.mp3');
        break;
      case 'Party Horn':
        img.setAttribute('src', 'assets/images/party-horn.svg');
        audio.setAttribute('src', 'assets/audio/party-horn.mp3');
        break;
      default:
        img.setAttribute('src', 'assets/images/no-image.png');
        audio.removeAttribute('src');
    }
  });
  //button
  var button = document.getElementsByTagName('button')[0];
  button.addEventListener('click', (event) => {
    if (audio.hasAttribute('src')) {
      audio.play();
    }
    if (select.options[select.selectedIndex].innerText == 'Party Horn') {
      confetti.addConfetti();
    }
  });
}