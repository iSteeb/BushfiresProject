<script>
  import { currentState, defaultState } from './lib/stores.js';
  import Intro from './ui/Intro.svelte';
  import Desk from './ui/Desk.svelte';
  import { fade } from 'svelte/transition';
  import { finalTime } from './lib/stores.js';
  import OutClick from 'svelte-outclick';

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
  <container
    in:fade={{ delay: 500, duration: 1500 }}
    out:fade={{ duration: 250 }}>
    <button
      class="startButton"
      on:click={() => {
        $currentState.appState = 1;
        $currentState.showMenu = false;
      }}>New Simulation</button>
    <info>info section</info>
  </container>
{/if}
{#if $currentState.appState == 3}
  <container in:fade={{ duration: 1500 }} out:fade={{ duration: 250 }}>
    <OutClick
      on:outclick={() => {
        $currentState = Object.assign({}, defaultState);
      }}>
      <end>
        final time: {$finalTime} click outside to reset
      </end>
    </OutClick>
  </container>
{/if}

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
</style>
