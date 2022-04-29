<script>
  import { currentState } from '../helpers/stores.js';
  import { fade } from 'svelte/transition';
  import OutClick from 'svelte-outclick';

  let showInstructions = true;
</script>

<!-- TODO: Show a countdown -->
<div class="container" transition:fade={{ delay: 500, duration: 3000 }}>
  <div id="slidingBackground" />
  <div id="slidingMidground" />
  {#if !showInstructions}
    <div id="sign" />
  {/if}
  <div id="slidingForeground" />
  <div id="car" />
  {#if showInstructions}
    <OutClick
      on:outclick={() => {
        showInstructions = false;
        window.setTimeout(() => {
          $currentState.appState = 2;
        }, 3000);
      }}>
      <div id="container">Landline</div>
    </OutClick>
    <div id="instructions">info</div>
  {/if}
</div>

<style>
  .container {
    z-index: -1;
  }
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

  #sign {
    position: absolute;
    height: 100vh;
    width: calc(16 / 9 * 3 * 100vh);
    background: url('/introAssets/sign.png') repeat-x;
    background-size: auto 100vh;
    animation: signslide 15s linear infinite;
  }

  #slidingBackground {
    position: absolute;
    height: 100vh;
    width: calc(16 / 9 * 3 * 100vh);
    background: url('/introAssets/background.png');
    background-size: auto 100vh;
    animation: slide 30s linear infinite;
  }

  #slidingMidground {
    position: absolute;
    height: 100vh;
    width: calc(16 / 9 * 3 * 100vh);
    background: url('/introAssets/midground.png') repeat-x;
    background-size: auto 100vh;
    animation: slide 20s linear infinite;
  }

  #slidingForeground {
    position: absolute;
    height: 100vh;
    width: calc(16 / 9 * 3 * 100vh);
    background: url('/introAssets/foreground.png') repeat-x;
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
