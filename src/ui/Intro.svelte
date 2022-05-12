<script>
  import { currentState } from '../lib/stores.js';
  import { fade } from 'svelte/transition';
  import OutClick from 'svelte-outclick';

  let showInstructions = true;

  // disable scrolling because overflow: hidden doesn't work
  window.onscroll = () => {
    window.scrollTo(0, 0);
  };
</script>

<container transition:fade={{ delay: 500, duration: 1500 }}>
  <slidingBackground />
  <slidingMidground />
  {#if !showInstructions}
    <sign />
  {/if}
  <slidingForeground />
  <car />
  {#if showInstructions}
    <OutClick
      on:outclick={() => {
        showInstructions = false;
        window.setTimeout(() => {
          $currentState.appState = 2;
        }, 3000);
      }}>
      <!-- TODO: prompt the user to think of the route in intro info also inform users that stuff may break (phones etc) as the fire gets worse, but may also come back online as it gets better -->

      <instructions>info</instructions>
    </OutClick>
  {/if}
</container>

<style>
  container {
    z-index: -1;
  }
  instructions {
    font-size: 50px;
    font-weight: bold;
    text-align: center;
    color: #fff;
    background: #000;
    padding: 20px;
    border-radius: 10px;
    box-shadow: 0 0 10px #000;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    z-index: 1000;
  }
  car {
    position: absolute;
    height: 100vh;
    width: 100vw;
    background: url('/BushfiresProject/introAssets/car.png');
    background-size: auto 100vh;
    background-position: 50%;
  }

  sign {
    position: absolute;
    height: 100vh;
    width: calc(16 / 9 * 3 * 100vh);
    background: url('/BushfiresProject/introAssets/sign.png') repeat-x;
    background-size: auto 100vh;
    animation: signslide 30s linear infinite;
  }

  slidingBackground {
    position: absolute;
    height: 100vh;
    width: calc(16 / 9 * 3 * 100vh);
    background: url('/BushfiresProject/introAssets/background.png');
    background-size: auto 100vh;
    animation: slide 30s linear infinite;
  }

  slidingMidground {
    position: absolute;
    height: 100vh;
    width: calc(16 / 9 * 3 * 100vh);
    background: url('/BushfiresProject/introAssets/midground.png') repeat-x;
    background-size: auto 100vh;
    animation: slide 10s linear infinite;
  }

  slidingForeground {
    position: absolute;
    height: 100vh;
    width: calc(16 / 9 * 3 * 100vh);
    background: url('/BushfiresProject/introAssets/foreground.png') repeat-x;
    background-size: auto 100vh;
    animation: slide 5s linear infinite;
  }

  @keyframes slide {
    0% {
      transform: translate3d(calc(16 / 9 * -100vh), 0, 0);
    }
    100% {
      transform: translate3d(0, 0, 0);
    }
  }
  @keyframes signslide {
    0% {
      transform: translate3d(calc(16 / 9 * 3 * -100vh), 0, 0);
    }
    100% {
      transform: translate3d(0, 0, 0);
    }
  }
</style>
