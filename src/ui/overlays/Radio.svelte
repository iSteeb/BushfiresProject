<script>
  import { currentState, alerts } from '../../lib/stores.js';
  let speech = new SpeechSynthesisUtterance();

  speech.lang = 'en-AU';
  speech.rate = 0.85;

  let state = 0; // 0 = stopped, 1 = playing, 2 = paused

  // paused, pending, speaking
  function playPauseAlert() {
    if (state != 1) {
      window.speechSynthesis.pause();
      state = 2;
    }
    speech.text = alerts[$currentState.gameState].landline;
    state = 1;
    window.speechSynthesis.speak(speech);
    if (state == 1) {
      window.speechSynthesis.pause();
      state = 2;
    }
  }

  function pauseAlert() {
    if (state == 1) {
      window.speechSynthesis.pause();
      state = 2;
    }
  }

  function cancelAlert() {
    if (state != 0) {
      window.speechSynthesis.cancel();
      state = 0;
    }
  }
</script>

<container>
  {window.speechSynthesis.speaking}
  <svg
    version="1.1"
    xmlns="http://www.w3.org/2000/svg"
    xmlns:xlink="http://www.w3.org/1999/xlink"
    viewBox="0 0 1092 692">
    <image width="1092" height="692" xlink:href="/radio.png" />
    <circle
      cx="448"
      cy="448"
      r="50"
      fill="#222"
      on:click={() => {
        playPauseAlert();
      }} />
  </svg>
</container>

<style>
  container {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }
  @media (orientation: landscape) {
    svg {
      height: 70vh;
      width: auto;
    }
  }

  @media (orientation: portrait) {
    svg {
      width: 80vw;
      height: auto;
    }
  }
</style>
