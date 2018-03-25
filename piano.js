document.addEventListener('DOMContentLoaded', init)

var synth = new Tone.AMSynth().toMaster()

function init() {    
  document.addEventListener('keydown', keyHandler)
  document.addEventListener('keyup', stop)
}

function play(tone) {
  synth.triggerAttack(tone)
}

function stop() {
  synth.triggerRelease()
}

function keyHandler(evt) {    
  var note = getNote(evt.keyCode);
  if (note !== undefined) play(note)
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
  else if (key === 222) return 'F4';  
}