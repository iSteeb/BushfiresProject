<script>
  import { currentState } from '../helpers/stores.js';
  import { fade } from 'svelte/transition';

  export let duration = 10;

  window.setTimeout(() => {
    $currentState.appState = 2;
  }, duration * 1000);
</script>

<!-- TODO: Instructions page/popup -->

<div id="container" transition:fade={{ delay: 500, duration: 3000 }}>
  <div id="slidingBackground" />
  <div id="slidingMidground" />
  <div id="slidingForeground" />
  <div id="car" />
</div>

<style>
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
