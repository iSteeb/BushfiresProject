<script>
  import { currentState, defaultState } from '../helpers/stores.js';
  import { clickOutside } from '../helpers/click_outside.js';
</script>

<!-- TODO: Fix the floating menu that hides behind the damn SVG in desk -->
<div id="container">
  {#if $currentState.showMenu}
    {#if $currentState.appState == 0}
      <button
        on:click={() => {
          $currentState.appState = 1;
          $currentState.showMenu = false;
          $currentState.showInfoPanel = false;
        }}>Start</button>
    {:else}
      <button
        on:click={() => {
          $currentState.showMenu = false;
          $currentState.showInfoPanel = false;
        }}>Resume</button>
      <button
        on:click={() => {
          currentState.set(defaultState);
        }}>Reset</button>
    {/if}
    <button
      on:click={() => {
        $currentState.showInfoPanel = true;
      }}>Info</button>
  {:else}
    <button
      id="menuButton"
      on:click={() => {
        $currentState.showMenu = !$currentState.showMenu;
        $currentState.showInfoPanel = false;
      }}>=</button>
  {/if}

  {#if $currentState.showInfoPanel}
    <div
      id="infoButton"
      use:clickOutside
      on:outclick={() => ($currentState.showInfoPanel = false)}>
      <h1>Info</h1>
      <p>v0.4 - yewwwww!</p>
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
