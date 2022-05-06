<script>
  import { currentState, defaultState } from '../helpers/stores.js';
</script>

<div class="container">
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
    {/if}
    <button
      on:click={() => {
        $currentState.overlayComponent = 99;
      }}>Info</button>
  {:else}
    <button
      id="menuButton"
      on:click={() => {
        $currentState.showMenu = !$currentState.showMenu;
      }}>=</button>
  {/if}
</div>

<style>
  .container {
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
