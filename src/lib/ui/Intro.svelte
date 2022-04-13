<script>
  import { state } from '../stores.js';

  let currentTime = 0;
  export let duration = 10;

  $: if (currentTime >= duration && $state == 1) {
    state.update((n) => n + 1);
  }
</script>

{#if $state}
  <video
    id="bgvid"
    autoplay
    muted
    bind:currentTime
    src="src/assets/animation.mp4"
    type="video/mp4" />
{/if}

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
