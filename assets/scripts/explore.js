// explore.js

window.addEventListener('DOMContentLoaded', init);

const api = window.speechSynthesis;

var img = document.querySelector("[alt='Smiling face']");

function init() {
  //add voices to choices
  var select = document.getElementById('voice-select');
  var voices = api.getVoices();
  for (let i = 0; i < voices.length; i++) {
    let elem = document.createElement('option');
    elem.innerText = voices[i].name;
    select.appendChild(elem);
  }
  //button
  var button = document.getElementsByTagName('button')[0];
  var text = document.getElementById('text-to-speak');
  button.addEventListener('click', (event) => {
    if (select.selectedIndex != 0) {
      var speech = new SpeechSynthesisUtterance(text.value);
      speech.voice = voices[select.selectedIndex - 1];
      api.cancel();
      api.speak(speech);
      openMouth();
    }
  });
}

function openMouth() {
  img.setAttribute('src', 'assets/images/smiling-open.png');
  setTimeout(closeMouth, 1000);
}

function closeMouth() {
  img.setAttribute('src', 'assets/images/smiling.png');
  setTimeout(() => {
    if (api.speaking) openMouth();
  }, 1000);
}