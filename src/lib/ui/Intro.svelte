<script>
  import { currentState } from '../helpers/stores.js';
  import { fade } from 'svelte/transition';
  import { clickOutside } from '../helpers/click_outside.js';

  let showInstructions = true;
</script>

<!-- TODO: Instructions page/popup -->

<div id="container" transition:fade={{ delay: 500, duration: 3000 }}>
  <div id="slidingBackground" />
  <div id="slidingMidground" />
  <div id="slidingForeground" />
  <div id="car" />
  {#if showInstructions}
    <div
      id="instructions"
      use:clickOutside
      on:outclick={() => {
        showInstructions = false;
        window.setTimeout(() => {
          $currentState.appState = 2;
        }, 2500);
      }}>
      info
    </div>
  {/if}
</div>

<style>
  #instructions {
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
  }
  #car {
    position: absolute;
    height: 100vh;
    width: 100vw;
    background: url('/introAssets/car.png');
    background-size: auto 100vh;
    background-position: 50%;
  }

  #slidingBackground {
    position: absolute;
    height: 100vh;
    width: 600vw;
    background: url('/introAssets/background.png') repeat-x;
    animation: slide 30s linear infinite;
    background-size: auto 100vh;
  }
  #slidingMidground {
    position: absolute;
    height: 100vh;
    width: 600vw;
    background: url('/introAssets/midground.png') repeat-x;
    animation: slide 20s linear infinite;
    background-size: auto 100vh;
  }

  #slidingForeground {
    position: absolute;
    height: 100vh;
    width: 600vw;
    background: url('/introAssets/foreground.png') repeat-x;
    animation: slide 7s linear infinite;
    background-size: auto 100vh;
  }

  @keyframes slide {
    0% {
      transform: translate3d(-100vw, 0, 0);
    }
    100% {
      transform: translate3d(0, 0, 0);
    }
  }
</style>
