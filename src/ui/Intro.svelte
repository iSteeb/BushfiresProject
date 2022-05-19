<script>
  import { currentState } from '../lib/stores.js';
  import { fade } from 'svelte/transition';
  // this may appear as a problem ('cannot find module svelte-outclick') however, the imported component is completely functional and does import correctly
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
    <!-- the OutClick wrapper around a component means any clicks (mousedown or touchstart events) outside of that component trigger an action-->
    <!-- this sets a 3 second timeout to allow the viewer to view the sign transition before progressing to the next screen -->
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
  /* the intro screen animation is entirely CSS, with responsive calculations to ensure the correct dimensions and aspect ratio are maintained  */
  /* a very wide looping background is set, and then scrolled infinitely to create the animation */
  /* to create a parallax effect, layers of the background have been split to animate at different rates */
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
