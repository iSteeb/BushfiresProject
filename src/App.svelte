<script>
  import { currentState, defaultState } from './lib/stores.js';
  import Intro from './ui/Intro.svelte';
  import Desk from './ui/Desk.svelte';
  import { fade } from 'svelte/transition';
  import { finalTime } from './lib/stores.js';

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
    'BushfiresProject/introAssets/sign.png'
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
    <button
      class="startButton"
      on:click={() => {
        $currentState.appState = 1;
        $currentState.showMenu = false;
      }}>New Simulation</button>
    <info>info section</info>
  {/if}
  {#if $currentState.appState == 3}
    <end in:fade={{ duration: 1000 }}>
      final time: {$finalTime}
    </end>
    <button
      class="startButton"
      on:click={() => {
        $currentState = Object.assign({}, defaultState);
      }}>Reset</button>
  {/if}
</container>

<style>
  end {
    font-size: 50px;
    font-weight: bold;
    text-align: center;
    color: #fff;
    background: #000;
    padding: 20px;
    border-radius: 10px;
    box-shadow: 0 0 10px #000;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }
  info {
    position: absolute;
  }
  .startButton {
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
