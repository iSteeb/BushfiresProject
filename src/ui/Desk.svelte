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

  function progressGame() {
    $currentState.gameState += 1;

    if ($currentState.gameState < alerts.length - 1) {
      time.setTime(Date.parse(alerts[$currentState.gameState].time));
      componentBreaker($currentState.gameState);
      componentFixer($currentState.gameState);
      roadBlockToggle($currentState.gameState);
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
    setTimeout(() => {
      $currentState.overlayComponent = 99;
    }, 3000);
  });
</script>

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
      x="979"
      y="1233"
      width="538"
      height="398"
      rx="37px"
      on:click={() => {
        if (!$currentState.showMenu) {
          $currentState.overlayComponent = 1;
        }
      }}
      class={$currentState.glow} />

    <!-- radio hitbox -->
    <rect
      x="1911"
      y="552"
      width="276"
      height="175"
      rx="48px"
      on:click={() => {
        if (!$currentState.showMenu) {
          $currentState.overlayComponent = 2;
        }
      }}
      class={$currentState.glow} />

    <!-- smartphone hitbox -->
    <rect
      x="605"
      y="1398"
      width="136"
      height="234"
      rx="20px"
      on:click={() => {
        if (!$currentState.showMenu) {
          $currentState.overlayComponent = 3;
        }
      }}
      class={$currentState.glow} />

    <!-- landline hitbox -->
    <path
      transform="translate(1633,1404) scale(1.06)"
      on:click={() => {
        if (!$currentState.showMenu) {
          $currentState.overlayComponent = 4;
        }
      }}
      class={$currentState.glow}
      d="M62.9314,211.66339v-19.39178h75.34186v19.39178h16.21283v-19.39178c4.06049-1.00708,17.302-4.83508,26.88843-17.70587,3.20752-4.30643,8.46021-12.92038,9.14868-24.88437,.19055-3.31137,.54907-15.87442-7.22742-27.35452-2.47766-3.65765-4.28345-4.99451-13.81458-13.44849-8.06653-7.15491-14.46558-13.02051-18.492-16.74469h-42.28046v-11.44434c3.63049-.39679,8.12665-1.19794,13.10797-2.82495,4.85345-1.58527,8.86694-3.52985,11.98474-5.30621-.09888-10.11151-.19781-20.22302-.29669-30.33453,10.32587,5.66772,11.85852,11.27551,12.18994,13.40948,.1554,1.00067,.55011,4.47894,.27448,8.78271-.24005,3.74805-.78668,4.97272-.18298,7.59338,.28406,1.23297,.97784,4.01379,3.4765,6.12964,1.29401,1.09576,2.6626,1.63257,3.63385,1.91467h40.37311c1.03088-.19836,3.69983-.85461,6.03625-3.1955,2.02478-2.02869,2.75305-4.27393,3.01904-5.30621,.54077-3.82251,.91833-8.74835,.54895-14.4549,0-.00012-.46094-7.12268-2.27014-13.75873C197.31689,31.28192,159.35095,.01782,102.5968,0,97.93384-.00146,17.21985,.80908,2.33588,41.77393,.97345,45.52381,.08313,49.82874,0,54.78058v17.1665c.1261,.72589,.71362,3.6087,3.3573,5.61212,1.67609,1.27014,3.40143,1.59778,4.25977,1.69958,13.35175,.21191,26.70343,.42389,40.05518,.6358,.57227-.02222,4.20551-.22284,6.55658-3.23663,1.33923-1.71674,1.63025-3.53583,1.7088-4.39294v-17.1665c.72925-2.00525,2.25836-5.40631,5.40118-8.68304,3.32556-3.46729,6.88458-5.15503,8.90424-5.94031l.31787,31.47192c3.30511,1.88367,7.35107,3.87573,12.10785,5.61212,4.29907,1.56927,8.27643,2.60034,11.73456,3.28906v11.1264H51.48706c-2.8927,2.59369-7.05316,6.2536-12.1792,10.51959-10.6908,8.89716-14.44897,11.16559-18.62616,16.92377-.63177,.87091-4.63977,6.48773-6.90973,14.11987-5.04315,16.95627,1.88519,32.45282,4.4303,37.53528,2.8642,3.99597,7.8335,9.84259,15.60431,14.74539,5.06244,3.19403,9.85736,5.0686,13.61267,6.20151,.40222,6.54776,.8045,13.09555,1.20673,19.64331h14.30542Z" />

    <!-- game state incrementer -->
    <circle
      cx="408"
      cy="488"
      r="313px"
      on:click={() => {
        if (!$currentState.showMenu) {
          progressGame();
        }
      }}
      class={$currentState.glow} />

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
</container>
<Overlay />

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
