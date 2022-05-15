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

  $: bgOpacity =
    scene[$currentState.appState] == false ||
    scene[$currentState.appState] == Intro
      ? 'opacity: 1'
      : 'opacity: 0.075';
</script>

<div id="bg">
  <img
    style={bgOpacity}
    height="100%"
    width="100%"
    src="BushfiresProject/bg.png"
    alt="bg" />
</div>

<svelte:component this={scene[$currentState.appState]} />
{#if $currentState.appState == 0}
  <div id="title">BUSHFIRE SIMULATOR</div>

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
        }}>Simulate Fire</button>
      <button
        class="btn"
        on:click={() => {
          $currentState.overlayComponent = 99;
        }}>Information</button>
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
  #bg {
    position: absolute;
    overflow: hidden;
    height: 100vh;
    width: 100vw;
  }
  #title {
    position: absolute;
    top: 20%;
    left: 50%;
    text-align: center;
    transform: translate(-50%, -50%);
    font-size: 12vh;
    color: #f5f5f5;
    text-shadow: 0 0 10px rgb(127, 98, 26);
    font-family: Blockhead;
    font-weight: bold;
  }
</style>
