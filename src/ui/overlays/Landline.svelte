<script>
  import { onDestroy, onMount } from 'svelte';
  import { currentState, alerts } from '../../lib/stores.js';

  let speech = new SpeechSynthesisUtterance();
  speech.lang = 'en-AU';
  speech.rate = 0.85;

  let playbackEnabled = !$currentState.nonfunctionalComponents.includes(4);
  let toneAudio = new Audio('BushfiresProject/tone.mp3');
  toneAudio.loop = true;
  toneAudio.volume = 0.25;

  function toggleAlert() {
    if (playbackEnabled) {
      speech.text = alerts[$currentState.gameState].landline;

      if (window.speechSynthesis.speaking) {
        window.speechSynthesis.cancel();
      } else {
        window.speechSynthesis.speak(speech);
      }
    } else {
      if (toneAudio.paused) {
        toneAudio.play();
      } else {
        toneAudio.pause();
        toneAudio.currentTime = 0;
      }
    }
  }
  onDestroy(() => {
    toneAudio.pause();
    toneAudio.currentTime = 0;
    window.speechSynthesis.cancel();
  });
</script>

<container>
  <svg
    version="1.1"
    xmlns="http://www.w3.org/2000/svg"
    xmlns:xlink="http://www.w3.org/1999/xlink"
    viewBox="0 0 848 896">
    <image
      width="848"
      height="896"
      xlink:href="BushfiresProject/landline.png" />
    <circle
      cx="448"
      cy="448"
      r="50"
      fill="#222"
      on:click={() => {
        toggleAlert();
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
