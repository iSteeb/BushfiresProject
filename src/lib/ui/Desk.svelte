<script>
  import { fade } from 'svelte/transition';
  import { currentState } from '../helpers/stores.js';
  import Alerts from './Alerts.svelte';
  import { onMount } from 'svelte';

  let time = new Date('January 27, 2020 14:00:00');
  let hours = time.getHours();
  let minutes = time.getMinutes();
  let seconds = time.getSeconds();

  let startTime = new Date();
  let diff;

  onMount(() => {
    setInterval(() => {
      time.setTime(time.getTime() + 10000);
      hours = time.getHours();
      minutes = time.getMinutes();
      seconds = time.getSeconds();
      diff = new Date(Date.now() - startTime.getTime())
        .toISOString()
        .slice(11, 19);
    }, 1);
  });
</script>

<!-- REF: https://stackoverflow.com/questions/7844399/responsive-image-map -->
<div class="container" transition:fade={{ delay: 500, duration: 3000 }}>
  <svg
    version="1.1"
    xmlns="http://www.w3.org/2000/svg"
    xmlns:xlink="http://www.w3.org/1999/xlink"
    viewBox="0 0 2400 2400">
    <image width="2400" height="2400" xlink:href="/desk.png" />

    <!-- laptop hitbox -->
    <rect
      x="982"
      y="1534"
      fill="#00f"
      opacity="0.2"
      width="532"
      height="395"
      on:click={() => {
        $currentState.overlayComponent = 1;
      }} />

    <!-- radio hitbox -->
    <rect
      x="1914"
      y="854"
      fill="#00f"
      opacity="0.2"
      width="272"
      height="172"
      on:click={() => {
        $currentState.overlayComponent = 2;
      }} />

    <!-- smartphone hitbox -->
    <rect
      x="607"
      y="1700"
      fill="#00f"
      opacity="0.2"
      width="132"
      height="228"
      on:click={() => {
        $currentState.overlayComponent = 3;
      }} />

    <!-- landline hitbox -->
    <rect
      x="1635"
      y="1706"
      fill="#00f"
      opacity="0.2"
      width="211"
      height="222 "
      on:click={() => {
        $currentState.overlayComponent = 4;
      }} />

    <!-- game state incrementer -->
    <rect
      x="336"
      y="1125"
      fill="#00f"
      opacity="0.2"
      width="150"
      height="75"
      on:click={() => {
        $currentState.gameState += 1;
      }} />

    <!-- animated clock -->
    <circle cx="408" cy="783" r="18px" fill="#79a8a1" />
    <line
      x1="408"
      y1="783"
      x2="408"
      y2="525"
      style="stroke:#79a8a1; stroke-width:12px"
      transform="rotate({6 * minutes + seconds / 10} 408 783)" />
    <line
      x1="408"
      y1="783"
      x2="408"
      y2="600"
      style="stroke:#79a8a1; stroke-width:18px"
      transform="rotate({30 * hours + minutes / 2} 408 783)" />
  </svg>
</div>
{diff}<Alerts />

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
