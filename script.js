let speech = new SpeechSynthesisUtterance();

let voices = [];

let voiceSelect = document.querySelector('select');

window.speechSynthesis.onvoiceschanged = () => {
    voices = window.speechSynthesis.getVoices();
    // voiceSelect.innerHTML = voices.map(voice => `<option value="${voice.name}">${voice.name} (${voice.lang})</option>`).join('');
    speech.voice = voices[0]; // Set default voice
    voices.forEach((voice, i) => (
        voiceSelect.options[i] = new Option(voice.name, i)));
};

voiceSelect.addEventListener('change', () => {
    speech.voice = voices[voiceSelect.value]
    });

document.querySelector('button').addEventListener('click', ()=> {
    speech.text = document.querySelector('textarea').value;
    // speech.lang = document.querySelector('select').value;
    // speech.volume = document.querySelector('#volume').value;
    // speech.rate = document.querySelector('#rate').value;
    // speech.pitch = document.querySelector('#pitch').value;

    window.speechSynthesis.speak(speech);
});
