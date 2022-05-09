<script>
  import { currentState } from '../../stores.js';
  import SocialMediaApp from './applications/SocialMediaApp.svelte';
</script>

<container>
  <viewport>
    <SocialMediaApp />
  </viewport>

  <svg
    version="1.1"
    xmlns="http://www.w3.org/2000/svg"
    xmlns:xlink="http://www.w3.org/1999/xlink"
    viewBox="0 0 2428 1793">
    <image width="2428" height="1793" xlink:href="/laptop.png" />
    <circle
      r="44"
      cx="138"
      cy="120"
      opacity="0"
      on:click={() => {
        $currentState.overlayComponent = 0;
      }} />
  </svg>
</container>

<style>
  container {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }
  viewport {
    position: absolute;
    margin-top: 11%;
    margin-left: 3%;
    padding: 1%;
    height: 77.5%;
    width: 91.5%;
  }
  @media (orientation: landscape) {
    svg {
      height: 70vh;
      width: auto;
    }
  }

  @media (orientation: portrait) {
    svg {
      width: 80vw;
      height: auto;
    }
  }
</style>
