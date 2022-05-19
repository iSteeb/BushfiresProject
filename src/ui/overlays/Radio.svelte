<script>
  import { onDestroy } from 'svelte';

  import { currentState, alerts, AUDIOSETTINGS } from '../../lib/stores.js';

  let powerState = 'off';

  let speech = new SpeechSynthesisUtterance();
  // default values stored in stores.js
  speech.lang = AUDIOSETTINGS.lang;

  let playbackEnabled = !$currentState.nonfunctionalComponents.includes(2);
  let staticAudio = new Audio('BushfiresProject/static.wav');
  staticAudio.loop = AUDIOSETTINGS.loop;
  staticAudio.volume = AUDIOSETTINGS.volume;

  // component logic for the activation (button press)
  // pause if playing, play if paused; also considering component may be considered non-functional by the game, thus falling back to a dial tone.
  // this section also forms the basis of the message to convey through the speech synthesis, taking from template strings and the game state for the alert data.
  function toggleAlert() {
    powerState = powerState == 'off' ? 'on' : 'off';

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
  // ensure that playback stops when the component is exited
  onDestroy(() => {
    staticAudio.pause();
    staticAudio.currentTime = 0;
    window.speechSynthesis.cancel();
  });
</script>

<!-- set the correct button state based on whether content is playing or not - content will always be playable, whether it is an error dial tone, or an alert -->
<container>
  <svg
    version="1.1"
    xmlns="http://www.w3.org/2000/svg"
    xmlns:xlink="http://www.w3.org/1999/xlink"
    viewBox="0 0 1092 692">
    <image width="1092" height="692" xlink:href="BushfiresProject/radio.png" />
    <g
      on:click={() => {
        toggleAlert();
      }}
      transform="translate(835,385) scale(2)">
      <defs>
        <style>
          .b {
            stroke-width: 5px;
          }
          .b,
          .c {
            fill: transparent;
            stroke: #424242;
            stroke-miterlimit: 10;
          }
          .c {
            stroke-width: 3px;
          }
          text {
            fill: #424242;
          }
        </style>
      </defs>
      <path
        class="b"
        d="M43.34091,10.64885c6.58962,4.68791,10.88801,12.38692,10.88801,21.08988,0,14.28455-11.57991,25.86446-25.86446,25.86446S2.5,46.02327,2.5,31.73873c0-8.70298,4.29842-16.40201,10.88806-21.08991" /><rect
        class="c"
        x="27.37139"
        y="1.5"
        width="1.98613"
        height="30.47745" />
      <text x="29" y="47" text-anchor="middle" color="#aaaaaa">
        {powerState}
      </text>
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
      height: 50vh;
      width: auto;
    }
  }

  @media (orientation: portrait) {
    svg {
      width: 50vw;
      height: auto;
    }
  }
</style>
