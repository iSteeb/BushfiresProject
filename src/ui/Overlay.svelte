<script>
  import OutClick from 'svelte-outclick';
  import { currentState, defaultState, exclude } from '../lib/stores.js';
  import Laptop from './overlays/Laptop.svelte';
  import Radio from './overlays/Radio.svelte';
  import Smartphone from './overlays/Smartphone.svelte';
  import Landline from './overlays/Landline.svelte';
  import MenuInfo from './overlays/MenuInfo.svelte';
  import { fade } from 'svelte/transition';

  const scene = {
    0: false,
    1: Laptop,
    2: Radio,
    3: Smartphone,
    4: Landline,
    99: MenuInfo
  };
</script>

<OutClick on:outclick={() => ($currentState.overlayComponent = 0)}>
  <svelte:component this={scene[$currentState.overlayComponent]} />
</OutClick>

{#if !$currentState.showMenu}
  <svg
    id="burger"
    viewBox="0 0 18 15"
    on:click={() => {
      $currentState.showMenu = !$currentState.showMenu;
    }}
    bind:this={$exclude}
    transition:fade={{ duration: 75 }}>
    <path
      fill="#424242"
      d="M18,1.484c0,0.82-0.665,1.484-1.484,1.484H1.484C0.665,2.969,0,2.304,0,1.484l0,0C0,0.665,0.665,0,1.484,0 h15.031C17.335,0,18,0.665,18,1.484L18,1.484z" />
    <path
      fill="#424242"
      d="M18,7.516C18,8.335,17.335,9,16.516,9H1.484C0.665,9,0,8.335,0,7.516l0,0c0-0.82,0.665-1.484,1.484-1.484 h15.031C17.335,6.031,18,6.696,18,7.516L18,7.516z" />
    <path
      fill="#424242"
      d="M18,13.516C18,14.335,17.335,15,16.516,15H1.484C0.665,15,0,14.335,0,13.516l0,0 c0-0.82,0.665-1.484,1.484-1.484h15.031C17.335,12.031,18,12.696,18,13.516L18,13.516z" />
  </svg>
{:else}
  <container bind:this={$exclude} transition:fade={{ duration: 75 }}>
    {#if $currentState.showMenu}
      {#if $currentState.appState == 0}
        <button
          on:click={() => {
            $currentState.appState = 1;
            $currentState.showMenu = false;
          }}>Start</button>
      {:else}
        <button
          on:click={() => {
            $currentState.showMenu = false;
          }}>Resume</button>
        <button
          on:click={() => {
            currentState.set(defaultState);
          }}>Reset</button>
        <button
          on:click={() => {
            $currentState.overlayComponent = 99;
          }}>Info</button>
      {/if}
    {/if}
  </container>
{/if}

<style>
  container {
    position: absolute;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100vw;
    height: 100vh;
  }
  #burger {
    height: 4%;
    width: auto;
    position: absolute;
    top: 1%;
    left: 1%;
    transform: translate(0%, 0%);
    z-index: 999;
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
