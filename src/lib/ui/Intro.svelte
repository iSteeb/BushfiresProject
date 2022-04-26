<script>
  import { currentState } from '../stores.js';
  import { fade } from 'svelte/transition';

  export let duration = 10;

  window.setTimeout(() => {
    $currentState.appState = 2;
  }, duration * 1000);
</script>

<div id="container" transition:fade={{ delay: 500, duration: 3000 }}>
  <div id="slidingBackground" />
  <div id="slidingMidground" />
  <div id="slidingForeground" />
  <div id="car" />
  <div id="sign" />
</div>

<style>
  #container {
    overflow: hidden;
  }

  #car {
    position: absolute;
    height: 100vh;
    width: 300vw;
    background: url('introAssets/car.png');
    background-size: auto 100vh;
  }

  #sign {
    position: absolute;
    height: 100vh;
    width: 300vw;
    background: url('introAssets/sign.png') repeat-x;
    animation: slide 60s linear infinite;
    background-size: auto 100vh;
  }

  #slidingBackground {
    position: absolute;
    height: 100vh;
    width: 300vw;
    background: url('introAssets/background.png') repeat-x;
    animation: slide 60s linear infinite;
    background-size: auto 100vh;
  }
  #slidingMidground {
    position: absolute;
    height: 100vh;
    width: 300vw;
    background: url('introAssets/midground.png') repeat-x;
    animation: slide 20s linear infinite;
    background-size: auto 100vh;
  }

  #slidingForeground {
    position: absolute;
    height: 100vh;
    width: 300vw;
    background: url('introAssets/foreground.png') repeat-x;
    animation: slide 5s linear infinite;
    background-size: auto 100vh;
  }

  @keyframes slide {
    0% {
      transform: translate3d(-1920px, 0, 0);
    }
    100% {
      transform: translate3d(0px, 0, 0);
    }
  }
</style>
