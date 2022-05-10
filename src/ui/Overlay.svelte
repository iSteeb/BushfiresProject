<script>
  import OutClick from 'svelte-outclick';
  import { currentState, exclude } from '../lib/stores.js';
  import Laptop from './overlays/Laptop.svelte';
  import Radio from './overlays/Radio.svelte';
  import Smartphone from './overlays/Smartphone.svelte';
  import Landline from './overlays/Landline.svelte';
  import MenuInfo from './overlays/MenuInfo.svelte';
  import { fade } from 'svelte/transition';

  const defaultState = {
    appState: 0,
    gameState: 0,
    showMenu: true,
    overlayComponent: 0,
    servedAlerts: [],
    servedErrors: []
  };

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
  <svelte:component
    this={scene[$currentState.overlayComponent]}
    bind:this={$exclude} />
</OutClick>

{#if $currentState.overlayComponent != 99}
  <svg
    id={$currentState.showMenu.toString()}
    viewBox="0 0 18 15"
    bind:this={$exclude}>
    {#if $currentState.showMenu}
      <g
        on:click={() => {
          $currentState.showMenu = false;
        }}>
        <path
          fill="#424242"
          d="M18,1.484c0,0.82-0.665,1.484-1.484,1.484H1.484C0.665,2.969,0,2.304,0,1.484l0,0C0,0.665,0.665,0,1.484,0 h15.031C17.335,0,18,0.665,18,1.484L18,1.484z" />
        <text
          x="50%"
          y="2.225"
          text-anchor="middle"
          fill="white"
          font-size="3px">
          resume
        </text>
      </g>
      <g
        on:click={() => {
          $currentState = defaultState;
        }}>
        <path
          fill="#424242"
          d="M18,7.516C18,8.335,17.335,9,16.516,9H1.484C0.665,9,0,8.335,0,7.516l0,0c0-0.82,0.665-1.484,1.484-1.484 h15.031C17.335,6.031,18,6.696,18,7.516L18,7.516z" />
        <text
          x="50%"
          y="8.225"
          text-anchor="middle"
          fill="white"
          font-size="3px">
          reset
        </text>
      </g>
      <g
        on:click={() => {
          $currentState.overlayComponent = 99;
        }}>
        <path
          fill="#424242"
          d="M18,13.516C18,14.335,17.335,15,16.516,15H1.484C0.665,15,0,14.335,0,13.516l0,0 c0-0.82,0.665-1.484,1.484-1.484h15.031C17.335,12.031,18,12.696,18,13.516L18,13.516z" />
        <text
          x="50%"
          y="14.435"
          text-anchor="middle"
          fill="white"
          font-size="3px">
          info
        </text>
      </g>
    {:else}
      <path
        fill="#424242"
        d="M18,1.484c0,0.82-0.665,1.484-1.484,1.484H1.484C0.665,2.969,0,2.304,0,1.484l0,0C0,0.665,0.665,0,1.484,0 h15.031C17.335,0,18,0.665,18,1.484L18,1.484z" />
      <path
        fill="#424242"
        d="M18,7.516C18,8.335,17.335,9,16.516,9H1.484C0.665,9,0,8.335,0,7.516l0,0c0-0.82,0.665-1.484,1.484-1.484 h15.031C17.335,6.031,18,6.696,18,7.516L18,7.516z" />
      <path
        fill="#424242"
        d="M18,13.516C18,14.335,17.335,15,16.516,15H1.484C0.665,15,0,14.335,0,13.516l0,0 c0-0.82,0.665-1.484,1.484-1.484h15.031C17.335,12.031,18,12.696,18,13.516L18,13.516z" />
      <rect
        x="0"
        y="0"
        width="18"
        height="15"
        fill="transparent"
        on:click={() => {
          $currentState.showMenu = true;
        }} />
    {/if}
  </svg>
{/if}

<style>
  #false {
    height: 4%;
    width: auto;
    position: absolute;
    top: 1%;
    left: 1%;
    transform: translate(0%, 0%);
    z-index: 999;
  }
  #true {
    height: 30%;
    width: auto;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    z-index: 999;
  }
</style>
