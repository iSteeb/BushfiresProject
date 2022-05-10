<script>
  import { currentState, alerts } from '../../lib/stores.js';
  let speech = new SpeechSynthesisUtterance();

  speech.lang = 'en-AU';
  speech.rate = 0.75;

  function playAlert() {
    speech.text = alerts[$currentState.gameState].landline;
    // TODO: paused = resume or restart, depending on state
    window.speechSynthesis.speak(speech);
  }
</script>

<container>
  <svg
    version="1.1"
    xmlns="http://www.w3.org/2000/svg"
    xmlns:xlink="http://www.w3.org/1999/xlink"
    viewBox="0 0 848 896">
    <image width="848" height="896" xlink:href="/landline.png" />
    <circle
      cx="448"
      cy="448"
      r="50"
      fill="#222"
      on:click={() => {
        playAlert();
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
