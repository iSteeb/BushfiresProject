<script>
  import { state, scenario } from '../stores.js';
  import { clickOutside } from './click_outside.js';

  let showInfoPanel = false;
  let showMenu = true;
</script>

<div id="container">
  {#if showMenu}
    {#if $state == 0}
      <button
        on:click={() => {
          state.update((n) => n + 1);
          showMenu = false;
          showInfoPanel = false;
        }}>Start</button>
    {:else}
      <button
        on:click={() => {
          showMenu = false;
          showInfoPanel = false;
        }}>Resume</button>
      <button
        on:click={() => {
          state.set(0);
          showMenu = true;
          showInfoPanel = false;
          scenario.set([]);
        }}>Reset</button>
    {/if}
    <button
      on:click={() => {
        showInfoPanel = !showInfoPanel;
      }}>Info</button>
  {:else}
    <button
      id="menuButton"
      on:click={() => {
        showMenu = !showMenu;
        showInfoPanel = false;
      }}>=</button>
  {/if}

  {#if showInfoPanel}
    <div
      id="infoButton"
      use:clickOutside
      on:outclick={() => {
        showInfoPanel = false;
      }}>
      <h1>Info</h1>
      <p>
        This is a simple Svelte app.This is a simple Svelte app.This is a simple
        Svelte app.This is a simple Svelte app.This is a simple Svelte app.This
        is a simple Svelte app.This is a simple Svelte app.This is a simple
        Svelte app.
      </p>
    </div>
  {/if}
</div>

<style>
  #container {
    position: absolute;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100vw;
    height: 100vh;
  }
  #menuButton {
    position: absolute;
    top: 0%;
    left: 0%;
    transform: translate(0%, 0%);
    z-index: 999;
  }

  #infoButton {
    position: absolute;
    background-color: grey;
    border-width: 1px;
    border: #ff3e00 solid;
    width: 50vw;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    z-index: 1000;
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
  }

  button:focus {
    border: 2px solid #ff3e00;
  }

  button:active {
    background-color: rgba(255, 62, 0, 0.2);
  }
</style>
