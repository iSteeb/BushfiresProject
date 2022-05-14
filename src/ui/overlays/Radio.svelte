<script>
  import { onDestroy } from 'svelte';

  import { currentState, alerts, AUDIOSETTINGS } from '../../lib/stores.js';

  let speech = new SpeechSynthesisUtterance();
  speech.lang = AUDIOSETTINGS.lang;

  let playbackEnabled = !$currentState.nonfunctionalComponents.includes(2);
  let staticAudio = new Audio('BushfiresProject/static.wav');
  staticAudio.loop = AUDIOSETTINGS.loop;
  staticAudio.volume = AUDIOSETTINGS.volume;

  function toggleAlert() {
    if (playbackEnabled && $currentState.gameState >= 0) {
      let roadBlockMessage = $currentState.roadsBlocked
        ? 'Be aware that a principle road on your evacuation route has been blocked. Do you have an alternate route to take? '
        : '';
      speech.text =
        'You are listening to your local news radio station bringing you the latest update on the bushfire. The fire is currently classed at the ' +
        alerts[$currentState.gameState].level +
        ' level. ' +
        roadBlockMessage +
        alerts[$currentState.gameState].threat +
        ' ' +
        alerts[$currentState.gameState].shortText +
        " You can also check out the latest news on the bushfire on your local fire agency's website.";

      if (window.speechSynthesis.speaking) {
        window.speechSynthesis.cancel();
      } else {
        window.speechSynthesis.speak(speech);
      }
    } else {
      if (staticAudio.paused) {
        staticAudio.play();
      } else {
        staticAudio.pause();
        staticAudio.currentTime = 0;
      }
    }
  }

  onDestroy(() => {
    staticAudio.pause();
    staticAudio.currentTime = 0;
    window.speechSynthesis.cancel();
  });
</script>

{$currentState.gameState}
<container>
  <svg
    version="1.1"
    xmlns="http://www.w3.org/2000/svg"
    xmlns:xlink="http://www.w3.org/1999/xlink"
    viewBox="0 0 1092 692">
    <image width="1092" height="692" xlink:href="BushfiresProject/radio.png" />
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
