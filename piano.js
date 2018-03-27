document.addEventListener('DOMContentLoaded', init);

var synth = new Tone.AMSynth().toMaster();

function init() {   
  var keys = document.getElementsByClassName('key');
  for (var i=0; i <keys.length; i++) {
    keys[i].addEventListener('mousedown', mouseHandler)
  } 
  document.addEventListener('keydown', keyHandler);
  document.addEventListener('keyup', stop); 
  document.addEventListener('mouseup', stop); 
}

function play(tone) {
  synth.triggerAttack(tone);
}

function stop() {
  synth.triggerRelease();
  unSelectKeys();
}

function keyHandler(evt) {    
  var note = getNote(evt.keyCode);
  if (note !== undefined) { 
    play(note);
    selectKey(note);
  }
}

function mouseHandler(evt) {    
  var note = evt.target.id;
  play(note);
  selectKey(note);

}

function getNote (key){
  if (key === 65) return 'C3';
  else if (key === 87) return 'C#3';
  else if (key === 83) return 'D3';
  else if (key === 69) return 'D#3';
  else if (key === 68) return 'E3';
  else if (key === 70) return 'F3';
  else if (key === 84) return 'F#3';
  else if (key === 71) return 'G3';
  else if (key === 89) return 'G#3';
  else if (key === 72) return 'A4';
  else if (key === 85) return 'A#4';
  else if (key === 74) return 'B4';
  else if (key === 75) return 'C4';
  else if (key === 79) return 'C#4';
  else if (key === 76) return 'D4';
  else if (key === 80) return 'D#4';
  else if (key === 186) return 'E4';   
}

function selectKey(key) {
  var selectedKey = document.getElementById(key);
  selectedKey.classList.add('selected');
}

function unSelectKeys () {
  var keys = document.getElementsByClassName('selected');
  for (var i=0; i < keys.length; i++) {
    keys[i].classList.remove('selected');
  }
}