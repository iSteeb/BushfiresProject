<script>
  import { fade } from 'svelte/transition';
  import {
    currentState,
    alerts,
    finalTime,
    THRESHOLD,
    DISPLAYLIMIT
  } from '../lib/stores.js';
  import { onMount } from 'svelte';
  import Overlay from '../ui/Overlay.svelte';

  let time = new Date('January 27, 2020 14:31:59');
  let hours = time.getHours();
  let minutes = time.getMinutes();
  let seconds = time.getSeconds();
  let startTime = new Date();
  let speedFactor = 0;
  let nextTime;

  // reenable scrolling
  window.onscroll = () => {
    window.scrollTo(window.scrollX, window.scrollY);
  };

  function progressGame() {
    $currentState.gameState += 1;
    if ($currentState.gameState < alerts.length - 1) {
      time.setTime(Date.parse(alerts[$currentState.gameState].time));
      componentBreaker($currentState.gameState);
      componentFixer($currentState.gameState);
      roadBlockToggle($currentState.gameState);
      getIndexes($currentState.gameState);
    } else if (($currentState.gameState = alerts.length - 1)) {
      time.setTime(Date.parse(alerts[$currentState.gameState].time));
      $currentState.roadsBlocked = false;
      $currentState.nonfunctionalComponents = [];
      getIndexes($currentState.gameState);
    } else {
      $finalTime = new Date(Date.now() - startTime.getTime())
        .toISOString()
        .slice(11, 19);
      $currentState.appState = 3;
    }
  }

  function getIndexes(alertIndex) {
    $currentState.servedAlertsIndexes = [];
    while (
      alertIndex >= 0 &&
      $currentState.servedAlertsIndexes.length < DISPLAYLIMIT
    ) {
      $currentState.servedAlertsIndexes.push(alertIndex);
      alertIndex -= 1;
    }
  }

  function componentBreaker(alertIndex) {
    let rand = Math.random();
    if (rand >= THRESHOLD && alerts[alertIndex].level == 'emergency warning') {
      let brokenComponent = Math.floor(Math.random() * 4) + 1;
      if (!$currentState.nonfunctionalComponents.includes(brokenComponent)) {
        $currentState.nonfunctionalComponents.push(brokenComponent);
      }
    }
  }

  function componentFixer(alertIndex) {
    let rand = Math.random();
    if (
      rand >= THRESHOLD &&
      alerts[alertIndex].level == 'advice' &&
      $currentState.nonfunctionalComponents.length > 0
    ) {
      let i = Math.floor(
        Math.random() * $currentState.nonfunctionalComponents.length
      );
      $currentState.nonfunctionalComponents.splice(i, 1);
    }
  }

  function roadBlockToggle(alertIndex) {
    let rand = Math.random();
    if (
      !$currentState.roadsBlocked &&
      rand >= THRESHOLD &&
      alerts[alertIndex].level == 'emergency warning'
    ) {
      $currentState.roadsBlocked = true;
    } else if (
      $currentState.roadsBlocked &&
      rand >= THRESHOLD &&
      alerts[alertIndex].level == 'advice'
    ) {
      $currentState.roadsBlocked = false;
    }
  }

  $: if (
    time.getTime() > nextTime &&
    $currentState.gameState < alerts.length - 1
  ) {
    progressGame();
  }

  $: if ($currentState.showMenu || $currentState.overlayComponent != 0) {
    speedFactor = 0;
  } else {
    speedFactor = 11250;
  }

  onMount(() => {
    setInterval(() => {
      time = new Date(time.getTime() + speedFactor);
      hours = time.getHours();
      minutes = time.getMinutes();
      seconds = time.getSeconds();
      if ($currentState.gameState < alerts.length - 1) {
        nextTime = Date.parse(alerts[$currentState.gameState + 1].time);
      }
    }, 250);
  });
</script>

{#if $currentState.gameState >= alerts.length - 1}
  Game Over - Click the the clock? to Continue {$currentState.gameState}
{/if}
<!-- REF: https://stackoverflow.com/questions/7844399/responsive-image-map -->
<container
  in:fade={{ delay: 500, duration: 1500 }}
  out:fade={{ duration: 250 }}>
  <svg
    version="1.1"
    xmlns="http://www.w3.org/2000/svg"
    xmlns:xlink="http://www.w3.org/1999/xlink"
    viewBox="0 0 2400 1800">
    <image width="2400" height="1800" xlink:href="BushfiresProject/desk.png" />

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
      height="222"
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
      opacity="0.2"
      on:click={() => {
        if (!$currentState.showMenu) {
          progressGame();
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
