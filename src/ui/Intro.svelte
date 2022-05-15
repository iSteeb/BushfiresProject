<script>
  import { currentState } from '../lib/stores.js';
  import { fade } from 'svelte/transition';
  import OutClick from 'svelte-outclick';
  import Info from '../ui/overlays/Info.svelte';

  let showInstructions = true;
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
      <Info />
    </OutClick>
  {/if}
</container>

<style>
  container {
    z-index: -1;
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
