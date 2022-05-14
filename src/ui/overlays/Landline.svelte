<script>
  import { onDestroy, onMount } from 'svelte';
  import { currentState, alerts, AUDIOSETTINGS } from '../../lib/stores.js';

  let speech = new SpeechSynthesisUtterance();
  speech.lang = AUDIOSETTINGS.lang;

  let playbackEnabled = !$currentState.nonfunctionalComponents.includes(4);
  let toneAudio = new Audio('BushfiresProject/tone.mp3');
  toneAudio.loop = AUDIOSETTINGS.loop;
  toneAudio.volume = AUDIOSETTINGS.volume;
  // <!-- todo: fix the -1 -->
  function toggleAlert() {
    if (playbackEnabled && $currentState.gameState >= 0) {
      let roadBlockMessage = $currentState.roadsBlocked
        ? 'Be aware that a principle road on your evacuation route has been blocked. Do you have an alternate route to take? '
        : '';
      speech.text =
        'Thank you for calling your local fire agency. The latest update on the bushfire is as follows: The fire is currently classed at the ' +
        alerts[$currentState.gameState].level +
        ' level. ' +
        roadBlockMessage +
        alerts[$currentState.gameState].threat +
        alerts[$currentState.gameState].shortText +
        " You can also check out the latest news on the bushfire on your local fire agency's website.";
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
      }}
      class={$currentState.glow} />
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
