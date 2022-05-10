<script>
  import { currentState } from './lib/stores.js';
  import Intro from './ui/Intro.svelte';
  import Desk from './ui/Desk.svelte';
  import EndScreen from './ui/EndScreen.svelte';
  import { fade } from 'svelte/transition';

  const scene = {
    0: false,
    1: Intro,
    2: Desk,
    3: EndScreen
  };

  const assets = [
    '/desk.png',
    '/introAssets/background.png',
    '/introAssets/midground.png',
    '/introAssets/foreground.png',
    '/introAssets/car.png',
    '/introAssets/sign.png'
  ];
</script>

<svelte:head>
  {#each assets as href}
    <link rel="preload" {href} as="image" />
  {/each}
</svelte:head>

<container transition:fade={{ duration: 500 }}>
  <svelte:component this={scene[$currentState.appState]} />
  {#if $currentState.appState == 0}
    <info>info section</info>
  {/if}
</container>

{#if $currentState.appState == 0}
  <button
    id="startButton"
    on:click={() => {
      $currentState.appState = 1;
      $currentState.showMenu = false;
    }}>Start</button>
{/if}

<style>
  info {
    position: absolute;
  }
  #startButton {
    position: absolute;
    width: 10vw;
    height: 10vh;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }
  button {
    font-family: inherit;
    font-size: inherit;
    padding: 1em 2em;
    color: #ff3e00;
    background-color: rgba(255, 62, 0, 0.1);
    border-radius: 2em;
    border: 2px solid rgba(255, 62, 0, 0);
    outline: none;
    width: 200px;
    font-variant-numeric: tabular-nums;
    cursor: pointer;
    z-index: 999;
  }

  button:focus {
    border: 2px solid #ff3e00;
  }

  button:active {
    background-color: rgba(255, 62, 0, 0.2);
  }
</style>
