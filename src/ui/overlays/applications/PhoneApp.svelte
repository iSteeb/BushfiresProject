<script>
  import { onDestroy } from 'svelte';
  import { currentState, alerts } from '../../../lib/stores.js';

  export let alertIndexes = [];
  let alertIndex = alertIndexes[0];

  let speech = new SpeechSynthesisUtterance();
  speech.lang = 'en-AU';

  let playbackEnabled = !$currentState.nonfunctionalComponents.includes(3);
  let toneAudio = new Audio('BushfiresProject/tone.mp3');
  toneAudio.loop = true;
  toneAudio.volume = 0.25;

  function toggleAlert() {
    if (playbackEnabled && alertIndex >= 0) {
      let roadBlockMessage = $currentState.roadsBlocked
        ? 'Be aware that a principle road on your evacuation route has been blocked. Do you have an alternate route to take? '
        : '';
      speech.text =
        'Thank you for calling your local fire agency. The latest update on the bushfire is as follows: The fire is currently classed at the ' +
        alerts[alertIndex].level +
        ' level. ' +
        roadBlockMessage +
        alerts[alertIndex].threat +
        alerts[alertIndex].shortText +
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
  <button
    on:click={() => {
      toggleAlert();
    }}>call</button>
</container>

<style>
  container {
    height: 100%;
    width: 100%;
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
