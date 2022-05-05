<script>
  import { fade } from 'svelte/transition';
  import { currentState } from '../helpers/stores.js';
  import Alerts from './Alerts.svelte';
  import { onMount } from 'svelte';

  let time = new Date('January 27, 2020 14:00:00');
  let hours = time.getHours();
  let minutes = time.getMinutes();
  let seconds = time.getSeconds();

  onMount(() => {
    setInterval(() => {
      time.setTime(time.getTime() + 60000);
      hours = time.getHours();
      minutes = time.getMinutes();
      seconds = time.getSeconds();
    }, 100);
  });
</script>

<!-- TODO: https://svelte.dev/repl/591aff801e1d47498afdc2738fea4485?version=3.47.0
     TODO: https://svelte.dev/examples/svg-transitions 
     TODO: https://svelte.dev/examples/clock 
     TODO: Animated clock with stopwatch timer for user time tracking and gamification pressure
     TODO: 'realtime' forced progression with updates and a fast forward to next notificaiton button on clock -->

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
    <rect x="336" y="1049" fill="#00f" opacity="0.2" width="150" height="75" />
    <line
      x1="408"
      y1="867"
      x2="700"
      y2="700"
      style="stroke:#666; stroke-width:2"
      transform="rotate({6 * minutes + seconds / 10} 408 867)" />
    <line
      x1="408"
      y1="867"
      x2="700"
      y2="700"
      style="stroke:#666; stroke-width:2"
      transform="rotate({30 * hours + minutes / 2} 408 867)" />
  </svg>
</div>
{hours}:{minutes}<Alerts />

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
