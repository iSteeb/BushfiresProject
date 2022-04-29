<script>
  import { fade } from 'svelte/transition';
  import { currentState } from '../helpers/stores.js';
  import Alerts from './Alerts.svelte';
</script>

<!-- TODO: https://svelte.dev/repl/591aff801e1d47498afdc2738fea4485?version=3.47.0
     TODO: https://svelte.dev/examples/svg-transitions 
     TODO: https://svelte.dev/examples/clock 
     TODO: Animated clock with stopwatch timer for user time tracking and gamification pressure -->

<!-- REF: https://stackoverflow.com/questions/7844399/responsive-image-map -->
<div class="container" transition:fade={{ delay: 500, duration: 3000 }}>
  <svg
    version="1.1"
    xmlns="http://www.w3.org/2000/svg"
    xmlns:xlink="http://www.w3.org/1999/xlink"
    viewBox="0 0 2400 2400">
    <image width="2400" height="2400" xlink:href="/desk.png" />
    <rect
      x="982"
      y="1618"
      fill="#00f"
      opacity="0.2"
      width="532"
      height="392"
      on:click={() => {
        $currentState.overlayComponent = 1;
      }} />
    <rect
      x="1914"
      y="934"
      fill="#00f"
      opacity="0.2"
      width="272"
      height="172"
      on:click={() => {
        $currentState.overlayComponent = 2;
      }} />
    <rect
      x="1800"
      y="1800"
      fill="#00f"
      opacity="0.2"
      width="272"
      height="172"
      on:click={() => {
        $currentState.overlayComponent = 3;
      }} />
    <rect
      x="600"
      y="1800"
      fill="#00f"
      opacity="0.2"
      width="272"
      height="172"
      on:click={() => {
        $currentState.overlayComponent = 4;
      }} />
  </svg>
</div>

<Alerts />

<style>
  svg {
    width: 100vw;
    height: 100vh;
    object-fit: contain;
    position: fixed;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
  }
</style>
