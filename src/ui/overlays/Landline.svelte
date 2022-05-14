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
    <g
      on:click={() => {
        toggleAlert();
      }}
      transform="translate(271,443) scale(6.40)"
      class={$currentState.glow}>
      <path
        class="b"
        d="M9.58,2.02l8.38,8.35c.12,.22,.32,.64,.36,1.2,.03,.5-.08,.89-.16,1.12l-3.67,3.57c-.28,.32-.58,.75-.8,1.32-.7,1.8,.04,3.5,.25,3.93,.31,.84,.81,2,1.6,3.26,1,1.6,1.98,2.6,3.38,4,1.54,1.54,2.68,2.68,4.52,3.77,1.37,.81,2.61,1.28,3.46,1.55,.45,.11,1.26,.25,2.25,.07,1.03-.19,1.77-.64,2.15-.91l3.62-3.62c.17-.12,.51-.3,.96-.35,.78-.08,1.35,.3,1.51,.41l8.26,8.46c.11,.16,.4,.63,.39,1.28,0,.61-.25,1.04-.37,1.21l-3.58,3.61-1.43,1.14c-.72,.52-1.9,1.26-3.5,1.74-2.71,.82-5.02,.43-6.78,.12-1.17-.2-2.87-.6-4.82-1.46-.9-.34-2.01-.8-3.24-1.44-.4-.21-1.73-.91-3.4-2.05,0,0-1.65-1.13-3.36-2.63-3.94-3.44-9.56-10.16-9.88-10.55-.34-.51-.82-1.25-1.37-2.17-.92-1.53-1.82-3.13-2.24-4-.61-1.24-1.64-3.8-2-8.06-.08-.78-.1-1.76,.07-2.89,.29-1.89,.99-3.34,1.52-4.23l1.9-2.36,3.45-3.39c.18-.12,.63-.38,1.27-.39,.66,0,1.14,.27,1.31,.39Z" /><path
        class="b"
        d="M24.28,11.94c1.37,.34,4.61,1.35,7.41,4.33,2.23,2.36,3.15,4.88,3.53,6.22,.22,.9-.3,1.8-1.1,2.04-.69,.21-1.49-.09-1.9-.76-.36-1.17-1.3-3.67-3.69-5.87-1.98-1.82-4.06-2.6-5.21-2.94-.5-.42-.74-1.07-.61-1.69,.16-.72,.79-1.27,1.56-1.33Z" /><path
        class="b"
        d="M25.89,9.21c-.57-.42-.83-1.12-.68-1.76,.19-.77,.94-1.32,1.79-1.27,1.78,.52,5.35,1.84,8.68,5.1,3.32,3.26,4.71,6.8,5.27,8.56,.35,.9-.13,1.91-.98,2.19-.78,.26-1.68-.14-2.03-.95-.45-1.52-1.65-4.81-4.73-7.73-2.8-2.66-5.79-3.71-7.31-4.14Z" /><path
        class="b"
        d="M28.09,3c-.72-.34-1.09-1.12-.92-1.82,.2-.82,1.12-1.37,2.03-1.12,2.34,.69,7.24,2.47,11.69,7.02,4.19,4.28,5.9,8.87,6.59,11.2,.22,.89-.32,1.8-1.18,2.01-.8,.2-1.67-.25-1.96-1.07-.63-2.08-2.23-6.33-6.18-10.24-3.86-3.81-8.01-5.36-10.09-5.99Z" />
    </g>
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
