<script>
  import { currentState } from '../stores.js';
  import { fade } from 'svelte/transition';

  let currentTime = 0;
  export let duration = 10;

  $: if (currentTime >= duration) {
    $currentState.appState = 2;
  }
</script>

<div id="container" transition:fade={{ delay: 500, duration: 3000 }}>
  <video
    id="bgvid"
    autoplay
    muted
    bind:currentTime
    src="animation.mp4"
    type="video/mp4" />
</div>

<style>
  #bgvid {
    width: 100vw;
    height: 100vh;
    object-fit: cover;
    position: fixed;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
    z-index: -1;
  }
</style>
