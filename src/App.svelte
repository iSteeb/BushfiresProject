<script>
  import { currentState, defaultState } from './lib/stores.js';
  import Intro from './ui/Intro.svelte';
  import Desk from './ui/Desk.svelte';
  import { fade } from 'svelte/transition';
  import { finalTime } from './lib/stores.js';
  import OutClick from 'svelte-outclick';
  import Info from './ui/overlays/Info.svelte';

  const scene = {
    0: false,
    1: Intro,
    2: Desk,
    3: false
  };

  const assets = [
    'BushfiresProject/desk.png',
    'BushfiresProject/introAssets/background.png',
    'BushfiresProject/introAssets/midground.png',
    'BushfiresProject/introAssets/foreground.png',
    'BushfiresProject/introAssets/car.png',
    'BushfiresProject/introAssets/sign.png',
    'BushfiresProject/landline.png',
    'BushfiresProject/smartphone.png',
    'BushfiresProject/radio.png',
    'BushfiresProject/laptop.png'
  ];
</script>

<svelte:head>
  {#each assets as href}
    <link rel="preload" {href} as="image" />
  {/each}
</svelte:head>

<svelte:component this={scene[$currentState.appState]} />
{#if $currentState.appState == 0}
  {#if $currentState.overlayComponent == 99}
    <OutClick on:outclick={() => ($currentState.overlayComponent = 0)}>
      <svelte:component this={Info} />
    </OutClick>
  {:else}
    <container in:fade={{ duration: 500 }} out:fade={{ duration: 500 }}>
      <button
        class="btn startButton"
        on:click={() => {
          $currentState.appState = 1;
          $currentState.showMenu = false;
        }}>simulate fire</button>
      <button
        class="btn"
        on:click={() => {
          $currentState.overlayComponent = 99;
        }}>more info</button>
    </container>
  {/if}
{/if}

{#if $currentState.appState == 3}
  <container in:fade={{ duration: 1500 }} out:fade={{ duration: 250 }}>
    <OutClick
      on:outclick={() => {
        $currentState = Object.assign({}, defaultState);
      }}>
      <end class="popup">
        final time: {$finalTime} click outside to reset
      </end>
    </OutClick>
  </container>
{/if}

<style>
  container {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }
</style>
