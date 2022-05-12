<script>
  import { fade } from 'svelte/transition';
  import { currentState, alerts, finalTime } from '../lib/stores.js';
  import { onMount } from 'svelte';
  import Overlay from '../ui/Overlay.svelte';

  let time = new Date('January 27, 2020 14:00:00');
  let hours = time.getHours();
  let minutes = time.getMinutes();
  let seconds = time.getSeconds();
  let startTime = new Date();
  let speedFactor = 1;
  let nextTime;

  $: if ($currentState.gameState > alerts.length) {
    $finalTime = new Date(Date.now() - startTime.getTime())
      .toISOString()
      .slice(11, 19);
    $currentState.appState = 3;
  }

  $: if (time.getTime() > nextTime && $currentState.gameState < alerts.length) {
    $currentState.gameState += 1;
  }

  $: if ($currentState.showMenu) {
    speedFactor = 0;
  } else if ($currentState.overlayComponent != 0) {
    speedFactor = 0;
  } else {
    speedFactor = 45000;
  }

  onMount(() => {
    setInterval(() => {
      time = new Date(time.getTime() + speedFactor);
      hours = time.getHours();
      minutes = time.getMinutes();
      seconds = time.getSeconds();
      if ($currentState.gameState < alerts.length) {
        nextTime = Date.parse(alerts[$currentState.gameState].time);
      }
    }, 1000);
  });
</script>

<!-- TODO: if alert is extreme, high chance of a device turning off | if alert is advice, high chance of an offline device being restored -->
<!-- TODO:  desk progresses stage, pulls next data point, and stores it in an appropriate recent data array for each component -->

<!-- TODO: if alert is extreme, high chance of roadblockage occurring | if road blocked and alert drops to advice, road is unblocked | prompt users to think about if they are prepared -->
<!-- REF: https://stackoverflow.com/questions/7844399/responsive-image-map -->
<container in:fade={{ delay: 500, duration: 1500 }}>
  <svg
    version="1.1"
    xmlns="http://www.w3.org/2000/svg"
    xmlns:xlink="http://www.w3.org/1999/xlink"
    viewBox="0 0 2400 1800">
    <image width="2400" height="1800" xlink:href="BushfiresProject/desk.png" />

    {#if $currentState.gameState >= alerts.length}
      <text x="408" y="850" text-anchor="middle">
        Game Over - Click the Clock to Continue
      </text>
    {/if}

    <!-- laptop hitbox -->
    <rect
      x="982"
      y="1234"
      opacity="0"
      width="532"
      height="395"
      on:click={() => {
        if (!$currentState.showMenu) {
          $currentState.overlayComponent = 1;
        }
      }} />

    <!-- radio hitbox -->
    <rect
      x="1914"
      y="554"
      opacity="0"
      width="272"
      height="172"
      on:click={() => {
        if (!$currentState.showMenu) {
          $currentState.overlayComponent = 2;
        }
      }} />

    <!-- smartphone hitbox -->
    <rect
      x="607"
      y="1400"
      opacity="0"
      width="132"
      height="228"
      on:click={() => {
        if (!$currentState.showMenu) {
          $currentState.overlayComponent = 3;
        }
      }} />

    <!-- landline hitbox -->
    <rect
      x="1635"
      y="1406"
      opacity="0"
      width="211"
      height="222 "
      on:click={() => {
        if (!$currentState.showMenu) {
          $currentState.overlayComponent = 4;
        }
      }} />

    <!-- game state incrementer -->
    <circle
      cx="408"
      cy="483"
      r="316px"
      opacity="0"
      on:click={() => {
        if (!$currentState.showMenu) {
          $currentState.gameState += 1;
          time.setTime(Date.parse(alerts[$currentState.gameState - 1].time));
        }
      }} />

    <!-- animated clock -->
    <circle cx="408" cy="483" r="18px" fill="#79a8a1" />
    <line
      x1="408"
      y1="483"
      x2="408"
      y2="225"
      style="stroke:#79a8a1; stroke-width:12px"
      transform="rotate({6 * minutes + seconds / 10} 408 483)" />
    <line
      x1="408"
      y1="483"
      x2="408"
      y2="300"
      style="stroke:#79a8a1; stroke-width:18px"
      transform="rotate({30 * hours + minutes / 2} 408 483)" />
  </svg>
  <Overlay />
  <alerts>alerts</alerts>
</container>

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
